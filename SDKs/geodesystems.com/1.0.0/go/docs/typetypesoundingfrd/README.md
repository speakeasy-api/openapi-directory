# TypeTypeSoundingFrd

## Overview

Search API for 'FRD Sounding' entry type

### Available Operations

* [SearchTypeSoundingFrd](#searchtypesoundingfrd) - Search API for 'FRD Sounding' entry type

## SearchTypeSoundingFrd

API to search for entries of type FRD Sounding

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
    res, err := s.TypeTypeSoundingFrd.SearchTypeSoundingFrd(ctx, operations.SearchTypeSoundingFrdRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-10T18:02:08.902Z"),
        ChangedateTo: types.MustTimeFromString("2022-11-14T00:59:39.924Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-22T00:14:35.920Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-25T11:56:59.355Z"),
        Description: sdk.String("enim"),
        Filesuffix: sdk.String("nam"),
        Fromdate: types.MustTimeFromString("2022-11-02T00:03:25.771Z"),
        Group: sdk.String("sapiente"),
        Max: sdk.Int64(912),
        Maxlatitude: sdk.Float32(9866.23),
        Maxlongitude: sdk.Float32(3634.67),
        Minlatitude: sdk.Float32(2961.27),
        Minlongitude: sdk.Float32(5453.14),
        Name: sdk.String("Tonya Langworth II"),
        Skip: sdk.Int64(174836),
        Text: sdk.String("labore"),
        Todate: types.MustTimeFromString("2022-12-25T08:43:43.550Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
