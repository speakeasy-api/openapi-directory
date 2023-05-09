# TypeTypeServiceLink

## Overview

Search API for 'Service Link' entry type

### Available Operations

* [SearchTypeServiceLink](#searchtypeservicelink) - Search API for 'Service Link' entry type

## SearchTypeServiceLink

API to search for entries of type Service Link

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
    res, err := s.TypeTypeServiceLink.SearchTypeServiceLink(ctx, operations.SearchTypeServiceLinkRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-18T12:15:13.900Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-07T21:58:01.504Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-02T22:40:32.488Z"),
        CreatedateTo: types.MustTimeFromString("2022-04-19T16:52:53.258Z"),
        Description: sdk.String("blanditiis"),
        Filesuffix: sdk.String("sapiente"),
        Fromdate: types.MustTimeFromString("2021-03-20T04:23:44.358Z"),
        Group: sdk.String("natus"),
        Max: sdk.Int64(440330),
        Maxlatitude: sdk.Float32(2088.26),
        Maxlongitude: sdk.Float32(1243.81),
        Minlatitude: sdk.Float32(6824.3),
        Minlongitude: sdk.Float32(8574.11),
        Name: sdk.String("Kevin Hammes"),
        Skip: sdk.Int64(336314),
        Text: sdk.String("fuga"),
        Todate: types.MustTimeFromString("2022-07-09T09:55:08.787Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
