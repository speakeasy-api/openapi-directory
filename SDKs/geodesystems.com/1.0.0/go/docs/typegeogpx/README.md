# TypeGeoGpx

## Overview

Search API for 'GPX GPS File' entry type

### Available Operations

* [SearchGeoGpx](#searchgeogpx) - Search API for 'GPX GPS File' entry type

## SearchGeoGpx

API to search for entries of type GPX GPS File

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
    res, err := s.TypeGeoGpx.SearchGeoGpx(ctx, operations.SearchGeoGpxRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-28T13:51:54.669Z"),
        ChangedateTo: types.MustTimeFromString("2020-03-08T14:51:04.568Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-30T04:42:17.193Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-01T01:40:36.755Z"),
        Description: sdk.String("quisquam"),
        Filesuffix: sdk.String("sequi"),
        Fromdate: types.MustTimeFromString("2022-06-19T18:12:14.535Z"),
        Group: sdk.String("illo"),
        Max: sdk.Int64(290248),
        Maxlatitude: sdk.Float32(8288.41),
        Maxlongitude: sdk.Float32(3041.73),
        Minlatitude: sdk.Float32(7904.63),
        Minlongitude: sdk.Float32(5910.65),
        Name: sdk.String("Cornelius Altenwerth"),
        SearchGeoGpxDistance: sdk.Float64(7239.42),
        SearchGeoGpxElevationGain: sdk.Float64(7119.91),
        SearchGeoGpxElevationLoss: sdk.Float64(5591.74),
        SearchGeoGpxMovingTime: sdk.Float64(5908.58),
        SearchGeoGpxSpeed: sdk.Float64(9222.99),
        SearchGeoGpxTotalTime: sdk.Float64(7000.45),
        Skip: sdk.Int64(492361),
        Text: sdk.String("corporis"),
        Todate: types.MustTimeFromString("2021-02-10T19:58:48.033Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
