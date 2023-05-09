# TypeTypeExtremes

## Overview

Search API for 'NOAA Extremes Data' entry type

### Available Operations

* [SearchTypeExtremes](#searchtypeextremes) - Search API for 'NOAA Extremes Data' entry type

## SearchTypeExtremes

API to search for entries of type NOAA Extremes Data

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
    res, err := s.TypeTypeExtremes.SearchTypeExtremes(ctx, operations.SearchTypeExtremesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-29T14:05:24.229Z"),
        ChangedateTo: types.MustTimeFromString("2021-07-19T00:41:21.069Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-26T15:14:21.697Z"),
        CreatedateTo: types.MustTimeFromString("2020-07-15T17:52:33.252Z"),
        Description: sdk.String("tenetur"),
        Filesuffix: sdk.String("sed"),
        Fromdate: types.MustTimeFromString("2021-06-29T12:20:12.457Z"),
        Group: sdk.String("id"),
        Max: sdk.Int64(719077),
        Maxlatitude: sdk.Float32(3585.58),
        Maxlongitude: sdk.Float32(5595.71),
        Minlatitude: sdk.Float32(7453.04),
        Minlongitude: sdk.Float32(5846.45),
        Name: sdk.String("Henry Schaden"),
        SearchTypeExtremesRegion: sdk.String("suscipit"),
        SearchTypeExtremesVariable: sdk.String("facere"),
        Skip: sdk.Int64(867581),
        Text: sdk.String("nam"),
        Todate: types.MustTimeFromString("2022-06-15T17:31:08.491Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
