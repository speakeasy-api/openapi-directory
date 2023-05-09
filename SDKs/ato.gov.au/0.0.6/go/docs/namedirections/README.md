# NameDirections

## Overview

A classification scheme for names.


### Available Operations

* [GetClassificationsNameDirections](#getclassificationsnamedirections) - Retrieve a list of name directions

## GetClassificationsNameDirections

Retrieve a list of name directions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.NameDirections.GetClassificationsNameDirections(ctx, operations.GetClassificationsNameDirectionsRequest{
        APIKey: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NameDirections != nil {
        // handle response
    }
}
```
