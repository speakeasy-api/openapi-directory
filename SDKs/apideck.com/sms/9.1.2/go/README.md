# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/sms/9.1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Messages

* `MessagesAdd` - Create Message
* `MessagesAll` - List Messages
* `MessagesDelete` - Delete Message
* `MessagesOne` - Get Message
* `MessagesUpdate` - Update Message
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
