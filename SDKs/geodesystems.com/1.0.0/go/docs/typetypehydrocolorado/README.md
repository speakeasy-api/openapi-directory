# TypeTypeHydroColorado

## Overview

Search API for 'Colorado DNR Stream Gage' entry type

### Available Operations

* [SearchTypeHydroColorado](#searchtypehydrocolorado) - Search API for 'Colorado DNR Stream Gage' entry type

## SearchTypeHydroColorado

API to search for entries of type Colorado DNR Stream Gage

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
    res, err := s.TypeTypeHydroColorado.SearchTypeHydroColorado(ctx, operations.SearchTypeHydroColoradoRequest{
        ChangedateFrom: types.MustTimeFromString("2021-12-25T13:16:35.979Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-15T04:37:44.760Z"),
        CreatedateFrom: types.MustTimeFromString("2020-04-16T00:30:13.504Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-31T19:42:19.266Z"),
        Description: sdk.String("nostrum"),
        Filesuffix: sdk.String("minus"),
        Fromdate: types.MustTimeFromString("2022-07-16T07:41:05.814Z"),
        Group: sdk.String("ea"),
        Max: sdk.Int64(256941),
        Maxlatitude: sdk.Float32(1032.53),
        Maxlongitude: sdk.Float32(6864.7),
        Minlatitude: sdk.Float32(5190.99),
        Minlongitude: sdk.Float32(2443.32),
        Name: sdk.String("Jane Towne II"),
        SearchTypeHydroColoradoSiteID: sdk.String("in"),
        Skip: sdk.Int64(730370),
        Text: sdk.String("ut"),
        Todate: types.MustTimeFromString("2022-07-15T10:01:53.355Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
