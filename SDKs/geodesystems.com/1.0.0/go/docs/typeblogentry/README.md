# TypeBlogentry

## Overview

Search API for 'Weblog Entry' entry type

### Available Operations

* [SearchBlogentry](#searchblogentry) - Search API for 'Weblog Entry' entry type

## SearchBlogentry

API to search for entries of type Weblog Entry

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
    res, err := s.TypeBlogentry.SearchBlogentry(ctx, operations.SearchBlogentryRequest{
        ChangedateFrom: types.MustTimeFromString("2020-04-13T07:43:17.350Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-24T11:20:42.976Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-01T09:38:53.685Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-02T09:33:05.571Z"),
        Description: sdk.String("magnam"),
        Filesuffix: sdk.String("ea"),
        Fromdate: types.MustTimeFromString("2022-04-21T16:53:11.568Z"),
        Group: sdk.String("recusandae"),
        Max: sdk.Int64(132487),
        Maxlatitude: sdk.Float32(3253.1),
        Maxlongitude: sdk.Float32(534.27),
        Minlatitude: sdk.Float32(9528.71),
        Minlongitude: sdk.Float32(7255.95),
        Name: sdk.String("Jennifer Lesch"),
        SearchBlogentryBlogtext: sdk.String("fugit"),
        Skip: sdk.Int64(882860),
        Text: sdk.String("inventore"),
        Todate: types.MustTimeFromString("2022-11-29T07:04:37.837Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
