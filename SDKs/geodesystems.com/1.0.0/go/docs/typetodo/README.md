# TypeTodo

## Overview

Search API for 'Todo' entry type

### Available Operations

* [SearchTodo](#searchtodo) - Search API for 'Todo' entry type

## SearchTodo

API to search for entries of type Todo

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
    res, err := s.TypeTodo.SearchTodo(ctx, operations.SearchTodoRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-21T21:21:59.349Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-09T12:06:32.096Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-06T10:01:19.877Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-13T15:13:55.874Z"),
        Description: sdk.String("blanditiis"),
        Filesuffix: sdk.String("sint"),
        Fromdate: types.MustTimeFromString("2021-12-06T04:33:53.232Z"),
        Group: sdk.String("molestiae"),
        Max: sdk.Int64(933840),
        Maxlatitude: sdk.Float32(5231.56),
        Maxlongitude: sdk.Float32(3663.27),
        Minlatitude: sdk.Float32(2505.2),
        Minlongitude: sdk.Float32(9261.42),
        Name: sdk.String("Jeffrey Gutmann"),
        SearchDbTodoCategory: sdk.String("quibusdam"),
        SearchDbTodoChecked: sdk.Bool(false),
        SearchDbTodoTitle: sdk.String("magni"),
        Skip: sdk.Int64(163673),
        Text: sdk.String("consequuntur"),
        Todate: types.MustTimeFromString("2022-08-01T18:49:09.447Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
