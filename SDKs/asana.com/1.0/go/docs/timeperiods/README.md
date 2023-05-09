# TimePeriods

## Overview

A time period is an object that represents a domain-scoped date range that can be set on [goals](/docs/goals).

### Available Operations

* [GetTimePeriod](#gettimeperiod) - Get a time period
* [GetTimePeriods](#gettimeperiods) - Get time periods

## GetTimePeriod

Returns the full record for a single time period.

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TimePeriods.GetTimePeriod(ctx, operations.GetTimePeriodRequest{
        OptFields: []string{
            "dolorum",
            "voluptatum",
        },
        OptPretty: sdk.Bool(false),
        TimePeriodGid: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTimePeriod200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTimePeriods

Returns compact time period records.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TimePeriods.GetTimePeriods(ctx, operations.GetTimePeriodsRequest{
        EndOn: types.MustDateFromString("2020-11-13"),
        Limit: sdk.Int64(892863),
        Offset: sdk.String("neque"),
        OptFields: []string{
            "nostrum",
            "officia",
            "dolorum",
        },
        OptPretty: sdk.Bool(false),
        StartOn: types.MustDateFromString("2021-03-30"),
        Workspace: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTimePeriods200ApplicationJSONObject != nil {
        // handle response
    }
}
```
