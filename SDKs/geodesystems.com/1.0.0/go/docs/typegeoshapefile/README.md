# TypeGeoShapefile

## Overview

Search API for 'Shapefile' entry type

### Available Operations

* [SearchGeoShapefile](#searchgeoshapefile) - Search API for 'Shapefile' entry type

## SearchGeoShapefile

API to search for entries of type Shapefile

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
    res, err := s.TypeGeoShapefile.SearchGeoShapefile(ctx, operations.SearchGeoShapefileRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-06T12:29:45.421Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-06T08:20:32.050Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-09T04:08:42.865Z"),
        CreatedateTo: types.MustTimeFromString("2021-03-27T10:34:01.168Z"),
        Description: sdk.String("consectetur"),
        Filesuffix: sdk.String("eligendi"),
        Fromdate: types.MustTimeFromString("2022-10-06T22:05:31.165Z"),
        Group: sdk.String("soluta"),
        Max: sdk.Int64(620500),
        Maxlatitude: sdk.Float32(8398.07),
        Maxlongitude: sdk.Float32(6396.22),
        Minlatitude: sdk.Float32(2288.57),
        Minlongitude: sdk.Float32(9485.41),
        Name: sdk.String("Angelica Waters"),
        Skip: sdk.Int64(490420),
        Text: sdk.String("vero"),
        Todate: types.MustTimeFromString("2022-10-08T04:19:24.254Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
