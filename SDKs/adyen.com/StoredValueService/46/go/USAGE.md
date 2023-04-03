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

    req := shared.StoredValueStatusChangeRequest{
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
        RecurringDetailReference: "iure",
        Reference: "magnam",
        ShopperInteraction: "POS",
        ShopperReference: "ipsa",
        Status: "inactive",
        Store: "tempora",
    }

    ctx := context.Background()
    res, err := s.General.PostChangeStatus(ctx, req, operations.PostChangeStatusSecurity{
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