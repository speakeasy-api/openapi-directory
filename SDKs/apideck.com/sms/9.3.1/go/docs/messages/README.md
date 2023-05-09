# Messages

### Available Operations

* [MessagesAdd](#messagesadd) - Create Message
* [MessagesAll](#messagesall) - List Messages
* [MessagesDelete](#messagesdelete) - Delete Message
* [MessagesOne](#messagesone) - Get Message
* [MessagesUpdate](#messagesupdate) - Update Message

## MessagesAdd

Create Message

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
    res, err := s.Messages.MessagesAdd(ctx, operations.MessagesAddRequest{
        MessageInput: shared.MessageInput{
            Body: "Hi! How are you doing?",
            From: "+15017122661",
            MessagingServiceID: sdk.String("123456"),
            Reference: sdk.String("CUST001"),
            ScheduledAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
            Subject: sdk.String("Picture"),
            To: "+15017122662",
            Type: shared.MessageMessageTypeEnumSms.ToPointer(),
            WebhookURL: sdk.String("https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms"),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "quibusdam",
        XApideckConsumerID: "unde",
        XApideckServiceID: sdk.String("nulla"),
    }, operations.MessagesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMessageResponse != nil {
        // handle response
    }
}
```

## MessagesAll

List Messages

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
    res, err := s.Messages.MessagesAll(ctx, operations.MessagesAllRequest{
        Cursor: sdk.String("corrupti"),
        Fields: sdk.String("illum"),
        Limit: sdk.Int64(423655),
        Raw: sdk.Bool(false),
        XApideckAppID: "error",
        XApideckConsumerID: "deserunt",
        XApideckServiceID: sdk.String("suscipit"),
    }, operations.MessagesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMessagesResponse != nil {
        // handle response
    }
}
```

## MessagesDelete

Delete Message

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
    res, err := s.Messages.MessagesDelete(ctx, operations.MessagesDeleteRequest{
        ID: "74e0f467-cc87-496e-9151-a05dfc2ddf7c",
        Raw: sdk.Bool(false),
        XApideckAppID: "quod",
        XApideckConsumerID: "esse",
        XApideckServiceID: sdk.String("totam"),
    }, operations.MessagesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMessageResponse != nil {
        // handle response
    }
}
```

## MessagesOne

Get Message

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
    res, err := s.Messages.MessagesOne(ctx, operations.MessagesOneRequest{
        Fields: sdk.String("porro"),
        ID: "a1ba928f-c816-4742-8b73-9205929396fe",
        Raw: sdk.Bool(false),
        XApideckAppID: "fuga",
        XApideckConsumerID: "in",
        XApideckServiceID: sdk.String("corporis"),
    }, operations.MessagesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMessageResponse != nil {
        // handle response
    }
}
```

## MessagesUpdate

Update Message

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
    res, err := s.Messages.MessagesUpdate(ctx, operations.MessagesUpdateRequest{
        MessageInput: shared.MessageInput{
            Body: "Hi! How are you doing?",
            From: "+15017122661",
            MessagingServiceID: sdk.String("123456"),
            Reference: sdk.String("CUST001"),
            ScheduledAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
            Subject: sdk.String("Picture"),
            To: "+15017122662",
            Type: shared.MessageMessageTypeEnumSms.ToPointer(),
            WebhookURL: sdk.String("https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms"),
        },
        ID: "96eb10fa-aa23-452c-9955-907aff1a3a2f",
        Raw: sdk.Bool(false),
        XApideckAppID: "mollitia",
        XApideckConsumerID: "occaecati",
        XApideckServiceID: sdk.String("numquam"),
    }, operations.MessagesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMessageResponse != nil {
        // handle response
    }
}
```
