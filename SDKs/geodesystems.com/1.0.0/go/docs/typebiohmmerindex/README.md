# TypeBioHmmerIndex

## Overview

Search API for 'HMMER Index File' entry type

### Available Operations

* [SearchBioHmmerIndex](#searchbiohmmerindex) - Search API for 'HMMER Index File' entry type

## SearchBioHmmerIndex

API to search for entries of type HMMER Index File

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
    res, err := s.TypeBioHmmerIndex.SearchBioHmmerIndex(ctx, operations.SearchBioHmmerIndexRequest{
        ChangedateFrom: types.MustTimeFromString("2021-09-06T10:36:33.442Z"),
        ChangedateTo: types.MustTimeFromString("2021-12-07T18:13:34.827Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-23T13:35:30.978Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-18T17:53:23.400Z"),
        Description: sdk.String("vel"),
        Filesuffix: sdk.String("natus"),
        Fromdate: types.MustTimeFromString("2022-01-19T08:19:15.156Z"),
        Group: sdk.String("perferendis"),
        Max: sdk.Int64(470132),
        Maxlatitude: sdk.Float32(3015.75),
        Maxlongitude: sdk.Float32(7160.75),
        Minlatitude: sdk.Float32(6601.74),
        Minlongitude: sdk.Float32(2879.91),
        Name: sdk.String("Laurie Mosciski"),
        Skip: sdk.Int64(878453),
        Text: sdk.String("aspernatur"),
        Todate: types.MustTimeFromString("2022-09-14T03:02:47.808Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
