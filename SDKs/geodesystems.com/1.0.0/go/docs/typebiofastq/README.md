# TypeBioFastq

## Overview

Search API for 'FASTQ File' entry type

### Available Operations

* [SearchBioFastq](#searchbiofastq) - Search API for 'FASTQ File' entry type

## SearchBioFastq

API to search for entries of type FASTQ File

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
    res, err := s.TypeBioFastq.SearchBioFastq(ctx, operations.SearchBioFastqRequest{
        ChangedateFrom: types.MustTimeFromString("2021-04-14T09:13:11.675Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-22T03:36:34.615Z"),
        CreatedateFrom: types.MustTimeFromString("2020-02-22T17:45:21.686Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-08T14:21:47.573Z"),
        Description: sdk.String("in"),
        Filesuffix: sdk.String("illum"),
        Fromdate: types.MustTimeFromString("2020-11-26T01:41:04.216Z"),
        Group: sdk.String("dicta"),
        Max: sdk.Int64(297437),
        Maxlatitude: sdk.Float32(7670.24),
        Maxlongitude: sdk.Float32(8137.98),
        Minlatitude: sdk.Float32(4118.2),
        Minlongitude: sdk.Float32(3965.06),
        Name: sdk.String("Tomas Friesen"),
        Skip: sdk.Int64(881736),
        Text: sdk.String("delectus"),
        Todate: types.MustTimeFromString("2021-10-28T10:05:29.849Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
