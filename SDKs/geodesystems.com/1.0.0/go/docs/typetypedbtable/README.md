# TypeTypeDbTable

## Overview

Search API for 'Database Table' entry type

### Available Operations

* [SearchTypeDbTable](#searchtypedbtable) - Search API for 'Database Table' entry type

## SearchTypeDbTable

API to search for entries of type Database Table

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
    res, err := s.TypeTypeDbTable.SearchTypeDbTable(ctx, operations.SearchTypeDbTableRequest{
        ChangedateFrom: types.MustTimeFromString("2021-04-25T15:46:52.343Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-04T07:26:03.876Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-27T11:17:23.811Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-27T21:54:39.142Z"),
        Description: sdk.String("sapiente"),
        Filesuffix: sdk.String("id"),
        Fromdate: types.MustTimeFromString("2022-12-02T15:06:25.913Z"),
        Group: sdk.String("iste"),
        Max: sdk.Int64(542187),
        Maxlatitude: sdk.Float32(1295.31),
        Maxlongitude: sdk.Float32(3560.07),
        Minlatitude: sdk.Float32(5397.03),
        Minlongitude: sdk.Float32(9874.35),
        Name: sdk.String("Richard Murray"),
        Skip: sdk.Int64(723623),
        Text: sdk.String("animi"),
        Todate: types.MustTimeFromString("2022-07-18T18:41:54.686Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
