# BusinessNameLifecycleStates

## Overview

A classification scheme for business names.


### Available Operations

* [GetClassificationsBusinessNameLifecycleStates](#getclassificationsbusinessnamelifecyclestates) - Retrieve a list of business name lifecycle states

## GetClassificationsBusinessNameLifecycleStates

Retrieve a list of business name lifecycle states

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
    res, err := s.BusinessNameLifecycleStates.GetClassificationsBusinessNameLifecycleStates(ctx, operations.GetClassificationsBusinessNameLifecycleStatesRequest{
        APIKey: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessNameLifecycleStates != nil {
        // handle response
    }
}
```
