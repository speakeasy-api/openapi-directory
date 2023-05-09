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
    res, err := s.General.PostGet3dsAvailability(ctx, shared.ThreeDSAvailabilityRequest{
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
        CardNumber: sdk.String("iure"),
        MerchantAccount: "magnam",
        RecurringDetailReference: sdk.String("debitis"),
        ShopperReference: sdk.String("ipsa"),
    }, operations.PostGet3dsAvailabilitySecurity{
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