# TypeTypePointSimpleRecords

## Overview

Search API for 'Simple Records' entry type

### Available Operations

* [SearchTypePointSimpleRecords](#searchtypepointsimplerecords) - Search API for 'Simple Records' entry type

## SearchTypePointSimpleRecords

API to search for entries of type Simple Records

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
    res, err := s.TypeTypePointSimpleRecords.SearchTypePointSimpleRecords(ctx, operations.SearchTypePointSimpleRecordsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-26T07:38:11.121Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-18T23:32:45.380Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-12T08:15:08.279Z"),
        CreatedateTo: types.MustTimeFromString("2021-05-30T09:42:33.114Z"),
        Description: sdk.String("magni"),
        Filesuffix: sdk.String("mollitia"),
        Fromdate: types.MustTimeFromString("2022-02-01T11:51:34.202Z"),
        Group: sdk.String("quas"),
        Max: sdk.Int64(13688),
        Maxlatitude: sdk.Float32(4222.15),
        Maxlongitude: sdk.Float32(2099.2),
        Minlatitude: sdk.Float32(1312.49),
        Minlongitude: sdk.Float32(6999.89),
        Name: sdk.String("Marion Hamill"),
        Skip: sdk.Int64(434302),
        Text: sdk.String("voluptatibus"),
        Todate: types.MustTimeFromString("2022-08-17T23:17:24.961Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
