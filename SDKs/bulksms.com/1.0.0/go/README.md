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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.PreSignRequest{
        FileExtension: "pdf",
        MediaType: "application/pdf",
    }

    ctx := context.Background()
    res, err := s.Attachments.PostRmmPreSignAttachment(ctx, req, operations.PostRmmPreSignAttachmentSecurity{
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


### Attachments

* `PostRmmPreSignAttachment` - Upload an attachment via a signed URL

### BlockedNumbers

* `GetBlockedNumbers` - List blocked numbers
* `PostBlockedNumbers` - Create a blocked number

### Credits

* `PostCreditTransfer` - Transfer credits to another account

### Message

* `GetMessages` - Retrieve Messages
* `GetMessagesSend` - Send message by simple GET or POST
* `GetMessagesID` - Show Message
* `GetMessagesIDRelatedReceivedMessages` - List Related Messages
* `PostMessages` - Send Messages

### Profile

* `GetProfile` - Get profile

### Webhooks

* `DeleteWebhooksID` - Delete a webhook
* `GetWebhooks` - List webhooks
* `GetWebhooksID` - Read a webhook
* `PostWebhooks` - Create a webhook
* `PostWebhooksID` - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
