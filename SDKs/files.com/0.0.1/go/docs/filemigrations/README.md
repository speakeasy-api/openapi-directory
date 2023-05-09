# FileMigrations

## Overview

Operations about file_migrations

### Available Operations

* [GetFileMigrationsID](#getfilemigrationsid) - Show File Migration

## GetFileMigrationsID

Show File Migration

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
    res, err := s.FileMigrations.GetFileMigrationsID(ctx, operations.GetFileMigrationsIDRequest{
        ID: 509342,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileMigrationEntity != nil {
        // handle response
    }
}
```
