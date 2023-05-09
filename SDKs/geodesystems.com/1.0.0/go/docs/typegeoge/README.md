# TypeGeoGe

## Overview

Search API for 'GeoJson File' entry type

### Available Operations

* [SearchGeoGeojson](#searchgeogeojson) - Search API for 'GeoJson File' entry type

## SearchGeoGeojson

API to search for entries of type GeoJson File

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
    res, err := s.TypeGeoGe.SearchGeoGeojson(ctx, operations.SearchGeoGeojsonRequest{
        ChangedateFrom: types.MustTimeFromString("2021-07-16T07:44:14.632Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-09T04:56:37.970Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-01T03:10:08.438Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-20T12:36:58.674Z"),
        Description: sdk.String("quis"),
        Filesuffix: sdk.String("nisi"),
        Fromdate: types.MustTimeFromString("2021-05-31T00:14:48.748Z"),
        Group: sdk.String("facere"),
        Max: sdk.Int64(706061),
        Maxlatitude: sdk.Float32(2176.63),
        Maxlongitude: sdk.Float32(3189.17),
        Minlatitude: sdk.Float32(9738.19),
        Minlongitude: sdk.Float32(9745.89),
        Name: sdk.String("Raquel Greenfelder"),
        Skip: sdk.Int64(440777),
        Text: sdk.String("nostrum"),
        Todate: types.MustTimeFromString("2022-07-09T18:39:59.383Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
