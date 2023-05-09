# InboxRegistrations

## Overview

Operations about inbox_registrations

### Available Operations

* [GetInboxRegistrations](#getinboxregistrations) - List Inbox Registrations

## GetInboxRegistrations

List Inbox Registrations

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
    res, err := s.InboxRegistrations.GetInboxRegistrations(ctx, operations.GetInboxRegistrationsRequest{
        Cursor: sdk.String("totam"),
        FolderBehaviorID: sdk.Int(940210),
        PerPage: sdk.Int(348783),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InboxRegistrationEntities != nil {
        // handle response
    }
}
```
