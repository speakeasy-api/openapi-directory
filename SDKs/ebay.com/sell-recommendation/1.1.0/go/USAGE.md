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
    
    req := operations.FindListingRecommendationsRequest{
        Security: operations.FindListingRecommendationsSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.FindListingRecommendationsQueryParams{
            Filter: "omnis",
            Limit: "aliquam",
            Offset: "provident",
        },
        Headers: operations.FindListingRecommendationsHeaders{
            XEBAYCMARKETPLACEID: "corporis",
        },
        Request: &shared.FindListingRecommendationRequest{
            ListingIds: []string{
                "at",
            },
        },
    }
    
    res, err := s.ListingRecommendation.FindListingRecommendations(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedListingRecommendationCollection != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->