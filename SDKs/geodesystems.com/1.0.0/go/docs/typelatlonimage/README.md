# TypeLatlonimage

## Overview

Search API for 'Lat-Lon Image' entry type

### Available Operations

* [SearchLatlonimage](#searchlatlonimage) - Search API for 'Lat-Lon Image' entry type

## SearchLatlonimage

API to search for entries of type Lat-Lon Image

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
    res, err := s.TypeLatlonimage.SearchLatlonimage(ctx, operations.SearchLatlonimageRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-03T18:23:14.348Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-26T10:33:22.468Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-24T14:34:13.159Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-09T02:03:12.598Z"),
        Description: sdk.String("magni"),
        Filesuffix: sdk.String("incidunt"),
        Fromdate: types.MustTimeFromString("2022-06-30T04:26:09.166Z"),
        Group: sdk.String("dolor"),
        Max: sdk.Int64(349898),
        Maxlatitude: sdk.Float32(7097.01),
        Maxlongitude: sdk.Float32(7064.11),
        Minlatitude: sdk.Float32(7696.34),
        Minlongitude: sdk.Float32(245.77),
        Name: sdk.String("Molly Cronin"),
        Skip: sdk.Int64(268709),
        Text: sdk.String("veniam"),
        Todate: types.MustTimeFromString("2020-03-16T04:29:27.854Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
