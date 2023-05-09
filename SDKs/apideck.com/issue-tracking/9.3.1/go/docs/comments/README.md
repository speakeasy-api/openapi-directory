# Comments

### Available Operations

* [CollectionTicketCommentsAdd](#collectionticketcommentsadd) - Create Comment
* [CollectionTicketCommentsAll](#collectionticketcommentsall) - List Comments
* [CollectionTicketCommentsDelete](#collectionticketcommentsdelete) - Delete Comment
* [CollectionTicketCommentsOne](#collectionticketcommentsone) - Get Comment
* [CollectionTicketCommentsUpdate](#collectionticketcommentsupdate) - Update Comment

## CollectionTicketCommentsAdd

Create Comment

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
    res, err := s.Comments.CollectionTicketCommentsAdd(ctx, operations.CollectionTicketCommentsAddRequest{
        CollectionTicketCommentInput: shared.CollectionTicketCommentInput{
            Body: sdk.String("What internet provider do you use?"),
        },
        CollectionID: "apideck-io",
        Raw: sdk.Bool(false),
        TicketID: "suscipit",
        XApideckAppID: "molestiae",
        XApideckConsumerID: "minus",
        XApideckServiceID: sdk.String("placeat"),
    }, operations.CollectionTicketCommentsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCommentResponse != nil {
        // handle response
    }
}
```

## CollectionTicketCommentsAll

List Comments

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
    res, err := s.Comments.CollectionTicketCommentsAll(ctx, operations.CollectionTicketCommentsAllRequest{
        CollectionID: "apideck-io",
        Cursor: sdk.String("voluptatum"),
        Fields: sdk.String("iusto"),
        Limit: sdk.Int64(568045),
        Raw: sdk.Bool(false),
        Sort: &shared.CommentsSort{
            By: shared.CommentsSortByEnumCreatedAt.ToPointer(),
            Direction: shared.SortDirectionEnumAsc.ToPointer(),
        },
        TicketID: "recusandae",
        XApideckAppID: "temporibus",
        XApideckConsumerID: "ab",
        XApideckServiceID: sdk.String("quis"),
    }, operations.CollectionTicketCommentsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCommentsResponse != nil {
        // handle response
    }
}
```

## CollectionTicketCommentsDelete

Delete Comment

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
    res, err := s.Comments.CollectionTicketCommentsDelete(ctx, operations.CollectionTicketCommentsDeleteRequest{
        CollectionID: "apideck-io",
        ID: "1a05dfc2-ddf7-4cc7-8ca1-ba928fc81674",
        Raw: sdk.Bool(false),
        TicketID: "qui",
        XApideckAppID: "impedit",
        XApideckConsumerID: "cum",
        XApideckServiceID: sdk.String("esse"),
    }, operations.CollectionTicketCommentsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCommentResponse != nil {
        // handle response
    }
}
```

## CollectionTicketCommentsOne

Get Comment

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
    res, err := s.Comments.CollectionTicketCommentsOne(ctx, operations.CollectionTicketCommentsOneRequest{
        CollectionID: "apideck-io",
        Cursor: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        ID: "20592939-6fea-4759-aeb1-0faaa2352c59",
        Limit: sdk.Int64(363711),
        Raw: sdk.Bool(false),
        TicketID: "minima",
        XApideckAppID: "excepturi",
        XApideckConsumerID: "accusantium",
        XApideckServiceID: sdk.String("iure"),
    }, operations.CollectionTicketCommentsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCommentResponse != nil {
        // handle response
    }
}
```

## CollectionTicketCommentsUpdate

Update Comment

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
    res, err := s.Comments.CollectionTicketCommentsUpdate(ctx, operations.CollectionTicketCommentsUpdateRequest{
        CollectionTicketCommentInput: shared.CollectionTicketCommentInput{
            Body: sdk.String("What internet provider do you use?"),
        },
        CollectionID: "apideck-io",
        ID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
        Raw: sdk.Bool(false),
        TicketID: "quasi",
        XApideckAppID: "error",
        XApideckConsumerID: "temporibus",
        XApideckServiceID: sdk.String("laborum"),
    }, operations.CollectionTicketCommentsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCommentResponse != nil {
        // handle response
    }
}
```
