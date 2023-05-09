# Messages

## Overview

Operations about messages

### Available Operations

* [DeleteMessagesID](#deletemessagesid) - Delete Message
* [GetMessages](#getmessages) - List Messages
* [GetMessagesID](#getmessagesid) - Show Message
* [PatchMessagesID](#patchmessagesid) - Update Message
* [PostMessages](#postmessages) - Create Message

## DeleteMessagesID

Delete Message

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
    res, err := s.Messages.DeleteMessagesID(ctx, operations.DeleteMessagesIDRequest{
        ID: 892863,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMessages

List Messages

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
    res, err := s.Messages.GetMessages(ctx, operations.GetMessagesRequest{
        Cursor: sdk.String("neque"),
        PerPage: sdk.Int(677115),
        ProjectID: 341698,
        UserID: sdk.Int(639028),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageEntities != nil {
        // handle response
    }
}
```

## GetMessagesID

Show Message

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
    res, err := s.Messages.GetMessagesID(ctx, operations.GetMessagesIDRequest{
        ID: 676243,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageEntity != nil {
        // handle response
    }
}
```

## PatchMessagesID

Update Message

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
    res, err := s.Messages.PatchMessagesID(ctx, operations.PatchMessagesIDRequest{
        RequestBody: operations.PatchMessagesIDRequestBody{
            Body: "We should upgrade our Files.com account!",
            ProjectID: 548361,
            Subject: "Files.com Account Upgrade",
        },
        ID: 879235,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageEntity != nil {
        // handle response
    }
}
```

## PostMessages

Create Message

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
    res, err := s.Messages.PostMessages(ctx, operations.PostMessagesRequestBody{
        Body: "We should upgrade our Files.com account!",
        ProjectID: 272683,
        Subject: "Files.com Account Upgrade",
        UserID: sdk.Int(543678),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageEntity != nil {
        // handle response
    }
}
```
