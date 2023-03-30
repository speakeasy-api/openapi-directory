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
        Security: operations.FindListingRecommendationsSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.FindListingRecommendationsQueryParams{
            Filter: "corrupti",
            Limit: "provident",
            Offset: "distinctio",
        },
        Headers: operations.FindListingRecommendationsHeaders{
            XEbayCMarketplaceID: "quibusdam",
        },
        Request: &shared.FindListingRecommendationRequest{
            ListingIds: []string{
                "nulla",
                "corrupti",
                "illum",
            },
        },
    }

    ctx := context.Background()
    res, err := s.ListingRecommendation.FindListingRecommendations(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListingRecommendationCollection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->