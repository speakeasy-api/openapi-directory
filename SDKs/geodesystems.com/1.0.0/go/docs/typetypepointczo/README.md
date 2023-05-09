# TypeTypePointCzo

## Overview

Search API for 'CZO Display File Format' entry type

### Available Operations

* [SearchTypePointCzo](#searchtypepointczo) - Search API for 'CZO Display File Format' entry type

## SearchTypePointCzo

API to search for entries of type CZO Display File Format

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
    res, err := s.TypeTypePointCzo.SearchTypePointCzo(ctx, operations.SearchTypePointCzoRequest{
        ChangedateFrom: types.MustTimeFromString("2020-11-21T17:50:54.328Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-31T14:44:31.131Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-08T00:50:35.455Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-10T16:00:54.799Z"),
        Description: sdk.String("consectetur"),
        Filesuffix: sdk.String("quos"),
        Fromdate: types.MustTimeFromString("2022-08-19T07:07:10.067Z"),
        Group: sdk.String("repudiandae"),
        Max: sdk.Int64(818273),
        Maxlatitude: sdk.Float32(7165.38),
        Maxlongitude: sdk.Float32(4973.63),
        Minlatitude: sdk.Float32(5404.16),
        Minlongitude: sdk.Float32(2343.83),
        Name: sdk.String("Sherri Tillman"),
        Skip: sdk.Int64(327624),
        Text: sdk.String("cumque"),
        Todate: types.MustTimeFromString("2021-12-27T00:11:05.949Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
