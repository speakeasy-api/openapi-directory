# TypeProjectProject

## Overview

Search API for 'Project' entry type

### Available Operations

* [SearchProjectProject](#searchprojectproject) - Search API for 'Project' entry type

## SearchProjectProject

API to search for entries of type Project

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
    res, err := s.TypeProjectProject.SearchProjectProject(ctx, operations.SearchProjectProjectRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-15T07:52:06.510Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-25T03:59:17.657Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-31T07:46:10.277Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-09T03:17:39.929Z"),
        Description: sdk.String("ad"),
        Filesuffix: sdk.String("voluptate"),
        Fromdate: types.MustTimeFromString("2022-09-04T09:00:32.956Z"),
        Group: sdk.String("sit"),
        Max: sdk.Int64(426527),
        Maxlatitude: sdk.Float32(3883.33),
        Maxlongitude: sdk.Float32(3112.47),
        Minlatitude: sdk.Float32(941.22),
        Minlongitude: sdk.Float32(5252.23),
        Name: sdk.String("Michelle Shanahan"),
        Skip: sdk.Int64(152887),
        Text: sdk.String("inventore"),
        Todate: types.MustTimeFromString("2021-03-13T15:44:04.050Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
