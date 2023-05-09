# TypeTypePointText

## Overview

Search API for 'Record Text File' entry type

### Available Operations

* [SearchTypePointText](#searchtypepointtext) - Search API for 'Record Text File' entry type

## SearchTypePointText

API to search for entries of type Record Text File

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
    res, err := s.TypeTypePointText.SearchTypePointText(ctx, operations.SearchTypePointTextRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-27T18:18:19.643Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-17T05:02:09.973Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-08T20:26:05.563Z"),
        CreatedateTo: types.MustTimeFromString("2021-06-05T05:22:06.094Z"),
        Description: sdk.String("rem"),
        Filesuffix: sdk.String("eveniet"),
        Fromdate: types.MustTimeFromString("2022-11-27T17:37:55.947Z"),
        Group: sdk.String("repellat"),
        Max: sdk.Int64(165108),
        Maxlatitude: sdk.Float32(7301.94),
        Maxlongitude: sdk.Float32(9586.02),
        Minlatitude: sdk.Float32(871.69),
        Minlongitude: sdk.Float32(5927.91),
        Name: sdk.String("Brandy Lebsack"),
        Skip: sdk.Int64(39783),
        Text: sdk.String("vero"),
        Todate: types.MustTimeFromString("2022-10-21T06:53:14.226Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
