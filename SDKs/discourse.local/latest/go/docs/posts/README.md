# Posts

### Available Operations

* [CreateTopicPostPM](#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [DeletePost](#deletepost) - delete a single post
* [GetPost](#getpost) - Retrieve a single post
* [ListPosts](#listposts) - List latest posts across topics
* [LockPost](#lockpost) - Lock a post from being edited
* [PerformPostAction](#performpostaction) - Like a post and other actions
* [PostReplies](#postreplies) - List replies to a post
* [UpdatePost](#updatepost) - Update a single post

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
    res, err := s.Posts.CreateTopicPostPM(ctx, operations.CreateTopicPostPMRequestBody{
        Archetype: sdk.String("accusantium"),
        Category: sdk.Int64(653201),
        CreatedAt: sdk.String("reiciendis"),
        EmbedURL: sdk.String("mollitia"),
        ExternalID: sdk.String("ad"),
        Raw: "eum",
        TargetRecipients: sdk.String("dolor"),
        TargetUsernames: sdk.String("necessitatibus"),
        Title: sdk.String("Mr."),
        TopicID: sdk.Int64(367562),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTopicPostPM200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeletePost

delete a single post

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
    res, err := s.Posts.DeletePost(ctx, operations.DeletePostRequest{
        RequestBody: &operations.DeletePostRequestBody{
            ForceDestroy: sdk.Bool(false),
        },
        ID: 97260,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPost

This endpoint can be used to get the number of likes on a post using the
`actions_summary` property in the response. `actions_summary` responses
with the id of `2` signify a `like`. If there are no `actions_summary`
items with the id of `2`, that means there are 0 likes. Other ids likely
refer to various different flag types.


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
    res, err := s.Posts.GetPost(ctx, operations.GetPostRequest{
        ID: "6fe4c8b7-11e5-4b7f-92ed-028921cddc69",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListPosts

List latest posts across topics

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
    res, err := s.Posts.ListPosts(ctx, operations.ListPostsRequest{
        APIKey: "odit",
        APIUsername: "ea",
        Before: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPosts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## LockPost

Lock a post from being edited

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
    res, err := s.Posts.LockPost(ctx, operations.LockPostRequest{
        APIKey: "ab",
        APIUsername: "maiores",
        RequestBody: &operations.LockPostRequestBody{
            Locked: "quidem",
        },
        ID: "576b0d5f-0d30-4c5f-bb25-87053202c73d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LockPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PerformPostAction

Like a post and other actions

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
    res, err := s.Posts.PerformPostAction(ctx, operations.PerformPostActionRequest{
        APIKey: "nostrum",
        APIUsername: "hic",
        RequestBody: &operations.PerformPostActionRequestBody{
            FlagTopic: sdk.Bool(false),
            ID: 928082,
            PostActionTypeID: 608253,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PerformPostAction200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostReplies

List replies to a post

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
    res, err := s.Posts.PostReplies(ctx, operations.PostRepliesRequest{
        ID: "b90c2890-9b3f-4e49-a8d9-cbf48633323f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostReplies200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdatePost

Update a single post

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
    res, err := s.Posts.UpdatePost(ctx, operations.UpdatePostRequest{
        RequestBody: &operations.UpdatePostRequestBody{
            Post: &operations.UpdatePostRequestBodyPost{
                EditReason: sdk.String("excepturi"),
                Raw: "cum",
            },
        },
        ID: "77f3a410-0674-4ebf-a928-0d1ba77a89eb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePost200ApplicationJSONObject != nil {
        // handle response
    }
}
```
