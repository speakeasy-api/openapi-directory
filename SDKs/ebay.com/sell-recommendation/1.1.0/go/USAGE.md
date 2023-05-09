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
    res, err := s.ListingRecommendation.FindListingRecommendations(ctx, operations.FindListingRecommendationsRequest{
        FindListingRecommendationRequest: &shared.FindListingRecommendationRequest{
            ListingIds: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XEbayCMarketplaceID: "unde",
        Filter: sdk.String("nulla"),
        Limit: sdk.String("corrupti"),
        Offset: sdk.String("illum"),
    }, operations.FindListingRecommendationsSecurity{
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