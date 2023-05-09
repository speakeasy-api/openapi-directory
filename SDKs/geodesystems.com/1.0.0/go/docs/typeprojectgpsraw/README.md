# TypeProjectGpsRaw

## Overview

Search API for 'Raw GPS File' entry type

### Available Operations

* [SearchProjectGpsRaw](#searchprojectgpsraw) - Search API for 'Raw GPS File' entry type

## SearchProjectGpsRaw

API to search for entries of type Raw GPS File

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
    res, err := s.TypeProjectGpsRaw.SearchProjectGpsRaw(ctx, operations.SearchProjectGpsRawRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-01T23:54:30.571Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-04T16:18:44.200Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-30T05:35:32.331Z"),
        CreatedateTo: types.MustTimeFromString("2020-03-09T18:54:18.793Z"),
        Description: sdk.String("doloremque"),
        Filesuffix: sdk.String("ipsum"),
        Fromdate: types.MustTimeFromString("2022-12-16T01:03:01.411Z"),
        Group: sdk.String("tempora"),
        Max: sdk.Int64(595986),
        Maxlatitude: sdk.Float32(4620.97),
        Maxlongitude: sdk.Float32(5410.09),
        Minlatitude: sdk.Float32(6383.63),
        Minlongitude: sdk.Float32(4064.93),
        Name: sdk.String("Dr. Elsa Pacocha"),
        Skip: sdk.Int64(185313),
        Text: sdk.String("accusantium"),
        Todate: types.MustTimeFromString("2022-06-18T06:50:48.884Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
