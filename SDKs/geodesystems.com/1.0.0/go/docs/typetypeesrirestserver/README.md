# TypeTypeEsriRestserver

## Overview

Search API for 'ESRI Web Server' entry type

### Available Operations

* [SearchTypeEsriRestserver](#searchtypeesrirestserver) - Search API for 'ESRI Web Server' entry type

## SearchTypeEsriRestserver

API to search for entries of type ESRI Web Server

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
    res, err := s.TypeTypeEsriRestserver.SearchTypeEsriRestserver(ctx, operations.SearchTypeEsriRestserverRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-20T22:40:23.758Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-09T22:17:56.070Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-15T18:05:43.333Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-02T12:55:59.519Z"),
        Description: sdk.String("beatae"),
        Filesuffix: sdk.String("sequi"),
        Fromdate: types.MustTimeFromString("2022-07-27T22:00:03.556Z"),
        Group: sdk.String("debitis"),
        Max: sdk.Int64(339118),
        Maxlatitude: sdk.Float32(546.77),
        Maxlongitude: sdk.Float32(2774.18),
        Minlatitude: sdk.Float32(2814.36),
        Minlongitude: sdk.Float32(9622.8),
        Name: sdk.String("Samantha Wolff"),
        Skip: sdk.Int64(181041),
        Text: sdk.String("assumenda"),
        Todate: types.MustTimeFromString("2022-02-27T04:10:09.693Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
