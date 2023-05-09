# TypeGadgetsWeather

## Overview

Search API for 'Weather' entry type

### Available Operations

* [SearchGadgetsWeather](#searchgadgetsweather) - Search API for 'Weather' entry type

## SearchGadgetsWeather

API to search for entries of type Weather

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
    res, err := s.TypeGadgetsWeather.SearchGadgetsWeather(ctx, operations.SearchGadgetsWeatherRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-30T21:28:00.704Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-19T18:05:42.224Z"),
        CreatedateFrom: types.MustTimeFromString("2020-03-15T17:32:59.128Z"),
        CreatedateTo: types.MustTimeFromString("2021-06-22T21:20:56.552Z"),
        Description: sdk.String("ex"),
        Filesuffix: sdk.String("quaerat"),
        Fromdate: types.MustTimeFromString("2022-02-10T15:43:41.658Z"),
        Group: sdk.String("placeat"),
        Max: sdk.Int64(697274),
        Maxlatitude: sdk.Float32(3481.92),
        Maxlongitude: sdk.Float32(4633.44),
        Minlatitude: sdk.Float32(2114.55),
        Minlongitude: sdk.Float32(2646.19),
        Name: sdk.String("Bobbie Terry"),
        Skip: sdk.Int64(741232),
        Text: sdk.String("dicta"),
        Todate: types.MustTimeFromString("2021-12-30T18:01:47.888Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
