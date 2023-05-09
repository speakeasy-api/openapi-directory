# TypeBeforeafter

## Overview

Search API for 'Before and After Images' entry type

### Available Operations

* [SearchBeforeafter](#searchbeforeafter) - Search API for 'Before and After Images' entry type

## SearchBeforeafter

API to search for entries of type Before and After Images

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
    res, err := s.TypeBeforeafter.SearchBeforeafter(ctx, operations.SearchBeforeafterRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-13T17:41:46.141Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-22T16:55:44.795Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-24T20:42:46.563Z"),
        CreatedateTo: types.MustTimeFromString("2020-04-17T15:42:43.722Z"),
        Description: sdk.String("fuga"),
        Filesuffix: sdk.String("in"),
        Fromdate: types.MustTimeFromString("2022-05-22T05:33:50.280Z"),
        Group: sdk.String("iure"),
        Max: sdk.Int64(902349),
        Maxlatitude: sdk.Float32(6976.31),
        Maxlongitude: sdk.Float32(992.8),
        Minlatitude: sdk.Float32(602.25),
        Minlongitude: sdk.Float32(9698.1),
        Name: sdk.String("Shaun Osinski"),
        Skip: sdk.Int64(358152),
        Text: sdk.String("explicabo"),
        Todate: types.MustTimeFromString("2022-01-20T14:32:34.011Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
