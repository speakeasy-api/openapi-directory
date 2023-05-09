# TypeGeoShapefileFips

## Overview

Search API for 'Shapefile with FIPS Code' entry type

### Available Operations

* [SearchGeoShapefileFips](#searchgeoshapefilefips) - Search API for 'Shapefile with FIPS Code' entry type

## SearchGeoShapefileFips

API to search for entries of type Shapefile with FIPS Code

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
    res, err := s.TypeGeoShapefileFips.SearchGeoShapefileFips(ctx, operations.SearchGeoShapefileFipsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-13T01:51:09.877Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-26T03:09:04.188Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-30T18:20:54.048Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-05T10:40:26.460Z"),
        Description: sdk.String("hic"),
        Filesuffix: sdk.String("deserunt"),
        Fromdate: types.MustTimeFromString("2022-03-31T22:08:57.998Z"),
        Group: sdk.String("distinctio"),
        Max: sdk.Int64(450224),
        Maxlatitude: sdk.Float32(3499.93),
        Maxlongitude: sdk.Float32(2883),
        Minlatitude: sdk.Float32(2543.82),
        Minlongitude: sdk.Float32(9211.93),
        Name: sdk.String("Maureen Champlin"),
        Skip: sdk.Int64(44016),
        Text: sdk.String("odit"),
        Todate: types.MustTimeFromString("2022-05-14T18:52:42.885Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
