# TypeGeoKml

## Overview

Search API for 'KML/KMZ File' entry type

### Available Operations

* [SearchGeoKml](#searchgeokml) - Search API for 'KML/KMZ File' entry type

## SearchGeoKml

API to search for entries of type KML/KMZ File

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
    res, err := s.TypeGeoKml.SearchGeoKml(ctx, operations.SearchGeoKmlRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-20T23:31:33.018Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-11T07:45:44.709Z"),
        CreatedateFrom: types.MustTimeFromString("2020-11-15T21:30:50.859Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-29T21:33:00.572Z"),
        Description: sdk.String("sint"),
        Filesuffix: sdk.String("accusamus"),
        Fromdate: types.MustTimeFromString("2022-06-25T04:05:11.831Z"),
        Group: sdk.String("dicta"),
        Max: sdk.Int64(30661),
        Maxlatitude: sdk.Float32(2443.76),
        Maxlongitude: sdk.Float32(2244.13),
        Minlatitude: sdk.Float32(1242.89),
        Minlongitude: sdk.Float32(9536.76),
        Name: sdk.String("Dr. Misty Lindgren"),
        Skip: sdk.Int64(794988),
        Text: sdk.String("esse"),
        Todate: types.MustTimeFromString("2022-12-24T08:28:37.764Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
