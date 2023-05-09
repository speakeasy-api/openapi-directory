# TypeTypePointGcnet

## Overview

Search API for 'GC-Net Point Data' entry type

### Available Operations

* [SearchTypePointGcnet](#searchtypepointgcnet) - Search API for 'GC-Net Point Data' entry type

## SearchTypePointGcnet

API to search for entries of type GC-Net Point Data

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
    res, err := s.TypeTypePointGcnet.SearchTypePointGcnet(ctx, operations.SearchTypePointGcnetRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-17T01:16:10.198Z"),
        ChangedateTo: types.MustTimeFromString("2021-04-29T18:28:44.826Z"),
        CreatedateFrom: types.MustTimeFromString("2020-06-16T12:05:14.872Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-29T20:26:41.809Z"),
        Description: sdk.String("perferendis"),
        Filesuffix: sdk.String("soluta"),
        Fromdate: types.MustTimeFromString("2022-01-20T21:15:59.889Z"),
        Group: sdk.String("nesciunt"),
        Max: sdk.Int64(559715),
        Maxlatitude: sdk.Float32(1218.79),
        Maxlongitude: sdk.Float32(461.39),
        Minlatitude: sdk.Float32(9317.77),
        Minlongitude: sdk.Float32(3103.8),
        Name: sdk.String("Santiago Glover"),
        Skip: sdk.Int64(453562),
        Text: sdk.String("magni"),
        Todate: types.MustTimeFromString("2022-01-31T21:21:45.542Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
