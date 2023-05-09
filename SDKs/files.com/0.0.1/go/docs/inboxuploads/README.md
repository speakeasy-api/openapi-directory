# InboxUploads

## Overview

Operations about inbox_uploads

### Available Operations

* [GetInboxUploads](#getinboxuploads) - List Inbox Uploads

## GetInboxUploads

List Inbox Uploads

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
    res, err := s.InboxUploads.GetInboxUploads(ctx, operations.GetInboxUploadsRequest{
        Cursor: sdk.String("nobis"),
        Filter: map[string]interface{}{
            "rerum": "sed",
        },
        FilterGt: map[string]interface{}{
            "explicabo": "asperiores",
            "facilis": "voluptate",
            "expedita": "ab",
            "iste": "dolore",
        },
        FilterGteq: map[string]interface{}{
            "sed": "in",
            "commodi": "quidem",
            "explicabo": "voluptas",
        },
        FilterLt: map[string]interface{}{
            "architecto": "suscipit",
            "sapiente": "debitis",
            "illo": "reiciendis",
        },
        FilterLteq: map[string]interface{}{
            "corrupti": "maiores",
        },
        InboxID: sdk.Int(274823),
        InboxRegistrationID: sdk.Int(148478),
        PerPage: sdk.Int(592231),
        SortBy: map[string]interface{}{
            "necessitatibus": "ipsum",
            "ea": "occaecati",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InboxUploadEntities != nil {
        // handle response
    }
}
```
