# Aggregated

### Available Operations

* [AggregatedGetConversionsSummary](#aggregatedgetconversionssummary) - Retrieve statistics about a subset of conversions for a timeframe with conversions data
* [AggregatedGetDatapointsSummary](#aggregatedgetdatapointssummary) - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* [AggregatedGetGroupsSummary](#aggregatedgetgroupssummary) - Retrieve statistics about a subset of groups for a timeframe with groups data
* [AggregatedGetStatisticsList](#aggregatedgetstatisticslist) - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
* [AggregatedGetStatisticsSingle](#aggregatedgetstatisticssingle) - Retrieve statistics about this customer for a timeframe

## AggregatedGetConversionsSummary

Retrieve statistics about a subset of conversions for a timeframe with conversions data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Aggregated.AggregatedGetConversionsSummary(ctx, operations.AggregatedGetConversionsSummaryRequest{
        FromDay: sdk.String("distinctio"),
        Limit: sdk.Int(990339),
        Offset: sdk.Int(469497),
        SortBy: sdk.String("ipsum"),
        SortDirection: operations.AggregatedGetConversionsSummarySortDirectionEnumAsc.ToPointer(),
        Status: operations.AggregatedGetConversionsSummaryStatusEnumActive.ToPointer(),
        TextSearch: sdk.String("saepe"),
        TimeFrame: operations.AggregatedGetConversionsSummaryTimeFrameEnumLast30,
        ToDay: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAggregatedAggregatedSummaryResult != nil {
        // handle response
    }
}
```

## AggregatedGetDatapointsSummary

Retrieve statistics about a subset of datapoints for a timeframe with datapoints data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Aggregated.AggregatedGetDatapointsSummary(ctx, operations.AggregatedGetDatapointsSummaryRequest{
        Favourite: sdk.Bool(false),
        FromDay: sdk.String("perferendis"),
        GroupID: sdk.Int64(229219),
        Limit: sdk.Int(758379),
        Offset: sdk.Int(881586),
        SortBy: sdk.String("ad"),
        SortDirection: operations.AggregatedGetDatapointsSummarySortDirectionEnumDesc.ToPointer(),
        Status: operations.AggregatedGetDatapointsSummaryStatusEnumActive.ToPointer(),
        Tag: sdk.String("deserunt"),
        TextSearch: sdk.String("provident"),
        TimeFrame: operations.AggregatedGetDatapointsSummaryTimeFrameEnumLastmonth,
        ToDay: sdk.String("repellendus"),
        Type: operations.AggregatedGetDatapointsSummaryTypeEnumTl,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAggregatedAggregatedSummaryResult != nil {
        // handle response
    }
}
```

## AggregatedGetGroupsSummary

Retrieve statistics about a subset of groups for a timeframe with groups data

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Aggregated.AggregatedGetGroupsSummary(ctx, operations.AggregatedGetGroupsSummaryRequest{
        Favourite: sdk.Bool(false),
        FromDay: sdk.String("similique"),
        Limit: sdk.Int(55),
        Offset: sdk.Int(872651),
        SortBy: sdk.String("quaerat"),
        SortDirection: operations.AggregatedGetGroupsSummarySortDirectionEnumAsc.ToPointer(),
        Status: operations.AggregatedGetGroupsSummaryStatusEnumDeleted.ToPointer(),
        Tag: sdk.String("quod"),
        TextSearch: sdk.String("officiis"),
        TimeFrame: operations.AggregatedGetGroupsSummaryTimeFrameEnumLast7,
        ToDay: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAggregatedAggregatedSummaryResult != nil {
        // handle response
    }
}
```

## AggregatedGetStatisticsList

Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Aggregated.AggregatedGetStatisticsList(ctx, operations.AggregatedGetStatisticsListRequest{
        FromDay: sdk.String("a"),
        GroupBy: operations.AggregatedGetStatisticsListGroupByEnumWeek.ToPointer(),
        TimeFrame: operations.AggregatedGetStatisticsListTimeFrameEnumLast12months,
        ToDay: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## AggregatedGetStatisticsSingle

Retrieve statistics about this customer for a timeframe

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Aggregated.AggregatedGetStatisticsSingle(ctx, operations.AggregatedGetStatisticsSingleRequest{
        FromDay: sdk.String("ipsum"),
        Hourly: sdk.Bool(false),
        OnlyFavorites: sdk.String("quisquam"),
        TimeFrame: operations.AggregatedGetStatisticsSingleTimeFrameEnumCustom,
        ToDay: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```
