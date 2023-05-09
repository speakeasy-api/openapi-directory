# TypeFitsData

## Overview

Search API for 'FITS Data File' entry type

### Available Operations

* [SearchFitsData](#searchfitsdata) - Search API for 'FITS Data File' entry type

## SearchFitsData

API to search for entries of type FITS Data File

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
    res, err := s.TypeFitsData.SearchFitsData(ctx, operations.SearchFitsDataRequest{
        ChangedateFrom: types.MustTimeFromString("2020-11-09T00:25:03.486Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-01T09:21:47.394Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-29T20:56:45.429Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-05T14:30:04.979Z"),
        Description: sdk.String("est"),
        Filesuffix: sdk.String("facere"),
        Fromdate: types.MustTimeFromString("2022-01-20T14:32:05.606Z"),
        Group: sdk.String("provident"),
        Max: sdk.Int64(882284),
        Maxlatitude: sdk.Float32(8964.8),
        Maxlongitude: sdk.Float32(7332.89),
        Minlatitude: sdk.Float32(5750.78),
        Minlongitude: sdk.Float32(4097.26),
        Name: sdk.String("Brittany Prosacco"),
        SearchFitsDataInstrument: sdk.String("officiis"),
        SearchFitsDataOrigin: sdk.String("voluptatibus"),
        SearchFitsDataTelescope: sdk.String("cum"),
        Skip: sdk.Int64(872303),
        Text: sdk.String("alias"),
        Todate: types.MustTimeFromString("2022-04-22T15:10:37.825Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
