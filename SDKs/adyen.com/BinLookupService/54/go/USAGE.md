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

    req := shared.ThreeDSAvailabilityRequest{
        AdditionalData: map[string]string{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Brands: []string{
            "vel",
            "error",
            "deserunt",
            "suscipit",
        },
        CardNumber: "iure",
        MerchantAccount: "magnam",
        RecurringDetailReference: "debitis",
        ShopperReference: "ipsa",
    }

    ctx := context.Background()
    res, err := s.General.PostGet3dsAvailability(ctx, req, operations.PostGet3dsAvailabilitySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ThreeDSAvailabilityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->