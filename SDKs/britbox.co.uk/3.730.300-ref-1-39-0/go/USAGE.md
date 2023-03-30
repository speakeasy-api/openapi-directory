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
        Security: operations.AddPaymentMethodSecurity{
            AccountAuth: shared.SchemeAccountAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.AddPaymentMethodQueryParams{
            Ff: []shared.FeatureFlagsEnum{
                "rpt",
                "cas",
                "lrl",
            },
            Lang: "unde",
        },
        Request: shared.AddPaymentMethodRequest{
            MakeDefault: false,
            Token: "nulla",
            Type: "Card",
        },
    }

    ctx := context.Background()
    res, err := s.Account.AddPaymentMethod(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethod != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->