# TypeLidarCollection

## Overview

Search API for 'LiDAR Collection' entry type

### Available Operations

* [SearchLidarCollection](#searchlidarcollection) - Search API for 'LiDAR Collection' entry type

## SearchLidarCollection

API to search for entries of type LiDAR Collection

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
    res, err := s.TypeLidarCollection.SearchLidarCollection(ctx, operations.SearchLidarCollectionRequest{
        ChangedateFrom: types.MustTimeFromString("2020-08-20T09:59:23.505Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-05T11:14:11.433Z"),
        CreatedateFrom: types.MustTimeFromString("2020-05-04T08:05:54.832Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-30T01:26:23.904Z"),
        Description: sdk.String("culpa"),
        Filesuffix: sdk.String("ipsa"),
        Fromdate: types.MustTimeFromString("2020-04-22T11:30:26.635Z"),
        Group: sdk.String("quia"),
        Max: sdk.Int64(118932),
        Maxlatitude: sdk.Float32(4260.02),
        Maxlongitude: sdk.Float32(5955.84),
        Minlatitude: sdk.Float32(8927.08),
        Minlongitude: sdk.Float32(3548.21),
        Name: sdk.String("Ms. Donna Auer"),
        Skip: sdk.Int64(435531),
        Text: sdk.String("quibusdam"),
        Todate: types.MustTimeFromString("2021-11-29T06:28:27.205Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
