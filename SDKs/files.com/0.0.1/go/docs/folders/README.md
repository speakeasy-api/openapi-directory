# Folders

## Overview

Operations about folders

### Available Operations

* [FolderListForPath](#folderlistforpath) - List Folders by path
* [PostFoldersPath](#postfolderspath) - Create folder

## FolderListForPath

List Folders by path

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
    res, err := s.Folders.FolderListForPath(ctx, operations.FolderListForPathRequest{
        Cursor: sdk.String("distinctio"),
        Filter: sdk.String("quod"),
        Path: "dignissimos",
        PerPage: sdk.Int(76956),
        PreviewSize: sdk.String("nihil"),
        Search: sdk.String("totam"),
        SearchAll: sdk.Bool(false),
        SortBy: map[string]interface{}{
            "aliquam": "odio",
            "occaecati": "commodi",
            "sapiente": "dolores",
            "deserunt": "molestiae",
        },
        WithPreviews: sdk.Bool(false),
        WithPriorityColor: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileEntities != nil {
        // handle response
    }
}
```

## PostFoldersPath

Create folder

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Folders.PostFoldersPath(ctx, operations.PostFoldersPathRequest{
        RequestBody: &operations.PostFoldersPathRequestBody{
            MkdirParents: sdk.Bool(false),
            ProvidedMtime: types.MustTimeFromString("2022-03-20T23:14:37.473Z"),
        },
        Path: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileEntity != nil {
        // handle response
    }
}
```
