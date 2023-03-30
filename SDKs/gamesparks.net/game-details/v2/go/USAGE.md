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

    req := operations.GETAnalyticsDataUsingGETRequest{
        PathParams: operations.GETAnalyticsDataUsingGETPathParams{
            APIKey: "corrupti",
        },
        QueryParams: operations.GETAnalyticsDataUsingGETQueryParams{
            DataType: "sessionAnalytic",
            EndDate: "2021-04-24",
            Keys: "unde",
            Precision: "MONTHLY",
            Stage: "PREVIEW",
            StartDate: "2021-09-24",
        },
    }

    ctx := context.Background()
    res, err := s.Analytics.GETAnalyticsDataUsingGET(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsDataSwaggerModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->