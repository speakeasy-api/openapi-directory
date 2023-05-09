# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/sms/9.3.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Messages](docs/messages/README.md)

* [MessagesAdd](docs/messages/README.md#messagesadd) - Create Message
* [MessagesAll](docs/messages/README.md#messagesall) - List Messages
* [MessagesDelete](docs/messages/README.md#messagesdelete) - Delete Message
* [MessagesOne](docs/messages/README.md#messagesone) - Get Message
* [MessagesUpdate](docs/messages/README.md#messagesupdate) - Update Message
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
