# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/bulksms.com/1.0.0/go
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
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Attachments.PostRmmPreSignAttachment(ctx, shared.PreSignRequest{
        FileExtension: sdk.String("pdf"),
        MediaType: sdk.String("application/pdf"),
    }, operations.PostRmmPreSignAttachmentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreSignInfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Attachments](docs/attachments/README.md)

* [PostRmmPreSignAttachment](docs/attachments/README.md#postrmmpresignattachment) - Upload an attachment via a signed URL

### [BlockedNumbers](docs/blockednumbers/README.md)

* [GetBlockedNumbers](docs/blockednumbers/README.md#getblockednumbers) - List blocked numbers
* [PostBlockedNumbers](docs/blockednumbers/README.md#postblockednumbers) - Create a blocked number

### [Credits](docs/credits/README.md)

* [PostCreditTransfer](docs/credits/README.md#postcredittransfer) - Transfer credits to another account

### [Message](docs/message/README.md)

* [GetMessages](docs/message/README.md#getmessages) - Retrieve Messages
* [GetMessagesSend](docs/message/README.md#getmessagessend) - Send message by simple GET or POST
* [GetMessagesID](docs/message/README.md#getmessagesid) - Show Message
* [GetMessagesIDRelatedReceivedMessages](docs/message/README.md#getmessagesidrelatedreceivedmessages) - List Related Messages
* [PostMessages](docs/message/README.md#postmessages) - Send Messages

### [Profile](docs/profile/README.md)

* [GetProfile](docs/profile/README.md#getprofile) - Get profile

### [Webhooks](docs/webhooks/README.md)

* [DeleteWebhooksID](docs/webhooks/README.md#deletewebhooksid) - Delete a webhook
* [GetWebhooks](docs/webhooks/README.md#getwebhooks) - List webhooks
* [GetWebhooksID](docs/webhooks/README.md#getwebhooksid) - Read a webhook
* [PostWebhooks](docs/webhooks/README.md#postwebhooks) - Create a webhook
* [PostWebhooksID](docs/webhooks/README.md#postwebhooksid) - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
