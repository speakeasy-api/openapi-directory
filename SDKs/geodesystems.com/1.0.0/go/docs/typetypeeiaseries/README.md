# TypeTypeEiaSeries

## Overview

Search API for 'EIA Series' entry type

### Available Operations

* [SearchTypeEiaSeries](#searchtypeeiaseries) - Search API for 'EIA Series' entry type

## SearchTypeEiaSeries

API to search for entries of type EIA Series

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
    res, err := s.TypeTypeEiaSeries.SearchTypeEiaSeries(ctx, operations.SearchTypeEiaSeriesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-16T10:46:58.362Z"),
        ChangedateTo: types.MustTimeFromString("2021-11-03T10:03:07.115Z"),
        CreatedateFrom: types.MustTimeFromString("2021-03-16T20:58:04.785Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-01T02:30:07.830Z"),
        Description: sdk.String("optio"),
        Filesuffix: sdk.String("eveniet"),
        Fromdate: types.MustTimeFromString("2021-06-28T15:17:19.917Z"),
        Group: sdk.String("a"),
        Max: sdk.Int64(620842),
        Maxlatitude: sdk.Float32(9590),
        Maxlongitude: sdk.Float32(8329.89),
        Minlatitude: sdk.Float32(7063.71),
        Minlongitude: sdk.Float32(5645.97),
        Name: sdk.String("Catherine Bashirian"),
        Skip: sdk.Int64(245849),
        Text: sdk.String("tempore"),
        Todate: types.MustTimeFromString("2021-02-13T08:00:41.549Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
