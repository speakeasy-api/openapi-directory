# TypeTypeIdvBundle

## Overview

Search API for 'IDV Bundle' entry type

### Available Operations

* [SearchTypeIdvBundle](#searchtypeidvbundle) - Search API for 'IDV Bundle' entry type

## SearchTypeIdvBundle

API to search for entries of type IDV Bundle

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
    res, err := s.TypeTypeIdvBundle.SearchTypeIdvBundle(ctx, operations.SearchTypeIdvBundleRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-20T21:35:25.876Z"),
        ChangedateTo: types.MustTimeFromString("2020-11-09T03:34:35.256Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-08T17:29:46.483Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-15T00:58:22.386Z"),
        Description: sdk.String("facilis"),
        Filesuffix: sdk.String("minus"),
        Fromdate: types.MustTimeFromString("2020-09-06T04:49:44.902Z"),
        Group: sdk.String("omnis"),
        Max: sdk.Int64(92279),
        Maxlatitude: sdk.Float32(9391.31),
        Maxlongitude: sdk.Float32(6855.13),
        Minlatitude: sdk.Float32(6654.27),
        Minlongitude: sdk.Float32(7160.24),
        Name: sdk.String("Jody Lebsack"),
        Skip: sdk.Int64(461094),
        Text: sdk.String("vitae"),
        Todate: types.MustTimeFromString("2021-11-03T21:22:50.101Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
