# TypeTypeServiceGroup

## Overview

Search API for 'Service Group' entry type

### Available Operations

* [SearchTypeServiceGroup](#searchtypeservicegroup) - Search API for 'Service Group' entry type

## SearchTypeServiceGroup

API to search for entries of type Service Group

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
    res, err := s.TypeTypeServiceGroup.SearchTypeServiceGroup(ctx, operations.SearchTypeServiceGroupRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-22T14:47:18.885Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-30T02:45:15.076Z"),
        CreatedateFrom: types.MustTimeFromString("2021-11-13T00:54:03.818Z"),
        CreatedateTo: types.MustTimeFromString("2020-11-18T13:05:17.215Z"),
        Description: sdk.String("doloremque"),
        Filesuffix: sdk.String("officiis"),
        Fromdate: types.MustTimeFromString("2022-07-23T14:56:49.236Z"),
        Group: sdk.String("necessitatibus"),
        Max: sdk.Int64(1962),
        Maxlatitude: sdk.Float32(5898.68),
        Maxlongitude: sdk.Float32(2853.36),
        Minlatitude: sdk.Float32(9417.76),
        Minlongitude: sdk.Float32(8141.59),
        Name: sdk.String("Alonzo Shields"),
        Skip: sdk.Int64(293991),
        Text: sdk.String("sit"),
        Todate: types.MustTimeFromString("2020-02-21T13:58:54.874Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
