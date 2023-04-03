<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.MessagesAddRequest{
        MessageInput: shared.MessageInput{
            Body: "Hi! How are you doing?",
            From: "+15017122661",
            MessagingServiceID: "123456",
            Reference: "CUST001",
            ScheduledAt: "2020-09-30T07:43:32.000Z",
            Subject: "Picture",
            To: "+15017122662",
            Type: "sms",
            WebhookURL: "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms",
        },
        Raw: false,
        XApideckAppID: "corrupti",
        XApideckConsumerID: "provident",
        XApideckServiceID: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Messages.MessagesAdd(ctx, req, operations.MessagesAddSecurity{
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
<!-- End SDK Example Usage -->