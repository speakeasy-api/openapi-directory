# BundleDownloads

## Overview

Operations about bundle_downloads

### Available Operations

* [GetBundleDownloads](#getbundledownloads) - List Bundle Downloads

## GetBundleDownloads

List Bundle Downloads

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
    res, err := s.BundleDownloads.GetBundleDownloads(ctx, operations.GetBundleDownloadsRequest{
        BundleID: sdk.Int(714697),
        BundleRegistrationID: sdk.Int(990339),
        Cursor: sdk.String("nihil"),
        Filter: map[string]interface{}{
            "voluptate": "id",
        },
        FilterGt: map[string]interface{}{
            "eius": "aspernatur",
            "perferendis": "amet",
            "optio": "accusamus",
            "ad": "saepe",
        },
        FilterGteq: map[string]interface{}{
            "deserunt": "provident",
            "minima": "repellendus",
        },
        FilterLt: map[string]interface{}{
            "similique": "alias",
            "at": "quaerat",
            "tempora": "vel",
        },
        FilterLteq: map[string]interface{}{
            "officiis": "qui",
            "dolorum": "a",
            "esse": "harum",
            "iusto": "ipsum",
        },
        PerPage: sdk.Int(788740),
        SortBy: map[string]interface{}{
            "amet": "tempore",
            "accusamus": "numquam",
            "enim": "dolorem",
            "sapiente": "totam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleDownloadEntities != nil {
        // handle response
    }
}
```
