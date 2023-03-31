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

    req := operations.FindListingRecommendationsRequest{
        FindListingRecommendationRequest: &shared.FindListingRecommendationRequest{
            ListingIds: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XEbayCMarketplaceID: "unde",
        Filter: "nulla",
        Limit: "corrupti",
        Offset: "illum",
    }

    ctx := context.Background()
    res, err := s.ListingRecommendation.FindListingRecommendations(ctx, req, operations.FindListingRecommendationsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListingRecommendationCollection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->