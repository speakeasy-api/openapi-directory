# TypeTripTrip

## Overview

Search API for 'Trip' entry type

### Available Operations

* [SearchTripTrip](#searchtriptrip) - Search API for 'Trip' entry type

## SearchTripTrip

API to search for entries of type Trip

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
    res, err := s.TypeTripTrip.SearchTripTrip(ctx, operations.SearchTripTripRequest{
        ChangedateFrom: types.MustTimeFromString("2020-09-09T13:31:45.084Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-10T17:05:42.553Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-11T11:22:54.568Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-16T13:36:46.452Z"),
        Description: sdk.String("maxime"),
        Filesuffix: sdk.String("maxime"),
        Fromdate: types.MustTimeFromString("2022-12-04T20:35:09.945Z"),
        Group: sdk.String("ea"),
        Max: sdk.Int64(771321),
        Maxlatitude: sdk.Float32(5184.32),
        Maxlongitude: sdk.Float32(7622.97),
        Minlatitude: sdk.Float32(6651.83),
        Minlongitude: sdk.Float32(815.41),
        Name: sdk.String("Kari Balistreri"),
        Skip: sdk.Int64(136432),
        Text: sdk.String("perspiciatis"),
        Todate: types.MustTimeFromString("2022-07-07T09:19:49.741Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
