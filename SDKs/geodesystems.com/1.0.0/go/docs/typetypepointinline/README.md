# TypeTypePointInline

## Overview

Search API for 'Inline Point File' entry type

### Available Operations

* [SearchTypePointInline](#searchtypepointinline) - Search API for 'Inline Point File' entry type

## SearchTypePointInline

API to search for entries of type Inline Point File

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
    res, err := s.TypeTypePointInline.SearchTypePointInline(ctx, operations.SearchTypePointInlineRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-20T08:15:00.491Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-22T22:42:10.471Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-14T19:35:26.505Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-18T04:05:38.697Z"),
        Description: sdk.String("quis"),
        Filesuffix: sdk.String("aliquid"),
        Fromdate: types.MustTimeFromString("2020-02-02T22:08:01.958Z"),
        Group: sdk.String("dicta"),
        Max: sdk.Int64(23410),
        Maxlatitude: sdk.Float32(2379.6),
        Maxlongitude: sdk.Float32(802.94),
        Minlatitude: sdk.Float32(9016.07),
        Minlongitude: sdk.Float32(4349.36),
        Name: sdk.String("Freddie Mohr DDS"),
        Skip: sdk.Int64(128390),
        Text: sdk.String("accusantium"),
        Todate: types.MustTimeFromString("2022-11-26T13:03:58.735Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
