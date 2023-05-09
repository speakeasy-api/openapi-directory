# TypeBioDicomTest

## Overview

Search API for 'DICOM Test File' entry type

### Available Operations

* [SearchBioDicomTest](#searchbiodicomtest) - Search API for 'DICOM Test File' entry type

## SearchBioDicomTest

API to search for entries of type DICOM Test File

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
    res, err := s.TypeBioDicomTest.SearchBioDicomTest(ctx, operations.SearchBioDicomTestRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-18T15:56:41.921Z"),
        ChangedateTo: types.MustTimeFromString("2022-05-13T20:56:04.612Z"),
        CreatedateFrom: types.MustTimeFromString("2021-10-04T09:10:06.610Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-22T18:12:12.288Z"),
        Description: sdk.String("ipsum"),
        Filesuffix: sdk.String("quidem"),
        Fromdate: types.MustTimeFromString("2021-11-13T09:08:33.009Z"),
        Group: sdk.String("pariatur"),
        Max: sdk.Int64(265389),
        Maxlatitude: sdk.Float32(5089.69),
        Maxlongitude: sdk.Float32(5232.48),
        Minlatitude: sdk.Float32(9167.23),
        Minlongitude: sdk.Float32(939.4),
        Name: sdk.String("Kirk Boehm"),
        SearchBioDicomTestPatientID: sdk.String("enim"),
        SearchBioDicomTestPatientName: sdk.String("consequatur"),
        Skip: sdk.Int64(667411),
        Text: sdk.String("quibusdam"),
        Todate: types.MustTimeFromString("2022-05-09T18:45:16.013Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
