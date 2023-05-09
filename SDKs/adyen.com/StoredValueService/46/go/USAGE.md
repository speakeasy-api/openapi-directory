<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostChangeStatus(ctx, shared.StoredValueStatusChangeRequest{
        Amount: &shared.Amount{
            Currency: "corrupti",
            Value: 592845,
        },
        MerchantAccount: "distinctio",
        PaymentMethod: map[string]string{
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
        },
        RecurringDetailReference: sdk.String("iure"),
        Reference: "magnam",
        ShopperInteraction: shared.StoredValueStatusChangeRequestShopperInteractionEnumPos.ToPointer(),
        ShopperReference: sdk.String("ipsa"),
        Status: shared.StoredValueStatusChangeRequestStatusEnumInactive,
        Store: sdk.String("tempora"),
    }, operations.PostChangeStatusSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoredValueStatusChangeResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->