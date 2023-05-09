# TypeTypeGtfsStops

## Overview

Search API for 'Transit Stop Collection' entry type

### Available Operations

* [SearchTypeGtfsStops](#searchtypegtfsstops) - Search API for 'Transit Stop Collection' entry type

## SearchTypeGtfsStops

API to search for entries of type Transit Stop Collection

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
    res, err := s.TypeTypeGtfsStops.SearchTypeGtfsStops(ctx, operations.SearchTypeGtfsStopsRequest{
        ChangedateFrom: types.MustTimeFromString("2021-08-20T05:05:50.222Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-25T19:21:38.946Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-28T00:08:33.411Z"),
        CreatedateTo: types.MustTimeFromString("2021-01-20T18:12:10.943Z"),
        Description: sdk.String("omnis"),
        Filesuffix: sdk.String("quis"),
        Fromdate: types.MustTimeFromString("2021-10-08T17:46:54.478Z"),
        Group: sdk.String("aliquam"),
        Max: sdk.Int64(878595),
        Maxlatitude: sdk.Float32(3944.91),
        Maxlongitude: sdk.Float32(5066.89),
        Minlatitude: sdk.Float32(4331.94),
        Minlongitude: sdk.Float32(1151.37),
        Name: sdk.String("Owen Reinger"),
        Skip: sdk.Int64(983067),
        Text: sdk.String("iste"),
        Todate: types.MustTimeFromString("2021-11-21T10:33:51.138Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
