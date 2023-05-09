# TypeStatusboard

## Overview

Search API for 'Status Board' entry type

### Available Operations

* [SearchStatusboard](#searchstatusboard) - Search API for 'Status Board' entry type

## SearchStatusboard

API to search for entries of type Status Board

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
    res, err := s.TypeStatusboard.SearchStatusboard(ctx, operations.SearchStatusboardRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-16T16:10:02.604Z"),
        ChangedateTo: types.MustTimeFromString("2021-05-05T11:34:17.742Z"),
        CreatedateFrom: types.MustTimeFromString("2020-11-29T03:17:42.952Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-14T02:39:00.347Z"),
        Description: sdk.String("doloremque"),
        Filesuffix: sdk.String("fuga"),
        Fromdate: types.MustTimeFromString("2022-11-24T01:49:22.777Z"),
        Group: sdk.String("suscipit"),
        Max: sdk.Int64(757438),
        Maxlatitude: sdk.Float32(8855.23),
        Maxlongitude: sdk.Float32(4909.56),
        Minlatitude: sdk.Float32(1480.38),
        Minlongitude: sdk.Float32(1887.82),
        Name: sdk.String("Alex Armstrong"),
        SearchDbStatusboardStatus: sdk.String("delectus"),
        SearchDbStatusboardWhat: sdk.String("deserunt"),
        Skip: sdk.Int64(188081),
        Text: sdk.String("ipsa"),
        Todate: types.MustTimeFromString("2021-02-26T20:02:05.121Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
