# BusinessNames

## Overview

A business name is a name or title under which a person or organisation conducts a business.


### Available Operations

* [GetBusinessNames](#getbusinessnames) - Retrieve a list of business names

## GetBusinessNames

Retrieve a list of business names


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
    res, err := s.BusinessNames.GetBusinessNames(ctx, operations.GetBusinessNamesRequest{
        APIKey: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessNames != nil {
        // handle response
    }
}
```
