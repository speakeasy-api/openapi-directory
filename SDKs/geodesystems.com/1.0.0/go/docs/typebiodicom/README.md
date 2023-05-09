# TypeBioDicom

## Overview

Search API for 'DICOM File' entry type

### Available Operations

* [SearchBioDicom](#searchbiodicom) - Search API for 'DICOM File' entry type

## SearchBioDicom

API to search for entries of type DICOM File

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
    res, err := s.TypeBioDicom.SearchBioDicom(ctx, operations.SearchBioDicomRequest{
        ChangedateFrom: types.MustTimeFromString("2021-11-23T05:54:08.890Z"),
        ChangedateTo: types.MustTimeFromString("2021-05-11T16:11:54.761Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-26T13:23:33.410Z"),
        CreatedateTo: types.MustTimeFromString("2021-04-29T07:12:18.684Z"),
        Description: sdk.String("laborum"),
        Filesuffix: sdk.String("quasi"),
        Fromdate: types.MustTimeFromString("2020-01-27T18:38:42.890Z"),
        Group: sdk.String("vero"),
        Max: sdk.Int64(468651),
        Maxlatitude: sdk.Float32(5096.24),
        Maxlongitude: sdk.Float32(9767.62),
        Minlatitude: sdk.Float32(557.14),
        Minlongitude: sdk.Float32(6048.46),
        Name: sdk.String("Ms. Karla Aufderhar"),
        Skip: sdk.Int64(979587),
        Text: sdk.String("dicta"),
        Todate: types.MustTimeFromString("2022-09-14T21:48:41.971Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
