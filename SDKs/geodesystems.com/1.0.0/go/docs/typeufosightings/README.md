# TypeUfoSightings

## Overview

Search API for 'Ufo Sightings' entry type

### Available Operations

* [SearchUfoSightings](#searchufosightings) - Search API for 'Ufo Sightings' entry type

## SearchUfoSightings

API to search for entries of type Ufo Sightings

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
    res, err := s.TypeUfoSightings.SearchUfoSightings(ctx, operations.SearchUfoSightingsRequest{
        ChangedateFrom: types.MustTimeFromString("2020-03-21T13:08:52.539Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-19T00:24:16.492Z"),
        CreatedateFrom: types.MustTimeFromString("2020-09-18T16:55:04.907Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-22T23:18:05.416Z"),
        Description: sdk.String("itaque"),
        Filesuffix: sdk.String("assumenda"),
        Fromdate: types.MustTimeFromString("2021-08-17T00:29:41.636Z"),
        Group: sdk.String("a"),
        Max: sdk.Int64(465190),
        Maxlatitude: sdk.Float32(5536.34),
        Maxlongitude: sdk.Float32(4937.74),
        Minlatitude: sdk.Float32(9366.83),
        Minlongitude: sdk.Float32(2369.1),
        Name: sdk.String("Delia Bartell"),
        SearchDbUfoSightingsCity: sdk.String("nesciunt"),
        SearchDbUfoSightingsComments: sdk.String("pariatur"),
        SearchDbUfoSightingsCountry: sdk.String("velit"),
        SearchDbUfoSightingsDatePosted: sdk.String("necessitatibus"),
        SearchDbUfoSightingsDatetime: sdk.String("facere"),
        SearchDbUfoSightingsDurationHoursMin: sdk.String("quae"),
        SearchDbUfoSightingsDurationSeconds: sdk.Float64(7685.46),
        SearchDbUfoSightingsLatitude: sdk.Float64(3532.32),
        SearchDbUfoSightingsLongitude: sdk.Float64(4271.07),
        SearchDbUfoSightingsShape: sdk.String("reprehenderit"),
        SearchDbUfoSightingsState: sdk.String("aut"),
        Skip: sdk.Int64(926225),
        Text: sdk.String("voluptatibus"),
        Todate: types.MustTimeFromString("2022-11-13T15:01:42.389Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
