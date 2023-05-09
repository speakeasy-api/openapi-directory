# TypeMediaImageloop

## Overview

Search API for 'Image Loop' entry type

### Available Operations

* [SearchMediaImageloop](#searchmediaimageloop) - Search API for 'Image Loop' entry type

## SearchMediaImageloop

API to search for entries of type Image Loop

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
    res, err := s.TypeMediaImageloop.SearchMediaImageloop(ctx, operations.SearchMediaImageloopRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-13T20:37:07.767Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-10T23:44:26.325Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-12T21:47:00.714Z"),
        CreatedateTo: types.MustTimeFromString("2021-09-17T03:41:04.453Z"),
        Description: sdk.String("repudiandae"),
        Filesuffix: sdk.String("accusantium"),
        Fromdate: types.MustTimeFromString("2021-06-17T19:21:18.605Z"),
        Group: sdk.String("quasi"),
        Max: sdk.Int64(502106),
        Maxlatitude: sdk.Float32(2609.11),
        Maxlongitude: sdk.Float32(7861.89),
        Minlatitude: sdk.Float32(1779.29),
        Minlongitude: sdk.Float32(7480.23),
        Name: sdk.String("Kim Crist"),
        Skip: sdk.Int64(800799),
        Text: sdk.String("quos"),
        Todate: types.MustTimeFromString("2022-07-18T15:42:17.765Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
