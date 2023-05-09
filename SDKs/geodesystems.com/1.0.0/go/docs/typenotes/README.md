# TypeNotes

## Overview

Search API for 'Notes' entry type

### Available Operations

* [SearchNotes](#searchnotes) - Search API for 'Notes' entry type

## SearchNotes

API to search for entries of type Notes

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
    res, err := s.TypeNotes.SearchNotes(ctx, operations.SearchNotesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-23T10:18:08.861Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-08T04:54:26.161Z"),
        CreatedateFrom: types.MustTimeFromString("2021-06-04T02:54:37.855Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-02T01:41:31.539Z"),
        Description: sdk.String("adipisci"),
        Filesuffix: sdk.String("recusandae"),
        Fromdate: types.MustTimeFromString("2022-07-01T05:47:03.008Z"),
        Group: sdk.String("numquam"),
        Max: sdk.Int64(196374),
        Maxlatitude: sdk.Float32(5323.2),
        Maxlongitude: sdk.Float32(270.78),
        Minlatitude: sdk.Float32(7031.89),
        Minlongitude: sdk.Float32(841.78),
        Name: sdk.String("Milton Powlowski"),
        SearchDbNotesNote: sdk.String("deserunt"),
        Skip: sdk.Int64(168926),
        Text: sdk.String("nihil"),
        Todate: types.MustTimeFromString("2022-05-05T18:10:28.279Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
