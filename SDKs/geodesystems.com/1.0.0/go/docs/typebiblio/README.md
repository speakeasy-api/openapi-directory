# TypeBiblio

## Overview

Search API for 'Bibliographic Entry' entry type

### Available Operations

* [SearchBiblio](#searchbiblio) - Search API for 'Bibliographic Entry' entry type

## SearchBiblio

API to search for entries of type Bibliographic Entry

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
    res, err := s.TypeBiblio.SearchBiblio(ctx, operations.SearchBiblioRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-10T11:47:13.463Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-06T21:04:34.044Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-24T21:51:02.112Z"),
        CreatedateTo: types.MustTimeFromString("2021-01-09T11:41:25.666Z"),
        Description: sdk.String("sapiente"),
        Filesuffix: sdk.String("architecto"),
        Fromdate: types.MustTimeFromString("2022-08-01T12:28:44.292Z"),
        Group: sdk.String("culpa"),
        Max: sdk.Int64(161309),
        Maxlatitude: sdk.Float32(9953),
        Maxlongitude: sdk.Float32(6531.08),
        Minlatitude: sdk.Float32(5818.5),
        Minlongitude: sdk.Float32(2532.91),
        Name: sdk.String("Claudia Krajcik"),
        SearchBiblioInstitution: sdk.String("quia"),
        SearchBiblioOtherAuthors: sdk.String("quis"),
        SearchBiblioPrimaryAuthor: sdk.String("vitae"),
        SearchBiblioPublication: sdk.String("laborum"),
        SearchBiblioType: sdk.String("animi"),
        Skip: sdk.Int64(317202),
        Text: sdk.String("odit"),
        Todate: types.MustTimeFromString("2022-05-30T17:48:55.594Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
