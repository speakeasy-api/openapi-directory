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
    
    req := operations.CampaignAnalyticsRequest{
        QueryParams: operations.CampaignAnalyticsQueryParams{
            CampaignID: "sit",
            EndingAt: "voluptas",
            Length: "culpa",
        },
    }
    
    res, err := s.Campaign.CampaignAnalytics(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->