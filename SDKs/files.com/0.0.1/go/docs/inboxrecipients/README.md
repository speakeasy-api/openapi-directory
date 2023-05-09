# InboxRecipients

## Overview

Operations about inbox_recipients

### Available Operations

* [GetInboxRecipients](#getinboxrecipients) - List Inbox Recipients
* [PostInboxRecipients](#postinboxrecipients) - Create Inbox Recipient

## GetInboxRecipients

List Inbox Recipients

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
    res, err := s.InboxRecipients.GetInboxRecipients(ctx, operations.GetInboxRecipientsRequest{
        Cursor: sdk.String("ullam"),
        Filter: map[string]interface{}{
            "cum": "blanditiis",
        },
        InboxID: 555361,
        PerPage: sdk.Int(942584),
        SortBy: map[string]interface{}{
            "culpa": "corrupti",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InboxRecipientEntities != nil {
        // handle response
    }
}
```

## PostInboxRecipients

Create Inbox Recipient

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
    res, err := s.InboxRecipients.PostInboxRecipients(ctx, operations.PostInboxRecipientsRequestBody{
        Company: sdk.String("Acme Ltd"),
        InboxID: 867290,
        Name: sdk.String("John Smith"),
        Note: sdk.String("Just a note."),
        Recipient: "johndoe@gmail.com",
        ShareAfterCreate: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InboxRecipientEntity != nil {
        // handle response
    }
}
```
