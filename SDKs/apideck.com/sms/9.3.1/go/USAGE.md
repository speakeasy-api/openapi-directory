<!-- Start SDK Example Usage -->
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
        XApideckAppID: "corrupti",
        XApideckConsumerID: "provident",
        XApideckServiceID: sdk.String("distinctio"),
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
<!-- End SDK Example Usage -->