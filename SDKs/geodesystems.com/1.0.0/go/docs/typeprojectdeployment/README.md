# TypeProjectDeployment

## Overview

Search API for 'Deployment' entry type

### Available Operations

* [SearchProjectDeployment](#searchprojectdeployment) - Search API for 'Deployment' entry type

## SearchProjectDeployment

API to search for entries of type Deployment

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
    res, err := s.TypeProjectDeployment.SearchProjectDeployment(ctx, operations.SearchProjectDeploymentRequest{
        ChangedateFrom: types.MustTimeFromString("2022-06-15T08:36:06.296Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-23T05:45:35.035Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-17T16:35:15.259Z"),
        CreatedateTo: types.MustTimeFromString("2021-07-01T13:15:33.537Z"),
        Description: sdk.String("similique"),
        Filesuffix: sdk.String("porro"),
        Fromdate: types.MustTimeFromString("2021-10-25T18:39:10.695Z"),
        Group: sdk.String("cumque"),
        Max: sdk.Int64(743795),
        Maxlatitude: sdk.Float32(8565.68),
        Maxlongitude: sdk.Float32(3892.87),
        Minlatitude: sdk.Float32(7203.19),
        Minlongitude: sdk.Float32(3153.87),
        Name: sdk.String("Jeffery Tromp"),
        Skip: sdk.Int64(29080),
        Text: sdk.String("provident"),
        Todate: types.MustTimeFromString("2022-12-19T11:49:13.655Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
