# TypeProjectDataset

## Overview

Search API for 'Dataset' entry type

### Available Operations

* [SearchProjectDataset](#searchprojectdataset) - Search API for 'Dataset' entry type

## SearchProjectDataset

API to search for entries of type Dataset

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
    res, err := s.TypeProjectDataset.SearchProjectDataset(ctx, operations.SearchProjectDatasetRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-22T05:03:27.540Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-29T20:19:51.485Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-03T11:57:21.616Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-24T15:33:44.473Z"),
        Description: sdk.String("laudantium"),
        Filesuffix: sdk.String("iusto"),
        Fromdate: types.MustTimeFromString("2022-01-19T08:01:00.558Z"),
        Group: sdk.String("quis"),
        Max: sdk.Int64(435883),
        Maxlatitude: sdk.Float32(685.96),
        Maxlongitude: sdk.Float32(3086.58),
        Minlatitude: sdk.Float32(2289.07),
        Minlongitude: sdk.Float32(9569.42),
        Name: sdk.String("Monique Kerluke"),
        SearchProjectDatasetDataLevel: sdk.String("laudantium"),
        SearchProjectDatasetDataType: sdk.String("nam"),
        SearchProjectDatasetDatasetID: sdk.String("nemo"),
        Skip: sdk.Int64(317632),
        Text: sdk.String("ipsam"),
        Todate: types.MustTimeFromString("2022-09-23T05:09:40.748Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
