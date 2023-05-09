# Mailboxes

## Overview

Manage your mailboxes.

### Available Operations

* [ChangeMailboxPassword](#changemailboxpassword) - Change password for mailbox
* [ConfigureMailboxAutoForward](#configuremailboxautoforward) - Configure auto-forward for mailbox
* [ConfigureMailboxAutoReply](#configuremailboxautoreply) - Configure auto-reply for mailbox
* [CreateMailbox](#createmailbox) - Create a new mailbox.
* [DeleteMailbox](#deletemailbox) - Delete a mailbox
* [GetMailbox](#getmailbox) - Get a specific mailbox
* [GetMailboxes](#getmailboxes) - Gets your mailboxes.

## ChangeMailboxPassword

Change password for mailbox

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
    res, err := s.Mailboxes.ChangeMailboxPassword(ctx, operations.ChangeMailboxPasswordRequest{
        UpdateMailboxPasswordRequest: &shared.UpdateMailboxPasswordRequest{
            Password: sdk.String("suscipit"),
        },
        MailboxNamePathParameter: "deserunt",
        MailboxNameQueryParameter: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfigureMailboxAutoForward

Configure auto-forward for mailbox

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
    res, err := s.Mailboxes.ConfigureMailboxAutoForward(ctx, operations.ConfigureMailboxAutoForwardRequest{
        AutoForward: &shared.AutoForward{
            CopyToMyself: sdk.Bool(false),
            EmailAddresses: []string{
                "repellendus",
                "totam",
            },
            Enabled: sdk.Bool(false),
        },
        MailboxNamePathParameter: "similique",
        MailboxNameQueryParameter: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfigureMailboxAutoReply

Configure auto-reply for mailbox

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
    res, err := s.Mailboxes.ConfigureMailboxAutoReply(ctx, operations.ConfigureMailboxAutoReplyRequest{
        AutoReply: &shared.AutoReply{
            Enabled: sdk.Bool(false),
            Message: sdk.String("at"),
            Subject: sdk.String("quaerat"),
        },
        MailboxNamePathParameter: "tempora",
        MailboxNameQueryParameter: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateMailbox

Create a new mailbox.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Mailboxes.CreateMailbox(ctx, shared.CreateMailboxRequest{
        AccountID: sdk.Int(798047),
        EmailAddress: sdk.String("officiis"),
        Password: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMailbox

Delete a mailbox

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
    res, err := s.Mailboxes.DeleteMailbox(ctx, operations.DeleteMailboxRequest{
        MailboxNamePathParameter: "dolorum",
        MailboxNameQueryParameter: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMailbox

Get a specific mailbox

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
    res, err := s.Mailboxes.GetMailbox(ctx, operations.GetMailboxRequest{
        MailboxNamePathParameter: "esse",
        MailboxNameQueryParameter: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MailboxDetail != nil {
        // handle response
    }
}
```

## GetMailboxes

Currently only supports getting the mailboxes filtered by domain name.

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
    res, err := s.Mailboxes.GetMailboxes(ctx, operations.GetMailboxesRequest{
        DomainName: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Mailboxes != nil {
        // handle response
    }
}
```
