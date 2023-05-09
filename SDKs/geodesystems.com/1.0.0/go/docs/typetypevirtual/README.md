# TypeTypeVirtual

## Overview

Search API for 'Virtual Group' entry type

### Available Operations

* [SearchTypeVirtual](#searchtypevirtual) - Search API for 'Virtual Group' entry type

## SearchTypeVirtual

API to search for entries of type Virtual Group

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
    res, err := s.TypeTypeVirtual.SearchTypeVirtual(ctx, operations.SearchTypeVirtualRequest{
        ChangedateFrom: types.MustTimeFromString("2021-07-10T19:02:58.831Z"),
        ChangedateTo: types.MustTimeFromString("2021-04-15T15:12:23.880Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-26T11:56:54.380Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-16T09:32:17.458Z"),
        Description: sdk.String("quis"),
        Filesuffix: sdk.String("corrupti"),
        Fromdate: types.MustTimeFromString("2022-04-21T11:01:53.379Z"),
        Group: sdk.String("quod"),
        Max: sdk.Int64(954989),
        Maxlatitude: sdk.Float32(915.29),
        Maxlongitude: sdk.Float32(3715.34),
        Minlatitude: sdk.Float32(1768.52),
        Minlongitude: sdk.Float32(3465.57),
        Name: sdk.String("Myrtle Spinka"),
        Skip: sdk.Int64(566024),
        Text: sdk.String("corporis"),
        Todate: types.MustTimeFromString("2021-02-18T15:25:52.242Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
