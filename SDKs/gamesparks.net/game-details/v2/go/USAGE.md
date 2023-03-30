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
            EndDate: "2022-07-12",
            Keys: "quibusdam",
            Precision: "DAILY",
            Stage: "PREVIEW",
            StartDate: "2022-09-12",
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