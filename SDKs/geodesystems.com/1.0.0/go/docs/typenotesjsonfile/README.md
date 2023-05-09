# TypeNotesJsonfile

## Overview

Search API for 'Json File' entry type

### Available Operations

* [SearchNotesJsonfile](#searchnotesjsonfile) - Search API for 'Json File' entry type

## SearchNotesJsonfile

API to search for entries of type Json File

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
    res, err := s.TypeNotesJsonfile.SearchNotesJsonfile(ctx, operations.SearchNotesJsonfileRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-31T17:43:08.927Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-21T05:02:16.256Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-14T00:03:11.145Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-21T23:58:09.358Z"),
        Description: sdk.String("ullam"),
        Filesuffix: sdk.String("eligendi"),
        Fromdate: types.MustTimeFromString("2021-11-12T15:33:33.302Z"),
        Group: sdk.String("occaecati"),
        Max: sdk.Int64(600934),
        Maxlatitude: sdk.Float32(752.77),
        Maxlongitude: sdk.Float32(4691.7),
        Minlatitude: sdk.Float32(782.46),
        Minlongitude: sdk.Float32(7253.16),
        Name: sdk.String("Miss Joyce Runolfsson"),
        Skip: sdk.Int64(707983),
        Text: sdk.String("beatae"),
        Todate: types.MustTimeFromString("2020-02-09T20:39:20.538Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
