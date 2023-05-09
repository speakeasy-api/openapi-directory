# TypeProjectLearningResource

## Overview

Search API for 'Teaching Resource' entry type

### Available Operations

* [SearchProjectLearningResource](#searchprojectlearningresource) - Search API for 'Teaching Resource' entry type

## SearchProjectLearningResource

API to search for entries of type Teaching Resource

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
    res, err := s.TypeProjectLearningResource.SearchProjectLearningResource(ctx, operations.SearchProjectLearningResourceRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-20T09:40:46.168Z"),
        ChangedateTo: types.MustTimeFromString("2020-02-25T00:39:09.630Z"),
        CreatedateFrom: types.MustTimeFromString("2021-03-13T00:37:41.372Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-09T16:14:03.266Z"),
        Description: sdk.String("voluptas"),
        Filesuffix: sdk.String("doloribus"),
        Fromdate: types.MustTimeFromString("2020-08-21T17:46:18.554Z"),
        Group: sdk.String("facere"),
        Max: sdk.Int64(491380),
        Maxlatitude: sdk.Float32(6143.46),
        Maxlongitude: sdk.Float32(5884.73),
        Minlatitude: sdk.Float32(2214.9),
        Minlongitude: sdk.Float32(5732.47),
        Name: sdk.String("Deborah Keeling"),
        SearchProjectLearningResourceGradeLevel: sdk.String("autem"),
        SearchProjectLearningResourceTopic: sdk.String("assumenda"),
        Skip: sdk.Int64(129631),
        Text: sdk.String("fugiat"),
        Todate: types.MustTimeFromString("2022-12-20T00:52:58.130Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
