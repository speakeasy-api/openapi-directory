# TypeBookmarks

## Overview

Search API for 'Bookmarks' entry type

### Available Operations

* [SearchBookmarks](#searchbookmarks) - Search API for 'Bookmarks' entry type

## SearchBookmarks

API to search for entries of type Bookmarks

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
    res, err := s.TypeBookmarks.SearchBookmarks(ctx, operations.SearchBookmarksRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-06T12:02:05.098Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-24T22:15:46.522Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-09T09:38:41.756Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-13T06:50:40.250Z"),
        Description: sdk.String("sequi"),
        Filesuffix: sdk.String("quo"),
        Fromdate: types.MustTimeFromString("2022-01-28T07:34:05.998Z"),
        Group: sdk.String("aperiam"),
        Max: sdk.Int64(715179),
        Maxlatitude: sdk.Float32(7997.96),
        Maxlongitude: sdk.Float32(4908.19),
        Minlatitude: sdk.Float32(769.56),
        Minlongitude: sdk.Float32(4694.98),
        Name: sdk.String("Sheldon Hackett"),
        SearchDbBookmarksCategory: sdk.String("commodi"),
        SearchDbBookmarksDate: sdk.String("sapiente"),
        SearchDbBookmarksTitle: sdk.String("dolores"),
        SearchDbBookmarksURL: sdk.String("deserunt"),
        Skip: sdk.Int64(475289),
        Text: sdk.String("accusantium"),
        Todate: types.MustTimeFromString("2021-09-16T17:01:25.429Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
