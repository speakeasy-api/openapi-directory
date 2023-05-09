# Discord

### Available Operations

* [DiscordGetDiscordGet](#discordgetdiscordget) - Discord Get
* [DiscordPostDiscordPost](#discordpostdiscordpost) - Discord Post

## DiscordGetDiscordGet

Discord Get

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
    res, err := s.Discord.DiscordGetDiscordGet(ctx, operations.DiscordGetDiscordGetRequest{
        Authorization: sdk.String("corrupti"),
        Base64Message: sdk.String("illum"),
        Channel: "vel",
        Message: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscordGetDiscordGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## DiscordPostDiscordPost

Discord Post

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
    res, err := s.Discord.DiscordPostDiscordPost(ctx, operations.DiscordPostDiscordPostRequest{
        DiscordMessageRequest: shared.DiscordMessageRequest{
            Base64Message: sdk.String("deserunt"),
            Channel: "suscipit",
            Message: sdk.String("iure"),
        },
        Authorization: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscordPostDiscordPost200ApplicationJSONAny != nil {
        // handle response
    }
}
```
