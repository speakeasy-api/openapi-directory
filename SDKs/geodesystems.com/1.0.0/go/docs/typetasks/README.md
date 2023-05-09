# TypeTasks

## Overview

Search API for 'Tasks' entry type

### Available Operations

* [SearchTasks](#searchtasks) - Search API for 'Tasks' entry type

## SearchTasks

API to search for entries of type Tasks

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
    res, err := s.TypeTasks.SearchTasks(ctx, operations.SearchTasksRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-09T20:34:50.690Z"),
        ChangedateTo: types.MustTimeFromString("2021-05-26T13:45:22.454Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-14T19:22:57.784Z"),
        CreatedateTo: types.MustTimeFromString("2021-05-16T15:40:19.045Z"),
        Description: sdk.String("magnam"),
        Filesuffix: sdk.String("perspiciatis"),
        Fromdate: types.MustTimeFromString("2022-06-15T16:15:25.092Z"),
        Group: sdk.String("sunt"),
        Max: sdk.Int64(364284),
        Maxlatitude: sdk.Float32(9642.1),
        Maxlongitude: sdk.Float32(8484.39),
        Minlatitude: sdk.Float32(7808.85),
        Minlongitude: sdk.Float32(3096.34),
        Name: sdk.String("Jacquelyn Lueilwitz"),
        SearchDbTasksAssignedto: sdk.String("maxime"),
        SearchDbTasksComplete: sdk.Float64(1514.86),
        SearchDbTasksEnddate: sdk.String("minus"),
        SearchDbTasksPriority: sdk.String("consequuntur"),
        SearchDbTasksStartdate: sdk.String("possimus"),
        SearchDbTasksStatus: sdk.String("delectus"),
        SearchDbTasksTitle: sdk.String("harum"),
        Skip: sdk.Int64(304964),
        Text: sdk.String("eligendi"),
        Todate: types.MustTimeFromString("2020-08-30T04:13:05.248Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
