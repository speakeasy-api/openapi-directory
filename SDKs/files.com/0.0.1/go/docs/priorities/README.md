# Priorities

## Overview

Operations about priorities

### Available Operations

* [GetPriorities](#getpriorities) - List Priorities

## GetPriorities

List Priorities

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
    res, err := s.Priorities.GetPriorities(ctx, operations.GetPrioritiesRequest{
        Cursor: sdk.String("sunt"),
        Path: "recusandae",
        PerPage: sdk.Int(680697),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PriorityEntities != nil {
        // handle response
    }
}
```
