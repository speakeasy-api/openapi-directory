# TypeTypeGtfsTrip

## Overview

Search API for 'Transit Trip' entry type

### Available Operations

* [SearchTypeGtfsTrip](#searchtypegtfstrip) - Search API for 'Transit Trip' entry type

## SearchTypeGtfsTrip

API to search for entries of type Transit Trip

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
    res, err := s.TypeTypeGtfsTrip.SearchTypeGtfsTrip(ctx, operations.SearchTypeGtfsTripRequest{
        ChangedateFrom: types.MustTimeFromString("2021-07-18T16:38:13.772Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-02T02:24:08.784Z"),
        CreatedateFrom: types.MustTimeFromString("2021-04-07T08:21:07.346Z"),
        CreatedateTo: types.MustTimeFromString("2020-04-24T09:30:03.833Z"),
        Description: sdk.String("rem"),
        Filesuffix: sdk.String("a"),
        Fromdate: types.MustTimeFromString("2022-08-31T20:35:45.651Z"),
        Group: sdk.String("aut"),
        Max: sdk.Int64(170126),
        Maxlatitude: sdk.Float32(7002.04),
        Maxlongitude: sdk.Float32(9766.41),
        Minlatitude: sdk.Float32(8584.78),
        Minlongitude: sdk.Float32(7967.05),
        Name: sdk.String("Ms. Joanne Halvorson"),
        SearchTypeGtfsTripBikesAllowed: sdk.String("illo"),
        SearchTypeGtfsTripStopIds: sdk.String("a"),
        SearchTypeGtfsTripTripID: sdk.String("et"),
        SearchTypeGtfsTripWheelchairAccessible: sdk.String("molestiae"),
        Skip: sdk.Int64(421111),
        Text: sdk.String("dolore"),
        Todate: types.MustTimeFromString("2022-08-29T00:38:22.538Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
