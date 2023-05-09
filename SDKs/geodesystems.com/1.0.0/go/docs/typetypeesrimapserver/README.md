# TypeTypeEsriMapserver

## Overview

Search API for 'ESRI Map Server' entry type

### Available Operations

* [SearchTypeEsriMapserver](#searchtypeesrimapserver) - Search API for 'ESRI Map Server' entry type

## SearchTypeEsriMapserver

API to search for entries of type ESRI Map Server

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
    res, err := s.TypeTypeEsriMapserver.SearchTypeEsriMapserver(ctx, operations.SearchTypeEsriMapserverRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-14T16:50:21.678Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-20T05:34:36.600Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-22T04:31:01.154Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-21T03:02:47.125Z"),
        Description: sdk.String("eius"),
        Filesuffix: sdk.String("placeat"),
        Fromdate: types.MustTimeFromString("2022-03-09T07:11:23.601Z"),
        Group: sdk.String("ipsam"),
        Max: sdk.Int64(750343),
        Maxlatitude: sdk.Float32(7841.2),
        Maxlongitude: sdk.Float32(2878.34),
        Minlatitude: sdk.Float32(5961.33),
        Minlongitude: sdk.Float32(4949.72),
        Name: sdk.String("Norma Feest"),
        Skip: sdk.Int64(435841),
        Text: sdk.String("aliquid"),
        Todate: types.MustTimeFromString("2021-04-17T19:09:36.880Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
