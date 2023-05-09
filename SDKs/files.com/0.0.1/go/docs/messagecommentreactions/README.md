# MessageCommentReactions

## Overview

Operations about message_comment_reactions

### Available Operations

* [DeleteMessageCommentReactionsID](#deletemessagecommentreactionsid) - Delete Message Comment Reaction
* [GetMessageCommentReactions](#getmessagecommentreactions) - List Message Comment Reactions
* [GetMessageCommentReactionsID](#getmessagecommentreactionsid) - Show Message Comment Reaction
* [PostMessageCommentReactions](#postmessagecommentreactions) - Create Message Comment Reaction

## DeleteMessageCommentReactionsID

Delete Message Comment Reaction

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
    res, err := s.MessageCommentReactions.DeleteMessageCommentReactionsID(ctx, operations.DeleteMessageCommentReactionsIDRequest{
        ID: 26522,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMessageCommentReactions

List Message Comment Reactions

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
    res, err := s.MessageCommentReactions.GetMessageCommentReactions(ctx, operations.GetMessageCommentReactionsRequest{
        Cursor: sdk.String("nobis"),
        MessageCommentID: 625637,
        PerPage: sdk.Int(333507),
        UserID: sdk.Int(329543),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageCommentReactionEntities != nil {
        // handle response
    }
}
```

## GetMessageCommentReactionsID

Show Message Comment Reaction

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
    res, err := s.MessageCommentReactions.GetMessageCommentReactionsID(ctx, operations.GetMessageCommentReactionsIDRequest{
        ID: 924159,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageCommentReactionEntity != nil {
        // handle response
    }
}
```

## PostMessageCommentReactions

Create Message Comment Reaction

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
    res, err := s.MessageCommentReactions.PostMessageCommentReactions(ctx, operations.PostMessageCommentReactionsRequestBody{
        Emoji: "reiciendis",
        UserID: sdk.Int(862319),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageCommentReactionEntity != nil {
        // handle response
    }
}
```
