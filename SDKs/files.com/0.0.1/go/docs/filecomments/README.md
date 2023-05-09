# FileComments

## Overview

Operations about file_comments

### Available Operations

* [DeleteFileCommentsID](#deletefilecommentsid) - Delete File Comment
* [FileCommentListForPath](#filecommentlistforpath) - List File Comments by path
* [PatchFileCommentsID](#patchfilecommentsid) - Update File Comment
* [PostFileComments](#postfilecomments) - Create File Comment

## DeleteFileCommentsID

Delete File Comment

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
    res, err := s.FileComments.DeleteFileCommentsID(ctx, operations.DeleteFileCommentsIDRequest{
        ID: 442015,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FileCommentListForPath

List File Comments by path

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
    res, err := s.FileComments.FileCommentListForPath(ctx, operations.FileCommentListForPathRequest{
        Cursor: sdk.String("quidem"),
        Path: "fugiat",
        PerPage: sdk.Int(283519),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileCommentEntities != nil {
        // handle response
    }
}
```

## PatchFileCommentsID

Update File Comment

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
    res, err := s.FileComments.PatchFileCommentsID(ctx, operations.PatchFileCommentsIDRequest{
        RequestBody: operations.PatchFileCommentsIDRequestBody{
            Body: "eum",
        },
        ID: 379927,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileCommentEntity != nil {
        // handle response
    }
}
```

## PostFileComments

Create File Comment

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
    res, err := s.FileComments.PostFileComments(ctx, operations.PostFileCommentsRequestBody{
        Body: "assumenda",
        Path: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileCommentEntity != nil {
        // handle response
    }
}
```
