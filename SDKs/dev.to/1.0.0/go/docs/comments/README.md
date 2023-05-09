# Comments

### Available Operations

* [GetCommentByID](#getcommentbyid) - Comment by id
* [GetCommentsByArticleID](#getcommentsbyarticleid) - Comments

## GetCommentByID

This endpoint allows the client to retrieve a comment as well as his descendants comments.

  It will return the required comment (the root) with its nested descendants as a thread.

  See the format specification for further details.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Comments.GetCommentByID(ctx, operations.GetCommentByIDRequest{
        ID: 456150,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCommentsByArticleID

This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations.

It will return the all top level comments with their nested comments as threads. See the format specification for further details.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Comments.GetCommentsByArticleID(ctx, operations.GetCommentsByArticleIDRequest{
        AID: sdk.String("ipsum"),
        PID: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comments != nil {
        // handle response
    }
}
```
