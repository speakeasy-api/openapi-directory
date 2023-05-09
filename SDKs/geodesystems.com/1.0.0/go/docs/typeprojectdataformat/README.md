# TypeProjectDataformat

## Overview

Search API for 'Data Format' entry type

### Available Operations

* [SearchProjectDataformat](#searchprojectdataformat) - Search API for 'Data Format' entry type

## SearchProjectDataformat

API to search for entries of type Data Format

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
    res, err := s.TypeProjectDataformat.SearchProjectDataformat(ctx, operations.SearchProjectDataformatRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-14T03:21:59.824Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-20T03:58:51.322Z"),
        CreatedateFrom: types.MustTimeFromString("2021-03-30T00:37:54.186Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-26T17:41:33.772Z"),
        Description: sdk.String("laborum"),
        Filesuffix: sdk.String("illum"),
        Fromdate: types.MustTimeFromString("2022-03-13T05:15:53.160Z"),
        Group: sdk.String("dolorum"),
        Max: sdk.Int64(998355),
        Maxlatitude: sdk.Float32(3419.83),
        Maxlongitude: sdk.Float32(8473.08),
        Minlatitude: sdk.Float32(8450.86),
        Minlongitude: sdk.Float32(4144.56),
        Name: sdk.String("Judith Feest"),
        SearchProjectDataformatDataType: sdk.String("ipsa"),
        SearchProjectDataformatField: sdk.String("maiores"),
        Skip: sdk.Int64(350271),
        Text: sdk.String("culpa"),
        Todate: types.MustTimeFromString("2022-08-06T19:13:49.286Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
