# RegisteredIdentifierTypes

## Overview

A classification scheme for registered identifiers.


### Available Operations

* [GetClassificationsRegisteredIdentifierTypes](#getclassificationsregisteredidentifiertypes) - Retrieve a list of registered identifier types

## GetClassificationsRegisteredIdentifierTypes

Retrieve a list of registered identifier types

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
    res, err := s.RegisteredIdentifierTypes.GetClassificationsRegisteredIdentifierTypes(ctx, operations.GetClassificationsRegisteredIdentifierTypesRequest{
        APIKey: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisteredIdentifierTypes != nil {
        // handle response
    }
}
```
