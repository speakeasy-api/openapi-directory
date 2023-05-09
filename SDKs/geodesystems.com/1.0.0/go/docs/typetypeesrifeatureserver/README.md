# TypeTypeEsriFeatureserver

## Overview

Search API for 'ESRI Feature Server' entry type

### Available Operations

* [SearchTypeEsriFeatureserver](#searchtypeesrifeatureserver) - Search API for 'ESRI Feature Server' entry type

## SearchTypeEsriFeatureserver

API to search for entries of type ESRI Feature Server

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
    res, err := s.TypeTypeEsriFeatureserver.SearchTypeEsriFeatureserver(ctx, operations.SearchTypeEsriFeatureserverRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-10T02:46:21.249Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-17T01:57:37.545Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-11T16:58:55.649Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-28T14:50:23.356Z"),
        Description: sdk.String("vitae"),
        Filesuffix: sdk.String("mollitia"),
        Fromdate: types.MustTimeFromString("2020-05-20T12:36:20.334Z"),
        Group: sdk.String("quibusdam"),
        Max: sdk.Int64(461853),
        Maxlatitude: sdk.Float32(5345.09),
        Maxlongitude: sdk.Float32(5232.66),
        Minlatitude: sdk.Float32(4245.53),
        Minlongitude: sdk.Float32(1777.9),
        Name: sdk.String("Katherine Kuvalis"),
        Skip: sdk.Int64(716410),
        Text: sdk.String("incidunt"),
        Todate: types.MustTimeFromString("2022-07-02T07:17:30.104Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
