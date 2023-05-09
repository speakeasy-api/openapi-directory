<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Analytics.GETAnalyticsDataUsingGET(ctx, operations.GETAnalyticsDataUsingGETRequest{
        APIKey: "corrupti",
        DataType: operations.GETAnalyticsDataUsingGETDataTypeEnumSessionAnalytic,
        EndDate: types.MustDateFromString("2021-04-24"),
        Keys: sdk.String("unde"),
        Precision: operations.GETAnalyticsDataUsingGETPrecisionEnumMonthly,
        Stage: operations.GETAnalyticsDataUsingGETStageEnumPreview,
        StartDate: types.MustDateFromString("2021-09-24"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsDataSwaggerModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->