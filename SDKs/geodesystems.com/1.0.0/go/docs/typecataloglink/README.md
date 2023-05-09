# TypeCataloglink

## Overview

Search API for 'Catalog Link' entry type

### Available Operations

* [SearchCataloglink](#searchcataloglink) - Search API for 'Catalog Link' entry type

## SearchCataloglink

API to search for entries of type Catalog Link

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
    res, err := s.TypeCataloglink.SearchCataloglink(ctx, operations.SearchCataloglinkRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-13T06:52:38.237Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-08T02:07:04.894Z"),
        CreatedateFrom: types.MustTimeFromString("2021-04-04T14:18:49.875Z"),
        CreatedateTo: types.MustTimeFromString("2021-12-30T00:19:55.496Z"),
        Description: sdk.String("suscipit"),
        Filesuffix: sdk.String("repudiandae"),
        Fromdate: types.MustTimeFromString("2021-12-01T19:00:30.130Z"),
        Group: sdk.String("sunt"),
        Max: sdk.Int64(923306),
        Maxlatitude: sdk.Float32(6806.97),
        Maxlongitude: sdk.Float32(8298.98),
        Minlatitude: sdk.Float32(2871.19),
        Minlongitude: sdk.Float32(9682.87),
        Name: sdk.String("Mr. Elvira Buckridge"),
        Skip: sdk.Int64(316488),
        Text: sdk.String("laboriosam"),
        Todate: types.MustTimeFromString("2022-01-18T11:13:47.798Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
