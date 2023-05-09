# TypeTypeMbPointBasic

## Overview

Search API for 'Basic MB point file' entry type

### Available Operations

* [SearchTypeMbPointBasic](#searchtypembpointbasic) - Search API for 'Basic MB point file' entry type

## SearchTypeMbPointBasic

API to search for entries of type Basic MB point file

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
    res, err := s.TypeTypeMbPointBasic.SearchTypeMbPointBasic(ctx, operations.SearchTypeMbPointBasicRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-22T20:08:10.603Z"),
        ChangedateTo: types.MustTimeFromString("2021-08-27T09:00:26.332Z"),
        CreatedateFrom: types.MustTimeFromString("2021-02-04T08:32:50.502Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-17T18:03:56.773Z"),
        Description: sdk.String("laudantium"),
        Filesuffix: sdk.String("dolore"),
        Fromdate: types.MustTimeFromString("2022-01-30T22:16:52.899Z"),
        Group: sdk.String("aspernatur"),
        Max: sdk.Int64(799306),
        Maxlatitude: sdk.Float32(2101.21),
        Maxlongitude: sdk.Float32(2033.56),
        Minlatitude: sdk.Float32(563.71),
        Minlongitude: sdk.Float32(5700.47),
        Name: sdk.String("Ed Armstrong"),
        Skip: sdk.Int64(434382),
        Text: sdk.String("quibusdam"),
        Todate: types.MustTimeFromString("2021-03-03T07:16:13.857Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
