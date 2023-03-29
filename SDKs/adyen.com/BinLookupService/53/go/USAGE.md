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
                "deserunt": "porro",
                "nulla": "id",
                "vero": "perspiciatis",
            },
            Brands: []string{
                "nihil",
                "fuga",
                "facilis",
                "eum",
            },
            CardNumber: "iusto",
            MerchantAccount: "ullam",
            RecurringDetailReference: "saepe",
            ShopperReference: "inventore",
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