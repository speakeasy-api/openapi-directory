# TypeMediaVideoQuicktime

## Overview

Search API for 'Quicktime Video' entry type

### Available Operations

* [SearchMediaVideoQuicktime](#searchmediavideoquicktime) - Search API for 'Quicktime Video' entry type

## SearchMediaVideoQuicktime

API to search for entries of type Quicktime Video

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
    res, err := s.TypeMediaVideoQuicktime.SearchMediaVideoQuicktime(ctx, operations.SearchMediaVideoQuicktimeRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-09T02:28:59.420Z"),
        ChangedateTo: types.MustTimeFromString("2020-12-09T02:09:11.734Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-15T08:03:11.108Z"),
        CreatedateTo: types.MustTimeFromString("2021-11-26T01:21:46.726Z"),
        Description: sdk.String("eaque"),
        Filesuffix: sdk.String("deserunt"),
        Fromdate: types.MustTimeFromString("2022-06-06T19:05:26.735Z"),
        Group: sdk.String("magni"),
        Max: sdk.Int64(273677),
        Maxlatitude: sdk.Float32(8219.04),
        Maxlongitude: sdk.Float32(2208.24),
        Minlatitude: sdk.Float32(7005.29),
        Minlongitude: sdk.Float32(1535.82),
        Name: sdk.String("Earnest Wisoky"),
        Skip: sdk.Int64(550338),
        Text: sdk.String("asperiores"),
        Todate: types.MustTimeFromString("2021-10-09T05:13:53.393Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
