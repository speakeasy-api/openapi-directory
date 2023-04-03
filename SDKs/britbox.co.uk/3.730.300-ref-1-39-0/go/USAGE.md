<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AddPaymentMethodRequest{
        AddPaymentMethodRequest: shared.AddPaymentMethodRequest{
            MakeDefault: false,
            Token: "corrupti",
            Type: "Card",
        },
        Ff: []shared.FeatureFlagsEnum{
            "cas",
            "lrl",
            "rpt",
        },
        Lang: "nulla",
    }

    ctx := context.Background()
    res, err := s.Account.AddPaymentMethod(ctx, req, operations.AddPaymentMethodSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethod != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->