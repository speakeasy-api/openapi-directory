# TypeTypePointOceanCsvSadoPosition

## Overview

Search API for 'SADO Position Data' entry type

### Available Operations

* [SearchTypePointOceanCsvSadoPosition](#searchtypepointoceancsvsadoposition) - Search API for 'SADO Position Data' entry type

## SearchTypePointOceanCsvSadoPosition

API to search for entries of type SADO Position Data

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
    res, err := s.TypeTypePointOceanCsvSadoPosition.SearchTypePointOceanCsvSadoPosition(ctx, operations.SearchTypePointOceanCsvSadoPositionRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-05T10:50:37.967Z"),
        ChangedateTo: types.MustTimeFromString("2021-04-04T22:52:25.370Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-23T00:43:15.987Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-21T23:41:36.278Z"),
        Description: sdk.String("laboriosam"),
        Filesuffix: sdk.String("aperiam"),
        Fromdate: types.MustTimeFromString("2022-05-28T14:35:14.227Z"),
        Group: sdk.String("dicta"),
        Max: sdk.Int64(825283),
        Maxlatitude: sdk.Float32(4408.77),
        Maxlongitude: sdk.Float32(2737.93),
        Minlatitude: sdk.Float32(3204.42),
        Minlongitude: sdk.Float32(9175.4),
        Name: sdk.String("Mrs. Sheri Cruickshank"),
        Skip: sdk.Int64(791517),
        Text: sdk.String("excepturi"),
        Todate: types.MustTimeFromString("2022-05-24T09:39:20.515Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
