# NameTypes

## Overview

A classification scheme for names.


### Available Operations

* [GetClassificationsNameTypes](#getclassificationsnametypes) - Retrieve a list of name types

## GetClassificationsNameTypes

Retrieve a list of name types

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
    res, err := s.NameTypes.GetClassificationsNameTypes(ctx, operations.GetClassificationsNameTypesRequest{
        APIKey: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NameTypes != nil {
        // handle response
    }
}
```
