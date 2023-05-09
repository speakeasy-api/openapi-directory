# TypeFile

## Overview

Search API for 'File' entry type

### Available Operations

* [SearchFile](#searchfile) - Search API for 'File' entry type

## SearchFile

API to search for entries of type File

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
    res, err := s.TypeFile.SearchFile(ctx, operations.SearchFileRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-25T16:13:44.576Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-14T09:06:41.387Z"),
        CreatedateFrom: types.MustTimeFromString("2021-04-14T09:55:28.474Z"),
        CreatedateTo: types.MustTimeFromString("2021-05-24T21:18:28.969Z"),
        Description: sdk.String("quia"),
        Filesuffix: sdk.String("quia"),
        Fromdate: types.MustTimeFromString("2022-05-24T21:57:47.411Z"),
        Group: sdk.String("libero"),
        Max: sdk.Int64(115661),
        Maxlatitude: sdk.Float32(6633.18),
        Maxlongitude: sdk.Float32(7278.88),
        Minlatitude: sdk.Float32(8544.6),
        Minlongitude: sdk.Float32(6374.62),
        Name: sdk.String("Clark Balistreri DVM"),
        Skip: sdk.Int64(80061),
        Text: sdk.String("aperiam"),
        Todate: types.MustTimeFromString("2022-06-01T04:35:31.707Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
