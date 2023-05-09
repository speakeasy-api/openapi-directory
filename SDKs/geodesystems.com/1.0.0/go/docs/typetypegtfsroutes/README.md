# TypeTypeGtfsRoutes

## Overview

Search API for 'Transit Route Collection' entry type

### Available Operations

* [SearchTypeGtfsRoutes](#searchtypegtfsroutes) - Search API for 'Transit Route Collection' entry type

## SearchTypeGtfsRoutes

API to search for entries of type Transit Route Collection

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
    res, err := s.TypeTypeGtfsRoutes.SearchTypeGtfsRoutes(ctx, operations.SearchTypeGtfsRoutesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-22T06:36:31.491Z"),
        ChangedateTo: types.MustTimeFromString("2021-04-06T20:13:58.301Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-14T19:35:34.450Z"),
        CreatedateTo: types.MustTimeFromString("2020-12-28T23:57:16.474Z"),
        Description: sdk.String("sapiente"),
        Filesuffix: sdk.String("necessitatibus"),
        Fromdate: types.MustTimeFromString("2022-10-21T08:52:32.010Z"),
        Group: sdk.String("mollitia"),
        Max: sdk.Int64(530232),
        Maxlatitude: sdk.Float32(5006.92),
        Maxlongitude: sdk.Float32(9580.91),
        Minlatitude: sdk.Float32(2835.57),
        Minlongitude: sdk.Float32(2779.43),
        Name: sdk.String("Debbie Haley"),
        Skip: sdk.Int64(947704),
        Text: sdk.String("saepe"),
        Todate: types.MustTimeFromString("2020-06-05T01:17:49.031Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
