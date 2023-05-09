# TypeTypePointNcdcClimate

## Overview

Search API for 'NC  DC Climate Data' entry type

### Available Operations

* [SearchTypePointNcdcClimate](#searchtypepointncdcclimate) - Search API for 'NC  DC Climate Data' entry type

## SearchTypePointNcdcClimate

API to search for entries of type NC  DC Climate Data

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
    res, err := s.TypeTypePointNcdcClimate.SearchTypePointNcdcClimate(ctx, operations.SearchTypePointNcdcClimateRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-15T23:19:42.151Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-16T05:46:43.018Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-03T19:29:44.864Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-15T09:20:26.769Z"),
        Description: sdk.String("quod"),
        Filesuffix: sdk.String("alias"),
        Fromdate: types.MustTimeFromString("2022-06-10T08:13:32.523Z"),
        Group: sdk.String("modi"),
        Max: sdk.Int64(629440),
        Maxlatitude: sdk.Float32(936.6),
        Maxlongitude: sdk.Float32(5164.82),
        Minlatitude: sdk.Float32(2807.06),
        Minlongitude: sdk.Float32(8214.87),
        Name: sdk.String("Melanie Schumm"),
        Skip: sdk.Int64(115077),
        Text: sdk.String("reiciendis"),
        Todate: types.MustTimeFromString("2021-05-17T21:53:03.520Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
