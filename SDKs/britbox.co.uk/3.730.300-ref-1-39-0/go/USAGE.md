<!-- Start SDK Example Usage -->
```go
package main

import (
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
                "ldp",
            },
            Lang: "culpa",
        },
        Request: shared.AddPaymentMethodRequest{
            MakeDefault: false,
            Token: "consequuntur",
            Type: "Card",
        },
    }
    
    res, err := s.Account.AddPaymentMethod(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethod != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->