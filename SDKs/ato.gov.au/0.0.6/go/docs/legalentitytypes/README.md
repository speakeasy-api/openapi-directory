# LegalEntityTypes

## Overview

A classification scheme for parties (individuals and organisations).


### Available Operations

* [GetClassificationsLegalEntityTypes](#getclassificationslegalentitytypes) - Retrieve a list of legal entity types

## GetClassificationsLegalEntityTypes

Retrieve a list of legal entity types

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
    res, err := s.LegalEntityTypes.GetClassificationsLegalEntityTypes(ctx, operations.GetClassificationsLegalEntityTypesRequest{
        APIKey: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LegalEntityTypes != nil {
        // handle response
    }
}
```
