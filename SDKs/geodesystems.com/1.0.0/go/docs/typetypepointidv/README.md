# TypeTypePointIdv

## Overview

Search API for 'IDV Point File' entry type

### Available Operations

* [SearchTypePointIdv](#searchtypepointidv) - Search API for 'IDV Point File' entry type

## SearchTypePointIdv

API to search for entries of type IDV Point File

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
    res, err := s.TypeTypePointIdv.SearchTypePointIdv(ctx, operations.SearchTypePointIdvRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-18T05:16:16.243Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-11T08:21:58.068Z"),
        CreatedateFrom: types.MustTimeFromString("2021-04-19T05:40:22.978Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-11T01:56:03.304Z"),
        Description: sdk.String("quia"),
        Filesuffix: sdk.String("maxime"),
        Fromdate: types.MustTimeFromString("2021-01-31T05:34:29.866Z"),
        Group: sdk.String("maiores"),
        Max: sdk.Int64(346164),
        Maxlatitude: sdk.Float32(4998.74),
        Maxlongitude: sdk.Float32(2935.12),
        Minlatitude: sdk.Float32(6152.06),
        Minlongitude: sdk.Float32(817.75),
        Name: sdk.String("Rex Pollich"),
        Skip: sdk.Int64(135992),
        Text: sdk.String("vero"),
        Todate: types.MustTimeFromString("2022-07-26T22:57:11.830Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
