# Files

## Overview

Operations about files

### Available Operations

* [DeleteFilesPath](#deletefilespath) - Delete file/folder
* [FileDownload](#filedownload) - Download file
* [PatchFilesPath](#patchfilespath) - Update file/folder metadata
* [PostFilesPath](#postfilespath) - Upload file

## DeleteFilesPath

Delete file/folder

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
    res, err := s.Files.DeleteFilesPath(ctx, operations.DeleteFilesPathRequest{
        Path: "quisquam",
        Recursive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FileDownload

Download file

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
    res, err := s.Files.FileDownload(ctx, operations.FileDownloadRequest{
        Action: sdk.String("veritatis"),
        Path: "ipsa",
        PreviewSize: sdk.String("id"),
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

## PatchFilesPath

Update file/folder metadata

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
    res, err := s.Files.PatchFilesPath(ctx, operations.PatchFilesPathRequest{
        RequestBody: &operations.PatchFilesPathRequestBody{
            PriorityColor: sdk.String("red"),
            ProvidedMtime: types.MustTimeFromString("2022-08-03T04:27:44.236Z"),
        },
        Path: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileEntity != nil {
        // handle response
    }
}
```

## PostFilesPath

Upload file

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
    res, err := s.Files.PostFilesPath(ctx, operations.PostFilesPathRequest{
        RequestBody: &operations.PostFilesPathRequestBody{
            Action: sdk.String("illum"),
            EtagsEtag: []string{
                "fuga",
                "eius",
                "eos",
                "voluptas",
            },
            EtagsPart: []int{
                587600,
            },
            Length: sdk.Int(9688),
            MkdirParents: sdk.Bool(false),
            Part: sdk.Int(272822),
            Parts: sdk.Int(892050),
            ProvidedMtime: types.MustTimeFromString("2022-11-13T06:50:40.250Z"),
            Ref: sdk.String("sequi"),
            Restart: sdk.Int(779192),
            Size: sdk.Int(459856),
            Structure: sdk.String("recusandae"),
            WithRename: sdk.Bool(false),
        },
        Path: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileEntity != nil {
        // handle response
    }
}
```
