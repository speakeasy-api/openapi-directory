# SDK

## Overview

Execute SQL queries against a Datasette database and return the results as JSON

### Available Operations

* [Query](#query) - Execute a SQLite SQL query against the content database

## Query

Accepts SQLite SQL query, returns JSON. Does not allow PRAGMA statements.

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
    res, err := s.SDK.Query(ctx, operations.QueryRequest{
        Shape: operations.QueryShapeEnumArray,
        SQL: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Query200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
