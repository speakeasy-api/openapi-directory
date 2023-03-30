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

    req := operations.PostGet3dsAvailabilityRequest{
        Security: operations.PostGet3dsAvailabilitySecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.ThreeDSAvailabilityRequest{
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
        },
    }

    ctx := context.Background()
    res, err := s.General.PostGet3dsAvailability(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ThreeDSAvailabilityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->