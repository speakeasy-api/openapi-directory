# TypeFtp

## Overview

Search API for 'Remote FTP File View' entry type

### Available Operations

* [SearchFtp](#searchftp) - Search API for 'Remote FTP File View' entry type

## SearchFtp

API to search for entries of type Remote FTP File View

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
    res, err := s.TypeFtp.SearchFtp(ctx, operations.SearchFtpRequest{
        ChangedateFrom: types.MustTimeFromString("2021-02-28T18:13:48.502Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-16T16:24:27.042Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-21T04:17:16.724Z"),
        CreatedateTo: types.MustTimeFromString("2021-07-20T13:08:36.205Z"),
        Description: sdk.String("praesentium"),
        Filesuffix: sdk.String("odit"),
        Fromdate: types.MustTimeFromString("2022-08-22T23:12:04.283Z"),
        Group: sdk.String("error"),
        Max: sdk.Int64(937117),
        Maxlatitude: sdk.Float32(2393.37),
        Maxlongitude: sdk.Float32(9233.06),
        Minlatitude: sdk.Float32(6308.71),
        Minlongitude: sdk.Float32(2828.37),
        Name: sdk.String("Tim Breitenberg"),
        Skip: sdk.Int64(963198),
        Text: sdk.String("cupiditate"),
        Todate: types.MustTimeFromString("2022-09-30T10:14:18.921Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
