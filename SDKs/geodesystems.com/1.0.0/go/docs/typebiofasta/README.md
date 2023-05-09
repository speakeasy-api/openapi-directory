# TypeBioFasta

## Overview

Search API for 'FASTA File' entry type

### Available Operations

* [SearchBioFasta](#searchbiofasta) - Search API for 'FASTA File' entry type

## SearchBioFasta

API to search for entries of type FASTA File

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
    res, err := s.TypeBioFasta.SearchBioFasta(ctx, operations.SearchBioFastaRequest{
        ChangedateFrom: types.MustTimeFromString("2021-04-26T18:54:54.344Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-26T08:57:48.803Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-08T19:05:24.174Z"),
        CreatedateTo: types.MustTimeFromString("2021-11-23T10:34:02.904Z"),
        Description: sdk.String("perferendis"),
        Filesuffix: sdk.String("magni"),
        Fromdate: types.MustTimeFromString("2021-11-22T01:26:35.048Z"),
        Group: sdk.String("alias"),
        Max: sdk.Int64(146441),
        Maxlatitude: sdk.Float32(6778.17),
        Maxlongitude: sdk.Float32(5696.18),
        Minlatitude: sdk.Float32(2700.08),
        Minlongitude: sdk.Float32(7037.37),
        Name: sdk.String("Francisco Windler"),
        Skip: sdk.Int64(756107),
        Text: sdk.String("sint"),
        Todate: types.MustTimeFromString("2022-05-29T21:42:45.399Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
