# TypeTypeSoundingWyoming

## Overview

Search API for 'UW Sounding' entry type

### Available Operations

* [SearchTypeSoundingWyoming](#searchtypesoundingwyoming) - Search API for 'UW Sounding' entry type

## SearchTypeSoundingWyoming

API to search for entries of type UW Sounding

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
    res, err := s.TypeTypeSoundingWyoming.SearchTypeSoundingWyoming(ctx, operations.SearchTypeSoundingWyomingRequest{
        ChangedateFrom: types.MustTimeFromString("2020-02-21T11:05:43.092Z"),
        ChangedateTo: types.MustTimeFromString("2021-11-17T23:25:34.923Z"),
        CreatedateFrom: types.MustTimeFromString("2020-11-16T17:27:52.094Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-04T07:57:15.879Z"),
        Description: sdk.String("reiciendis"),
        Filesuffix: sdk.String("debitis"),
        Fromdate: types.MustTimeFromString("2022-11-26T20:47:27.046Z"),
        Group: sdk.String("accusamus"),
        Max: sdk.Int64(372925),
        Maxlatitude: sdk.Float32(1344.12),
        Maxlongitude: sdk.Float32(5425.06),
        Minlatitude: sdk.Float32(6556.94),
        Minlongitude: sdk.Float32(2635.77),
        Name: sdk.String("Iris Schimmel MD"),
        Skip: sdk.Int64(507946),
        Text: sdk.String("ullam"),
        Todate: types.MustTimeFromString("2021-05-13T02:45:17.589Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
