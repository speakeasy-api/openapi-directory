# TypeTypeGtfsStop

## Overview

Search API for 'Transit Stop' entry type

### Available Operations

* [SearchTypeGtfsStop](#searchtypegtfsstop) - Search API for 'Transit Stop' entry type

## SearchTypeGtfsStop

API to search for entries of type Transit Stop

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
    res, err := s.TypeTypeGtfsStop.SearchTypeGtfsStop(ctx, operations.SearchTypeGtfsStopRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-16T12:02:20.522Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-19T22:52:38.662Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-23T05:40:24.870Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-11T20:00:29.474Z"),
        Description: sdk.String("placeat"),
        Filesuffix: sdk.String("quos"),
        Fromdate: types.MustTimeFromString("2022-12-12T02:35:45.315Z"),
        Group: sdk.String("natus"),
        Max: sdk.Int64(191202),
        Maxlatitude: sdk.Float32(4722.9),
        Maxlongitude: sdk.Float32(6040.27),
        Minlatitude: sdk.Float32(6463.21),
        Minlongitude: sdk.Float32(6621.84),
        Name: sdk.String("Toni Rowe"),
        SearchTypeGtfsStopLocationType: sdk.String("asperiores"),
        SearchTypeGtfsStopStopCode: sdk.String("nam"),
        SearchTypeGtfsStopStopID: sdk.String("cumque"),
        SearchTypeGtfsStopWheelchairBoarding: sdk.String("sapiente"),
        SearchTypeGtfsStopZoneID: sdk.String("quam"),
        Skip: sdk.Int64(579242),
        Text: sdk.String("repellendus"),
        Todate: types.MustTimeFromString("2022-10-05T02:48:45.510Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
