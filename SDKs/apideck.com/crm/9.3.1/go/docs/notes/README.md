# Notes

### Available Operations

* [NotesAdd](#notesadd) - Create note
* [NotesAll](#notesall) - List notes
* [NotesDelete](#notesdelete) - Delete note
* [NotesOne](#notesone) - Get note
* [NotesUpdate](#notesupdate) - Update note

## NotesAdd

Create note

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
    res, err := s.Notes.NotesAdd(ctx, operations.NotesAddRequest{
        NoteInput: shared.NoteInput{
            Active: sdk.Bool(true),
            CompanyID: sdk.String("12345"),
            ContactID: sdk.String("12345"),
            Content: sdk.String("Office hours are 9AM-6PM"),
            LeadID: sdk.String("12345"),
            OpportunityID: sdk.String("12345"),
            OwnerID: sdk.String("12345"),
            Title: sdk.String("Meeting Notes"),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "hic",
        XApideckConsumerID: "distinctio",
        XApideckServiceID: sdk.String("quod"),
    }, operations.NotesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNoteResponse != nil {
        // handle response
    }
}
```

## NotesAll

List notes

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
    res, err := s.Notes.NotesAll(ctx, operations.NotesAllRequest{
        Cursor: sdk.String("odio"),
        Fields: sdk.String("similique"),
        Limit: sdk.Int64(708548),
        Raw: sdk.Bool(false),
        XApideckAppID: "vero",
        XApideckConsumerID: "ducimus",
        XApideckServiceID: sdk.String("dolore"),
    }, operations.NotesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotesResponse != nil {
        // handle response
    }
}
```

## NotesDelete

Delete note

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
    res, err := s.Notes.NotesDelete(ctx, operations.NotesDeleteRequest{
        ID: "dd39c0f5-d2cf-4f7c-b0a4-5626d436813f",
        Raw: sdk.Bool(false),
        XApideckAppID: "quasi",
        XApideckConsumerID: "ex",
        XApideckServiceID: sdk.String("nulla"),
    }, operations.NotesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNoteResponse != nil {
        // handle response
    }
}
```

## NotesOne

Get note

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
    res, err := s.Notes.NotesOne(ctx, operations.NotesOneRequest{
        Fields: sdk.String("excepturi"),
        ID: "f5fce6c5-5614-46c3-a250-fb008c42e141",
        Raw: sdk.Bool(false),
        XApideckAppID: "dolorum",
        XApideckConsumerID: "laborum",
        XApideckServiceID: sdk.String("placeat"),
    }, operations.NotesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNoteResponse != nil {
        // handle response
    }
}
```

## NotesUpdate

Update note

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
    res, err := s.Notes.NotesUpdate(ctx, operations.NotesUpdateRequest{
        NoteInput: shared.NoteInput{
            Active: sdk.Bool(true),
            CompanyID: sdk.String("12345"),
            ContactID: sdk.String("12345"),
            Content: sdk.String("Office hours are 9AM-6PM"),
            LeadID: sdk.String("12345"),
            OpportunityID: sdk.String("12345"),
            OwnerID: sdk.String("12345"),
            Title: sdk.String("Meeting Notes"),
        },
        ID: "366c8dd6-b144-4290-b474-778a7bd466d2",
        Raw: sdk.Bool(false),
        XApideckAppID: "praesentium",
        XApideckConsumerID: "quisquam",
        XApideckServiceID: sdk.String("veritatis"),
    }, operations.NotesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNoteResponse != nil {
        // handle response
    }
}
```
