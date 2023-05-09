# TypeHipchatGroup

## Overview

Search API for 'HipChat Group' entry type

### Available Operations

* [SearchHipchatGroup](#searchhipchatgroup) - Search API for 'HipChat Group' entry type

## SearchHipchatGroup

API to search for entries of type HipChat Group

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
    res, err := s.TypeHipchatGroup.SearchHipchatGroup(ctx, operations.SearchHipchatGroupRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-12T22:07:15.196Z"),
        ChangedateTo: types.MustTimeFromString("2020-06-02T01:41:14.280Z"),
        CreatedateFrom: types.MustTimeFromString("2021-10-07T02:38:58.799Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-15T00:25:29.820Z"),
        Description: sdk.String("nisi"),
        Filesuffix: sdk.String("rerum"),
        Fromdate: types.MustTimeFromString("2020-04-05T22:53:14.639Z"),
        Group: sdk.String("non"),
        Max: sdk.Int64(524577),
        Maxlatitude: sdk.Float32(1578.84),
        Maxlongitude: sdk.Float32(3542.25),
        Minlatitude: sdk.Float32(7868.6),
        Minlongitude: sdk.Float32(1202.77),
        Name: sdk.String("Colin Berge Sr."),
        Skip: sdk.Int64(317898),
        Text: sdk.String("optio"),
        Todate: types.MustTimeFromString("2022-12-19T13:06:00.021Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
