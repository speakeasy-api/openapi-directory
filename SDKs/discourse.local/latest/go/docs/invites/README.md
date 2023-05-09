# Invites

### Available Operations

* [CreateInvite](#createinvite) - Create an invite
* [InviteToTopic](#invitetotopic) - Invite to topic

## CreateInvite

Create an invite

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
    res, err := s.Invites.CreateInvite(ctx, operations.CreateInviteRequest{
        APIKey: "dolorum",
        APIUsername: "in",
        RequestBody: &operations.CreateInviteRequestBody{
            CustomMessage: sdk.String("in"),
            Email: sdk.String("Wilford29@hotmail.com"),
            ExpiresAt: sdk.String("cumque"),
            GroupID: sdk.Int64(813798),
            GroupNames: sdk.String("ea"),
            MaxRedemptionsAllowed: sdk.Int64(396506),
            SkipEmail: sdk.Bool(false),
            TopicID: sdk.Int64(675439),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateInvite200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## InviteToTopic

Invite to topic

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
    res, err := s.Invites.InviteToTopic(ctx, operations.InviteToTopicRequest{
        APIKey: "accusamus",
        APIUsername: "non",
        RequestBody: &operations.InviteToTopicRequestBody{
            Email: sdk.String("Elyssa_Tillman58@yahoo.com"),
            User: sdk.String("nam"),
        },
        ID: "a88f3a66-9970-474b-a446-9b6e21419598",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InviteToTopic200ApplicationJSONObject != nil {
        // handle response
    }
}
```
