# Slack

### Available Operations

* [SlackGetSlackGet](#slackgetslackget) - Slack Get
* [SlackPostSlackPost](#slackpostslackpost) - Slack Post

## SlackGetSlackGet

Slack Get

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
    res, err := s.Slack.SlackGetSlackGet(ctx, operations.SlackGetSlackGetRequest{
        Authorization: sdk.String("debitis"),
        Base64Message: sdk.String("ipsa"),
        Channel: "delectus",
        Message: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SlackGetSlackGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## SlackPostSlackPost

Slack Post

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Slack.SlackPostSlackPost(ctx, operations.SlackPostSlackPostRequest{
        SlackMessageRequest: shared.SlackMessageRequest{
            Base64Message: sdk.String("suscipit"),
            Channel: "molestiae",
            Message: sdk.String("minus"),
        },
        Authorization: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SlackPostSlackPost200ApplicationJSONAny != nil {
        // handle response
    }
}
```
