# TypeCdmGrid

## Overview

Search API for 'Gridded Data File' entry type

### Available Operations

* [SearchCdmGrid](#searchcdmgrid) - Search API for 'Gridded Data File' entry type

## SearchCdmGrid

API to search for entries of type Gridded Data File

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
    res, err := s.TypeCdmGrid.SearchCdmGrid(ctx, operations.SearchCdmGridRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-26T23:29:35.541Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-09T06:54:36.386Z"),
        CreatedateFrom: types.MustTimeFromString("2021-03-24T23:56:32.062Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-09T03:10:10.926Z"),
        Description: sdk.String("adipisci"),
        Filesuffix: sdk.String("eveniet"),
        Fromdate: types.MustTimeFromString("2022-09-06T00:45:42.817Z"),
        Group: sdk.String("fugit"),
        Max: sdk.Int64(661118),
        Maxlatitude: sdk.Float32(3356.31),
        Maxlongitude: sdk.Float32(4402.64),
        Minlatitude: sdk.Float32(6255.28),
        Minlongitude: sdk.Float32(764.86),
        Name: sdk.String("Melody Vandervort"),
        Skip: sdk.Int64(39615),
        Text: sdk.String("iure"),
        Todate: types.MustTimeFromString("2022-06-26T01:43:04.262Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
