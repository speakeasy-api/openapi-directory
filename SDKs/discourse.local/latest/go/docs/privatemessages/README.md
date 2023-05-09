# PrivateMessages

### Available Operations

* [CreateTopicPostPM](#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [GetUserSentPrivateMessages](#getusersentprivatemessages) - Get a list of private messages sent for a user
* [ListUserPrivateMessages](#listuserprivatemessages) - Get a list of private messages for a user

## CreateTopicPostPM

Creates a new topic, a new post, or a private message

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
    res, err := s.PrivateMessages.CreateTopicPostPM(ctx, operations.CreateTopicPostPMRequestBody{
        Archetype: sdk.String("asperiores"),
        Category: sdk.Int64(469497),
        CreatedAt: sdk.String("ipsum"),
        EmbedURL: sdk.String("voluptate"),
        ExternalID: sdk.String("id"),
        Raw: "saepe",
        TargetRecipients: sdk.String("eius"),
        TargetUsernames: sdk.String("aspernatur"),
        Title: sdk.String("Mr."),
        TopicID: sdk.Int64(229219),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTopicPostPM200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUserSentPrivateMessages

Get a list of private messages sent for a user

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
    res, err := s.PrivateMessages.GetUserSentPrivateMessages(ctx, operations.GetUserSentPrivateMessagesRequest{
        Username: "Nils90",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserSentPrivateMessages200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListUserPrivateMessages

Get a list of private messages for a user

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
    res, err := s.PrivateMessages.ListUserPrivateMessages(ctx, operations.ListUserPrivateMessagesRequest{
        Username: "Geraldine.Oberbrunner",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserPrivateMessages200ApplicationJSONObject != nil {
        // handle response
    }
}
```
