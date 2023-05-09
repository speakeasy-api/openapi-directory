# TypeBioOntologyAssay

## Overview

Search API for 'Assay' entry type

### Available Operations

* [SearchBioOntologyAssay](#searchbioontologyassay) - Search API for 'Assay' entry type

## SearchBioOntologyAssay

API to search for entries of type Assay

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
    res, err := s.TypeBioOntologyAssay.SearchBioOntologyAssay(ctx, operations.SearchBioOntologyAssayRequest{
        ChangedateFrom: types.MustTimeFromString("2021-12-11T05:14:57.773Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-23T10:45:15.714Z"),
        CreatedateFrom: types.MustTimeFromString("2020-06-23T22:50:14.437Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-04T19:17:08.641Z"),
        Description: sdk.String("pariatur"),
        Filesuffix: sdk.String("accusantium"),
        Fromdate: types.MustTimeFromString("2022-06-29T11:09:23.468Z"),
        Group: sdk.String("natus"),
        Max: sdk.Int64(166847),
        Maxlatitude: sdk.Float32(1238.2),
        Maxlongitude: sdk.Float32(7790.51),
        Minlatitude: sdk.Float32(8480.09),
        Minlongitude: sdk.Float32(8649.34),
        Name: sdk.String("Nathaniel Marks"),
        Skip: sdk.Int64(33222),
        Text: sdk.String("ab"),
        Todate: types.MustTimeFromString("2020-11-28T07:34:18.392Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
