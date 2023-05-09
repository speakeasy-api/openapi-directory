# MessageComments

## Overview

Operations about message_comments

### Available Operations

* [DeleteMessageCommentsID](#deletemessagecommentsid) - Delete Message Comment
* [GetMessageComments](#getmessagecomments) - List Message Comments
* [GetMessageCommentsID](#getmessagecommentsid) - Show Message Comment
* [PatchMessageCommentsID](#patchmessagecommentsid) - Update Message Comment
* [PostMessageComments](#postmessagecomments) - Create Message Comment

## DeleteMessageCommentsID

Delete Message Comment

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
    res, err := s.MessageComments.DeleteMessageCommentsID(ctx, operations.DeleteMessageCommentsIDRequest{
        ID: 168576,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMessageComments

List Message Comments

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
    res, err := s.MessageComments.GetMessageComments(ctx, operations.GetMessageCommentsRequest{
        Cursor: sdk.String("aperiam"),
        MessageID: 901483,
        PerPage: sdk.Int(253642),
        UserID: sdk.Int(329935),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageCommentEntities != nil {
        // handle response
    }
}
```

## GetMessageCommentsID

Show Message Comment

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
    res, err := s.MessageComments.GetMessageCommentsID(ctx, operations.GetMessageCommentsIDRequest{
        ID: 446135,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageCommentEntity != nil {
        // handle response
    }
}
```

## PatchMessageCommentsID

Update Message Comment

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
    res, err := s.MessageComments.PatchMessageCommentsID(ctx, operations.PatchMessageCommentsIDRequest{
        RequestBody: operations.PatchMessageCommentsIDRequestBody{
            Body: "officiis",
        },
        ID: 104627,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageCommentEntity != nil {
        // handle response
    }
}
```

## PostMessageComments

Create Message Comment

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
    res, err := s.MessageComments.PostMessageComments(ctx, operations.PostMessageCommentsRequestBody{
        Body: "laudantium",
        UserID: sdk.Int(348476),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageCommentEntity != nil {
        // handle response
    }
}
```
