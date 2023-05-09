# TypeProjectGpsRinex

## Overview

Search API for 'RINEX File' entry type

### Available Operations

* [SearchProjectGpsRinex](#searchprojectgpsrinex) - Search API for 'RINEX File' entry type

## SearchProjectGpsRinex

API to search for entries of type RINEX File

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
    res, err := s.TypeProjectGpsRinex.SearchProjectGpsRinex(ctx, operations.SearchProjectGpsRinexRequest{
        ChangedateFrom: types.MustTimeFromString("2021-02-09T16:27:22.070Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-16T11:02:07.974Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-02T06:41:37.594Z"),
        CreatedateTo: types.MustTimeFromString("2020-02-05T06:52:39.012Z"),
        Description: sdk.String("quod"),
        Filesuffix: sdk.String("voluptate"),
        Fromdate: types.MustTimeFromString("2022-03-09T07:14:52.283Z"),
        Group: sdk.String("maxime"),
        Max: sdk.Int64(681578),
        Maxlatitude: sdk.Float32(665.96),
        Maxlongitude: sdk.Float32(4057.89),
        Minlatitude: sdk.Float32(2359.7),
        Minlongitude: sdk.Float32(9824.09),
        Name: sdk.String("Lynda Donnelly"),
        Skip: sdk.Int64(21668),
        Text: sdk.String("laborum"),
        Todate: types.MustTimeFromString("2022-01-22T15:58:15.848Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
