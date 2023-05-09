# SettingsChanges

## Overview

Operations about settings_changes

### Available Operations

* [GetSettingsChanges](#getsettingschanges) - List Settings Changes

## GetSettingsChanges

List Settings Changes

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
    res, err := s.SettingsChanges.GetSettingsChanges(ctx, operations.GetSettingsChangesRequest{
        APIKeyID: sdk.String("rerum"),
        Cursor: sdk.String("tempora"),
        Filter: map[string]interface{}{
            "inventore": "fugit",
            "cumque": "quae",
        },
        PerPage: sdk.Int(21688),
        SortBy: map[string]interface{}{
            "aspernatur": "eum",
        },
        UserID: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingsChangeEntities != nil {
        // handle response
    }
}
```
