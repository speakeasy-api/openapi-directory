# FileCommentReactions

## Overview

Operations about file_comment_reactions

### Available Operations

* [DeleteFileCommentReactionsID](#deletefilecommentreactionsid) - Delete File Comment Reaction
* [PostFileCommentReactions](#postfilecommentreactions) - Create File Comment Reaction

## DeleteFileCommentReactionsID

Delete File Comment Reaction

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
    res, err := s.FileCommentReactions.DeleteFileCommentReactionsID(ctx, operations.DeleteFileCommentReactionsIDRequest{
        ID: 458515,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostFileCommentReactions

Create File Comment Reaction

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
    res, err := s.FileCommentReactions.PostFileCommentReactions(ctx, operations.PostFileCommentReactionsRequestBody{
        Emoji: "esse",
        FileCommentID: 524593,
        UserID: sdk.Int(683282),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileCommentReactionEntity != nil {
        // handle response
    }
}
```
