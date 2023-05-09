# TypeTypeMbCollection

## Overview

Search API for 'Bathymetry Collection' entry type

### Available Operations

* [SearchTypeMbCollection](#searchtypembcollection) - Search API for 'Bathymetry Collection' entry type

## SearchTypeMbCollection

API to search for entries of type Bathymetry Collection

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
    res, err := s.TypeTypeMbCollection.SearchTypeMbCollection(ctx, operations.SearchTypeMbCollectionRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-01T03:40:00.912Z"),
        ChangedateTo: types.MustTimeFromString("2021-08-25T07:41:00.958Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-28T07:51:52.960Z"),
        CreatedateTo: types.MustTimeFromString("2020-10-18T22:48:14.460Z"),
        Description: sdk.String("commodi"),
        Filesuffix: sdk.String("autem"),
        Fromdate: types.MustTimeFromString("2022-09-01T17:17:25.932Z"),
        Group: sdk.String("quisquam"),
        Max: sdk.Int64(711819),
        Maxlatitude: sdk.Float32(4478.78),
        Maxlongitude: sdk.Float32(526.59),
        Minlatitude: sdk.Float32(9662.22),
        Minlongitude: sdk.Float32(5019.46),
        Name: sdk.String("Roman Shanahan"),
        Skip: sdk.Int64(733674),
        Text: sdk.String("laboriosam"),
        Todate: types.MustTimeFromString("2021-04-05T19:29:25.874Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
