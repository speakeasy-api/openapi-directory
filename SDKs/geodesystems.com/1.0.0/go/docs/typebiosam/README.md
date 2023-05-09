# TypeBioSam

## Overview

Search API for 'SAM Data' entry type

### Available Operations

* [SearchBioSam](#searchbiosam) - Search API for 'SAM Data' entry type

## SearchBioSam

API to search for entries of type SAM Data

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
    res, err := s.TypeBioSam.SearchBioSam(ctx, operations.SearchBioSamRequest{
        ChangedateFrom: types.MustTimeFromString("2021-03-29T09:11:09.370Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-08T12:03:15.868Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-16T12:43:49.763Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-21T14:54:44.081Z"),
        Description: sdk.String("sit"),
        Filesuffix: sdk.String("expedita"),
        Fromdate: types.MustTimeFromString("2022-11-05T21:38:15.600Z"),
        Group: sdk.String("vel"),
        Max: sdk.Int64(730442),
        Maxlatitude: sdk.Float32(3741.7),
        Maxlongitude: sdk.Float32(6462.65),
        Minlatitude: sdk.Float32(4635.75),
        Minlongitude: sdk.Float32(2148.8),
        Name: sdk.String("Norma McGlynn"),
        Skip: sdk.Int64(747080),
        Text: sdk.String("dicta"),
        Todate: types.MustTimeFromString("2021-12-19T07:31:04.219Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
