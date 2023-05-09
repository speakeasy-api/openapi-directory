# TypeOpendaplink

## Overview

Search API for 'OPeNDAP Link' entry type

### Available Operations

* [SearchOpendaplink](#searchopendaplink) - Search API for 'OPeNDAP Link' entry type

## SearchOpendaplink

API to search for entries of type OPeNDAP Link

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
    res, err := s.TypeOpendaplink.SearchOpendaplink(ctx, operations.SearchOpendaplinkRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-17T01:52:56.190Z"),
        ChangedateTo: types.MustTimeFromString("2020-03-24T21:36:14.545Z"),
        CreatedateFrom: types.MustTimeFromString("2021-06-25T15:44:39.144Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-09T08:59:28.620Z"),
        Description: sdk.String("sit"),
        Filesuffix: sdk.String("aliquid"),
        Fromdate: types.MustTimeFromString("2022-07-21T20:56:24.947Z"),
        Group: sdk.String("deleniti"),
        Max: sdk.Int64(122744),
        Maxlatitude: sdk.Float32(2001.9),
        Maxlongitude: sdk.Float32(9639.13),
        Minlatitude: sdk.Float32(6736.53),
        Minlongitude: sdk.Float32(3034.21),
        Name: sdk.String("Edwin Cartwright"),
        Skip: sdk.Int64(528320),
        Text: sdk.String("ipsa"),
        Todate: types.MustTimeFromString("2022-05-16T04:51:59.785Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
