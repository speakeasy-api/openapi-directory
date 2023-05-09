# TypeNotesNote

## Overview

Search API for 'Note' entry type

### Available Operations

* [SearchNotesNote](#searchnotesnote) - Search API for 'Note' entry type

## SearchNotesNote

API to search for entries of type Note

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
    res, err := s.TypeNotesNote.SearchNotesNote(ctx, operations.SearchNotesNoteRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-15T21:16:41.530Z"),
        ChangedateTo: types.MustTimeFromString("2021-12-14T11:36:59.797Z"),
        CreatedateFrom: types.MustTimeFromString("2021-03-25T03:12:44.676Z"),
        CreatedateTo: types.MustTimeFromString("2021-04-10T18:27:22.667Z"),
        Description: sdk.String("sapiente"),
        Filesuffix: sdk.String("quo"),
        Fromdate: types.MustTimeFromString("2022-03-15T23:42:52.032Z"),
        Group: sdk.String("minus"),
        Max: sdk.Int64(781491),
        Maxlatitude: sdk.Float32(6599.71),
        Maxlongitude: sdk.Float32(5697.06),
        Minlatitude: sdk.Float32(5802.38),
        Minlongitude: sdk.Float32(7268.51),
        Name: sdk.String("Cory Welch DDS"),
        Skip: sdk.Int64(147400),
        Text: sdk.String("pariatur"),
        Todate: types.MustTimeFromString("2020-03-21T09:34:05.399Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
