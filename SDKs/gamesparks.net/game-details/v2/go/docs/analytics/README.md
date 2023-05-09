# Analytics

## Overview

Analytics Restv 2 Controller

### Available Operations

* [GETAnalyticsDataUsingGET](#getanalyticsdatausingget) - Returns the results of executed query defined by the parameters passed in
* [GETDataCountUsingGET](#getdatacountusingget) - Returns the count of executed query
* [GETRetentionUsingGET](#getretentionusingget) - Returns the percentage of user retention over the last 30 days

## GETAnalyticsDataUsingGET

Returns the results of executed query defined by the parameters passed in

### Example Usage

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
        APIKey: "error",
        DataType: operations.GETAnalyticsDataUsingGETDataTypeEnumSessionAnalytic,
        EndDate: types.MustDateFromString("2022-07-25"),
        Keys: sdk.String("magnam"),
        Precision: operations.GETAnalyticsDataUsingGETPrecisionEnumMonthly,
        Stage: operations.GETAnalyticsDataUsingGETStageEnumLive,
        StartDate: types.MustDateFromString("2022-03-08"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsDataSwaggerModels != nil {
        // handle response
    }
}
```

## GETDataCountUsingGET

Returns the count of executed query

### Example Usage

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
    res, err := s.Analytics.GETDataCountUsingGET(ctx, operations.GETDataCountUsingGETRequest{
        APIKey: "suscipit",
        QueryName: operations.GETDataCountUsingGETQueryNameEnumAverageDailyActiveUsers,
        Stage: operations.GETDataCountUsingGETStageEnumPreview,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsDataCountSwaggerModel != nil {
        // handle response
    }
}
```

## GETRetentionUsingGET

Returns the percentage of user retention over the last 30 days

### Example Usage

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
    res, err := s.Analytics.GETRetentionUsingGET(ctx, operations.GETRetentionUsingGETRequest{
        APIKey: "placeat",
        Stage: operations.GETRetentionUsingGETStageEnumPreview,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsDataCountSwaggerModel != nil {
        // handle response
    }
}
```
