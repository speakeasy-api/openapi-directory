# MessageReactions

## Overview

Operations about message_reactions

### Available Operations

* [DeleteMessageReactionsID](#deletemessagereactionsid) - Delete Message Reaction
* [GetMessageReactions](#getmessagereactions) - List Message Reactions
* [GetMessageReactionsID](#getmessagereactionsid) - Show Message Reaction
* [PostMessageReactions](#postmessagereactions) - Create Message Reaction

## DeleteMessageReactionsID

Delete Message Reaction

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
    res, err := s.MessageReactions.DeleteMessageReactionsID(ctx, operations.DeleteMessageReactionsIDRequest{
        ID: 510629,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMessageReactions

List Message Reactions

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
    res, err := s.MessageReactions.GetMessageReactions(ctx, operations.GetMessageReactionsRequest{
        Cursor: sdk.String("cum"),
        MessageID: 386827,
        PerPage: sdk.Int(680515),
        UserID: sdk.Int(530089),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageReactionEntities != nil {
        // handle response
    }
}
```

## GetMessageReactionsID

Show Message Reaction

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
    res, err := s.MessageReactions.GetMessageReactionsID(ctx, operations.GetMessageReactionsIDRequest{
        ID: 622385,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageReactionEntity != nil {
        // handle response
    }
}
```

## PostMessageReactions

Create Message Reaction

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
    res, err := s.MessageReactions.PostMessageReactions(ctx, operations.PostMessageReactionsRequestBody{
        Emoji: "hic",
        UserID: sdk.Int(710529),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageReactionEntity != nil {
        // handle response
    }
}
```
