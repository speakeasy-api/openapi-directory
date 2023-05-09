# Genders

## Overview

A classification scheme for the representation of human sexes.


### Available Operations

* [GetClassificationsGenders](#getclassificationsgenders) - Retrieve a list of genders

## GetClassificationsGenders

Retrieve a list of genders

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
    res, err := s.Genders.GetClassificationsGenders(ctx, operations.GetClassificationsGendersRequest{
        APIKey: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Genders != nil {
        // handle response
    }
}
```
