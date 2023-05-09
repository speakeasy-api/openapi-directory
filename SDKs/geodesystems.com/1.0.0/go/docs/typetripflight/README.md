# TypeTripFlight

## Overview

Search API for 'Flight Leg' entry type

### Available Operations

* [SearchTripFlight](#searchtripflight) - Search API for 'Flight Leg' entry type

## SearchTripFlight

API to search for entries of type Flight Leg

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
    res, err := s.TypeTripFlight.SearchTripFlight(ctx, operations.SearchTripFlightRequest{
        ChangedateFrom: types.MustTimeFromString("2022-02-23T18:01:52.364Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-20T08:27:41.552Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-25T04:25:07.986Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-09T09:51:02.198Z"),
        Description: sdk.String("similique"),
        Filesuffix: sdk.String("possimus"),
        Fromdate: types.MustTimeFromString("2021-11-11T06:21:56.630Z"),
        Group: sdk.String("ex"),
        Max: sdk.Int64(571550),
        Maxlatitude: sdk.Float32(6668.17),
        Maxlongitude: sdk.Float32(9835.56),
        Minlatitude: sdk.Float32(5890.31),
        Minlongitude: sdk.Float32(15.94),
        Name: sdk.String("Billy Jones"),
        Skip: sdk.Int64(805128),
        Text: sdk.String("facere"),
        Todate: types.MustTimeFromString("2021-03-29T02:26:00.921Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
