# Tickets

### Available Operations

* [CollectionTicketsAdd](#collectionticketsadd) - Create Ticket
* [CollectionTicketsAll](#collectionticketsall) - List Tickets
* [CollectionTicketsDelete](#collectionticketsdelete) - Delete Ticket
* [CollectionTicketsOne](#collectionticketsone) - Get Ticket
* [CollectionTicketsUpdate](#collectionticketsupdate) - Update Ticket

## CollectionTicketsAdd

Create Ticket

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tickets.CollectionTicketsAdd(ctx, operations.CollectionTicketsAddRequest{
        TicketInput: shared.TicketInput{
            Assignees: []shared.AssigneeInput{
                shared.AssigneeInput{
                    ID: "12345",
                },
                shared.AssigneeInput{
                    ID: "12345",
                },
                shared.AssigneeInput{
                    ID: "12345",
                },
                shared.AssigneeInput{
                    ID: "12345",
                },
            },
            Description: sdk.String("I am facing issues with my internet connection"),
            DueDate: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
            ParentID: sdk.String("12345"),
            Priority: shared.TicketPriorityEnumHigh.ToPointer(),
            Status: sdk.String("open"),
            Subject: sdk.String("Technical Support Request"),
            Tags: []shared.CollectionTagInput{
                shared.CollectionTagInput{
                    ID: "12345",
                },
            },
            Type: sdk.String("Technical"),
        },
        CollectionID: "apideck-io",
        Raw: sdk.Bool(false),
        XApideckAppID: "omnis",
        XApideckConsumerID: "voluptate",
        XApideckServiceID: sdk.String("cum"),
    }, operations.CollectionTicketsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTicketResponse != nil {
        // handle response
    }
}
```

## CollectionTicketsAll

List Tickets

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tickets.CollectionTicketsAll(ctx, operations.CollectionTicketsAllRequest{
        CollectionID: "apideck-io",
        Cursor: sdk.String("perferendis"),
        Fields: sdk.String("doloremque"),
        Filter: &shared.IssuesFilter{
            AssigneeID: sdk.String("2332bd9c2eaaa5dcfa14721c"),
            Since: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
            Status: []string{
                "ut",
                "maiores",
            },
        },
        Limit: sdk.Int64(120196),
        Raw: sdk.Bool(false),
        Sort: &shared.TicketsSort{
            By: shared.TicketsSortByEnumCreatedAt.ToPointer(),
            Direction: shared.SortDirectionEnumAsc.ToPointer(),
        },
        XApideckAppID: "dolore",
        XApideckConsumerID: "iusto",
        XApideckServiceID: sdk.String("dicta"),
    }, operations.CollectionTicketsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTicketsResponse != nil {
        // handle response
    }
}
```

## CollectionTicketsDelete

Delete Ticket

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
    res, err := s.Tickets.CollectionTicketsDelete(ctx, operations.CollectionTicketsDeleteRequest{
        CollectionID: "apideck-io",
        Raw: sdk.Bool(false),
        TicketID: "harum",
        XApideckAppID: "enim",
        XApideckConsumerID: "accusamus",
        XApideckServiceID: sdk.String("commodi"),
    }, operations.CollectionTicketsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTicketResponse != nil {
        // handle response
    }
}
```

## CollectionTicketsOne

Get Ticket

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
    res, err := s.Tickets.CollectionTicketsOne(ctx, operations.CollectionTicketsOneRequest{
        CollectionID: "apideck-io",
        Fields: sdk.String("repudiandae"),
        Raw: sdk.Bool(false),
        TicketID: "quae",
        XApideckAppID: "ipsum",
        XApideckConsumerID: "quidem",
        XApideckServiceID: sdk.String("molestias"),
    }, operations.CollectionTicketsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTicketResponse != nil {
        // handle response
    }
}
```

## CollectionTicketsUpdate

Update Ticket

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tickets.CollectionTicketsUpdate(ctx, operations.CollectionTicketsUpdateRequest{
        TicketInput: shared.TicketInput{
            Assignees: []shared.AssigneeInput{
                shared.AssigneeInput{
                    ID: "12345",
                },
                shared.AssigneeInput{
                    ID: "12345",
                },
                shared.AssigneeInput{
                    ID: "12345",
                },
            },
            Description: sdk.String("I am facing issues with my internet connection"),
            DueDate: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
            ParentID: sdk.String("12345"),
            Priority: shared.TicketPriorityEnumHigh.ToPointer(),
            Status: sdk.String("open"),
            Subject: sdk.String("Technical Support Request"),
            Tags: []shared.CollectionTagInput{
                shared.CollectionTagInput{
                    ID: "12345",
                },
                shared.CollectionTagInput{
                    ID: "12345",
                },
                shared.CollectionTagInput{
                    ID: "12345",
                },
                shared.CollectionTagInput{
                    ID: "12345",
                },
            },
            Type: sdk.String("Technical"),
        },
        CollectionID: "apideck-io",
        Raw: sdk.Bool(false),
        TicketID: "modi",
        XApideckAppID: "praesentium",
        XApideckConsumerID: "rem",
        XApideckServiceID: sdk.String("voluptates"),
    }, operations.CollectionTicketsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTicketResponse != nil {
        // handle response
    }
}
```
