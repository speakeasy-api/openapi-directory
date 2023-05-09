# NamePrefixes

## Overview

A classification scheme for names.


### Available Operations

* [GetClassificationsNamePrefixes](#getclassificationsnameprefixes) - Retrieve a list of name prefixes

## GetClassificationsNamePrefixes

Retrieve a list of name prefixes

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
    res, err := s.NamePrefixes.GetClassificationsNamePrefixes(ctx, operations.GetClassificationsNamePrefixesRequest{
        APIKey: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NamePrefixes != nil {
        // handle response
    }
}
```
