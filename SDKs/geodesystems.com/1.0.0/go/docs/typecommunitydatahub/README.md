# TypeCommunityDatahub

## Overview

Search API for 'Data Hub' entry type

### Available Operations

* [SearchCommunityDatahub](#searchcommunitydatahub) - Search API for 'Data Hub' entry type

## SearchCommunityDatahub

API to search for entries of type Data Hub

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
    res, err := s.TypeCommunityDatahub.SearchCommunityDatahub(ctx, operations.SearchCommunityDatahubRequest{
        ChangedateFrom: types.MustTimeFromString("2021-10-20T05:12:41.056Z"),
        ChangedateTo: types.MustTimeFromString("2021-11-10T12:47:28.024Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-08T01:11:44.885Z"),
        CreatedateTo: types.MustTimeFromString("2020-12-11T23:55:22.223Z"),
        Description: sdk.String("ratione"),
        Filesuffix: sdk.String("animi"),
        Fromdate: types.MustTimeFromString("2020-06-01T00:59:41.712Z"),
        Group: sdk.String("consequatur"),
        Max: sdk.Int64(97258),
        Maxlatitude: sdk.Float32(902.33),
        Maxlongitude: sdk.Float32(4977.77),
        Minlatitude: sdk.Float32(6191.83),
        Minlongitude: sdk.Float32(5810.82),
        Name: sdk.String("Josephine Boyer"),
        Skip: sdk.Int64(859581),
        Text: sdk.String("necessitatibus"),
        Todate: types.MustTimeFromString("2022-09-24T01:02:47.291Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
