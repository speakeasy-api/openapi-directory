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

    req := operations.CampaignAnalyticsRequest{
        QueryParams: operations.CampaignAnalyticsQueryParams{
            CampaignID: "{{campaign_identifier}}",
            EndingAt: "2020-06-28T23:59:59-5:00",
            Length: "7",
        },
    }

    ctx := context.Background()
    res, err := s.Campaign.CampaignAnalytics(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->