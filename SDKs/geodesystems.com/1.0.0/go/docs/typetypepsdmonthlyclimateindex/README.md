# TypeTypePsdMonthlyClimateIndex

## Overview

Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

### Available Operations

* [SearchTypePsdMonthlyClimateIndex](#searchtypepsdmonthlyclimateindex) - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

## SearchTypePsdMonthlyClimateIndex

API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index

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
    res, err := s.TypeTypePsdMonthlyClimateIndex.SearchTypePsdMonthlyClimateIndex(ctx, operations.SearchTypePsdMonthlyClimateIndexRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-25T18:04:46.803Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-23T09:12:33.050Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-20T14:19:56.418Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-29T14:23:12.944Z"),
        Description: sdk.String("provident"),
        Filesuffix: sdk.String("quia"),
        Fromdate: types.MustTimeFromString("2022-03-16T18:13:20.175Z"),
        Group: sdk.String("doloribus"),
        Max: sdk.Int64(89010),
        Maxlatitude: sdk.Float32(1851.82),
        Maxlongitude: sdk.Float32(4812.67),
        Minlatitude: sdk.Float32(9557.83),
        Minlongitude: sdk.Float32(6941.48),
        Name: sdk.String("Tricia Barrows"),
        SearchTypePsdMonthlyClimateIndexUnits: sdk.String("beatae"),
        Skip: sdk.Int64(962397),
        Text: sdk.String("deleniti"),
        Todate: types.MustTimeFromString("2022-12-03T01:08:15.868Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
