# TypeGeoHdf5

## Overview

Search API for 'HDF5 File' entry type

### Available Operations

* [SearchGeoHdf5](#searchgeohdf5) - Search API for 'HDF5 File' entry type

## SearchGeoHdf5

API to search for entries of type HDF5 File

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
    res, err := s.TypeGeoHdf5.SearchGeoHdf5(ctx, operations.SearchGeoHdf5Request{
        ChangedateFrom: types.MustTimeFromString("2021-09-11T20:45:20.947Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-02T23:06:10.498Z"),
        CreatedateFrom: types.MustTimeFromString("2021-10-03T12:56:33.515Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-20T07:11:32.953Z"),
        Description: sdk.String("ad"),
        Filesuffix: sdk.String("quae"),
        Fromdate: types.MustTimeFromString("2022-02-24T23:57:50.783Z"),
        Group: sdk.String("praesentium"),
        Max: sdk.Int64(695526),
        Maxlatitude: sdk.Float32(7368.53),
        Maxlongitude: sdk.Float32(2304.11),
        Minlatitude: sdk.Float32(976.76),
        Minlongitude: sdk.Float32(1181.26),
        Name: sdk.String("Ronald Wehner"),
        Skip: sdk.Int64(587967),
        Text: sdk.String("dolorum"),
        Todate: types.MustTimeFromString("2021-03-22T19:06:23.209Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
