# TypeGeoGeotiff

## Overview

Search API for 'GeoTIFF' entry type

### Available Operations

* [SearchGeoGeotiff](#searchgeogeotiff) - Search API for 'GeoTIFF' entry type

## SearchGeoGeotiff

API to search for entries of type GeoTIFF

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
    res, err := s.TypeGeoGeotiff.SearchGeoGeotiff(ctx, operations.SearchGeoGeotiffRequest{
        ChangedateFrom: types.MustTimeFromString("2021-12-15T19:28:43.232Z"),
        ChangedateTo: types.MustTimeFromString("2020-06-10T07:13:59.609Z"),
        CreatedateFrom: types.MustTimeFromString("2021-03-22T16:52:21.456Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-12T15:53:23.836Z"),
        Description: sdk.String("dicta"),
        Filesuffix: sdk.String("error"),
        Fromdate: types.MustTimeFromString("2022-08-31T21:53:00.029Z"),
        Group: sdk.String("dignissimos"),
        Max: sdk.Int64(458970),
        Maxlatitude: sdk.Float32(8541.15),
        Maxlongitude: sdk.Float32(3223.33),
        Minlatitude: sdk.Float32(1348.18),
        Minlongitude: sdk.Float32(3165.01),
        Name: sdk.String("Tyrone Kulas Jr."),
        Skip: sdk.Int64(280114),
        Text: sdk.String("accusamus"),
        Todate: types.MustTimeFromString("2020-10-18T09:05:37.895Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
