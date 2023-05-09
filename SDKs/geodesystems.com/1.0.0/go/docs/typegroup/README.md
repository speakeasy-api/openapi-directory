# TypeGroup

## Overview

Search API for 'Folder' entry type

### Available Operations

* [SearchGroup](#searchgroup) - Search API for 'Folder' entry type

## SearchGroup

API to search for entries of type Folder

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
    res, err := s.TypeGroup.SearchGroup(ctx, operations.SearchGroupRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-20T23:22:33.052Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-02T19:45:49.999Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-01T08:37:58.653Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-25T07:28:31.947Z"),
        Description: sdk.String("qui"),
        Filesuffix: sdk.String("necessitatibus"),
        Fromdate: types.MustTimeFromString("2022-09-30T11:43:51.351Z"),
        Group: sdk.String("beatae"),
        Max: sdk.Int64(397988),
        Maxlatitude: sdk.Float32(2646.49),
        Maxlongitude: sdk.Float32(7600.49),
        Minlatitude: sdk.Float32(9750.95),
        Minlongitude: sdk.Float32(5629.48),
        Name: sdk.String("Randolph Lebsack"),
        Skip: sdk.Int64(412052),
        Text: sdk.String("impedit"),
        Todate: types.MustTimeFromString("2022-11-10T13:12:44.057Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
