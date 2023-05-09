# Apps

## Overview

Operations about apps

### Available Operations

* [GetApps](#getapps) - List Apps

## GetApps

List Apps

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
    res, err := s.Apps.GetApps(ctx, operations.GetAppsRequest{
        Cursor: sdk.String("fugit"),
        Filter: map[string]interface{}{
            "hic": "optio",
            "totam": "beatae",
            "commodi": "molestiae",
        },
        FilterPrefix: map[string]interface{}{
            "qui": "impedit",
            "cum": "esse",
        },
        PerPage: sdk.Int(216550),
        SortBy: map[string]interface{}{
            "aspernatur": "perferendis",
            "ad": "natus",
            "sed": "iste",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppEntities != nil {
        // handle response
    }
}
```
