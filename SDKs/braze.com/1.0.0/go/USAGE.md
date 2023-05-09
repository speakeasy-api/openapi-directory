<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Campaign.CampaignAnalytics(ctx, operations.CampaignAnalyticsRequest{
        CampaignID: sdk.String("{{campaign_identifier}}"),
        EndingAt: sdk.String("2020-06-28T23:59:59-5:00"),
        Length: sdk.String("7"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->