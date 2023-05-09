# FileActions

## Overview

Operations about file_actions

### Available Operations

* [FileActionBeginUpload](#fileactionbeginupload) - Begin file upload
* [FileActionCopy](#fileactioncopy) - Copy file/folder
* [FileActionFind](#fileactionfind) - Find file/folder by path
* [FileActionMove](#fileactionmove) - Move file/folder

## FileActionBeginUpload

Begin file upload

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
    res, err := s.FileActions.FileActionBeginUpload(ctx, operations.FileActionBeginUploadRequest{
        RequestBody: &operations.FileActionBeginUploadRequestBody{
            MkdirParents: sdk.Bool(false),
            Part: sdk.Int(379034),
            Parts: sdk.Int(727044),
            Ref: sdk.String("quasi"),
            Restart: sdk.Int(270328),
            Size: sdk.Int(256139),
            WithRename: sdk.Bool(false),
        },
        Path: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileUploadPartEntities != nil {
        // handle response
    }
}
```

## FileActionCopy

Copy file/folder

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
    res, err := s.FileActions.FileActionCopy(ctx, operations.FileActionCopyRequest{
        RequestBody: operations.FileActionCopyRequestBody{
            Destination: "provident",
            Structure: sdk.Bool(false),
        },
        Path: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileActionEntity != nil {
        // handle response
    }
}
```

## FileActionFind

Find file/folder by path

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
    res, err := s.FileActions.FileActionFind(ctx, operations.FileActionFindRequest{
        Path: "molestiae",
        PreviewSize: sdk.String("magnam"),
        WithPreviews: sdk.Bool(false),
        WithPriorityColor: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileEntity != nil {
        // handle response
    }
}
```

## FileActionMove

Move file/folder

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
    res, err := s.FileActions.FileActionMove(ctx, operations.FileActionMoveRequest{
        RequestBody: operations.FileActionMoveRequestBody{
            Destination: "odio",
        },
        Path: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileActionEntity != nil {
        // handle response
    }
}
```
