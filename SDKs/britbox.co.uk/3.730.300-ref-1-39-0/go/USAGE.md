<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AddPaymentMethod(ctx, operations.AddPaymentMethodRequest{
        AddPaymentMethodRequest: shared.AddPaymentMethodRequest{
            MakeDefault: sdk.Bool(false),
            Token: "corrupti",
            Type: shared.AddPaymentMethodRequestTypeEnumCard,
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumRpt,
        },
        Lang: sdk.String("nulla"),
    }, operations.AddPaymentMethodSecurity{
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