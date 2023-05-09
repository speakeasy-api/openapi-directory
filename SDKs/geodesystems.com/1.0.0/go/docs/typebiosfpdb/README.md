# TypeBioSfPdb

## Overview

Search API for 'PDB Protein File' entry type

### Available Operations

* [SearchBioSfPdb](#searchbiosfpdb) - Search API for 'PDB Protein File' entry type

## SearchBioSfPdb

API to search for entries of type PDB Protein File

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
    res, err := s.TypeBioSfPdb.SearchBioSfPdb(ctx, operations.SearchBioSfPdbRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-13T19:04:59.225Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-14T08:18:32.851Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-17T21:02:01.759Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-08T14:54:33.206Z"),
        Description: sdk.String("temporibus"),
        Filesuffix: sdk.String("qui"),
        Fromdate: types.MustTimeFromString("2022-11-09T03:08:00.106Z"),
        Group: sdk.String("magni"),
        Max: sdk.Int64(488056),
        Maxlatitude: sdk.Float32(1248.33),
        Maxlongitude: sdk.Float32(3556.13),
        Minlatitude: sdk.Float32(7220.81),
        Minlongitude: sdk.Float32(9404.32),
        Name: sdk.String("Erma Rogahn PhD"),
        Skip: sdk.Int64(217450),
        Text: sdk.String("veritatis"),
        Todate: types.MustTimeFromString("2021-11-23T21:35:15.992Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
