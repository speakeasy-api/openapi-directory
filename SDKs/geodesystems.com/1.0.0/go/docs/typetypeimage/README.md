# TypeTypeImage

## Overview

Search API for 'Image' entry type

### Available Operations

* [SearchTypeImage](#searchtypeimage) - Search API for 'Image' entry type

## SearchTypeImage

API to search for entries of type Image

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
    res, err := s.TypeTypeImage.SearchTypeImage(ctx, operations.SearchTypeImageRequest{
        ChangedateFrom: types.MustTimeFromString("2022-02-18T02:17:34.001Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-14T01:23:15.914Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-07T11:08:01.952Z"),
        CreatedateTo: types.MustTimeFromString("2021-09-03T01:31:33.904Z"),
        Description: sdk.String("voluptate"),
        Filesuffix: sdk.String("reprehenderit"),
        Fromdate: types.MustTimeFromString("2022-02-02T14:09:54.334Z"),
        Group: sdk.String("voluptate"),
        Max: sdk.Int64(941091),
        Maxlatitude: sdk.Float32(8719.69),
        Maxlongitude: sdk.Float32(190.76),
        Minlatitude: sdk.Float32(4482.82),
        Minlongitude: sdk.Float32(2591.34),
        Name: sdk.String("Elizabeth Moore"),
        Skip: sdk.Int64(532110),
        Text: sdk.String("facere"),
        Todate: types.MustTimeFromString("2022-05-20T16:59:43.803Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
