# TypeProjectProgram

## Overview

Search API for 'Program' entry type

### Available Operations

* [SearchProjectProgram](#searchprojectprogram) - Search API for 'Program' entry type

## SearchProjectProgram

API to search for entries of type Program

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
    res, err := s.TypeProjectProgram.SearchProjectProgram(ctx, operations.SearchProjectProgramRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-26T00:43:51.707Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-03T10:39:43.179Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-27T01:33:10.149Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-24T01:33:58.896Z"),
        Description: sdk.String("officiis"),
        Filesuffix: sdk.String("omnis"),
        Fromdate: types.MustTimeFromString("2022-08-22T15:30:12.306Z"),
        Group: sdk.String("quod"),
        Max: sdk.Int64(175803),
        Maxlatitude: sdk.Float32(8080.5),
        Maxlongitude: sdk.Float32(5700.39),
        Minlatitude: sdk.Float32(9270.21),
        Minlongitude: sdk.Float32(5517.78),
        Name: sdk.String("Miss Jeannie Emmerich"),
        Skip: sdk.Int64(196000),
        Text: sdk.String("recusandae"),
        Todate: types.MustTimeFromString("2022-10-05T04:08:05.701Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
