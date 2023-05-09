# TypeNwsfeed

## Overview

Search API for 'NWS Forecast Feed' entry type

### Available Operations

* [SearchNwsfeed](#searchnwsfeed) - Search API for 'NWS Forecast Feed' entry type

## SearchNwsfeed

API to search for entries of type NWS Forecast Feed

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
    res, err := s.TypeNwsfeed.SearchNwsfeed(ctx, operations.SearchNwsfeedRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-31T06:08:59.133Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-12T00:16:23.616Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-17T18:12:26.163Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-16T07:19:53.468Z"),
        Description: sdk.String("saepe"),
        Filesuffix: sdk.String("delectus"),
        Fromdate: types.MustTimeFromString("2021-10-05T07:23:40.175Z"),
        Group: sdk.String("cumque"),
        Max: sdk.Int64(617497),
        Maxlatitude: sdk.Float32(3125.11),
        Maxlongitude: sdk.Float32(9853.79),
        Minlatitude: sdk.Float32(1560.98),
        Minlongitude: sdk.Float32(8872.84),
        Name: sdk.String("Noel Hauck"),
        Skip: sdk.Int64(365539),
        Text: sdk.String("illum"),
        Todate: types.MustTimeFromString("2022-12-23T20:22:30.828Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
