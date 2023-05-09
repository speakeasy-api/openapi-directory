# TypeTypeSocrataSeries

## Overview

Search API for 'SOCRATA Series' entry type

### Available Operations

* [SearchTypeSocrataSeries](#searchtypesocrataseries) - Search API for 'SOCRATA Series' entry type

## SearchTypeSocrataSeries

API to search for entries of type SOCRATA Series

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
    res, err := s.TypeTypeSocrataSeries.SearchTypeSocrataSeries(ctx, operations.SearchTypeSocrataSeriesRequest{
        ChangedateFrom: types.MustTimeFromString("2020-02-10T07:25:38.174Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-05T14:03:55.499Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-08T10:08:23.784Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-15T14:39:56.529Z"),
        Description: sdk.String("molestias"),
        Filesuffix: sdk.String("odio"),
        Fromdate: types.MustTimeFromString("2022-11-01T11:07:18.347Z"),
        Group: sdk.String("sint"),
        Max: sdk.Int64(10180),
        Maxlatitude: sdk.Float32(8495.44),
        Maxlongitude: sdk.Float32(2378.75),
        Minlatitude: sdk.Float32(2106.51),
        Minlongitude: sdk.Float32(4031.87),
        Name: sdk.String("Natalie Bogisich"),
        Skip: sdk.Int64(635677),
        Text: sdk.String("architecto"),
        Todate: types.MustTimeFromString("2022-02-02T02:57:48.522Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
