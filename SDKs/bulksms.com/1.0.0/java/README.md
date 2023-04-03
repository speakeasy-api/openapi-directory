# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PostRmmPreSignAttachmentSecurity;
import org.openapis.openapi.models.operations.PostRmmPreSignAttachmentResponse;
import org.openapis.openapi.models.shared.PreSignRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PreSignRequest req = new PreSignRequest() {{
                fileExtension = "pdf";
                mediaType = "application/pdf";
            }}            

            PostRmmPreSignAttachmentResponse res = sdk.attachments.postRmmPreSignAttachment(req, new PostRmmPreSignAttachmentSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.preSignInfo.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### attachments

* `postRmmPreSignAttachment` - Upload an attachment via a signed URL

### blockedNumbers

* `getBlockedNumbers` - List blocked numbers
* `postBlockedNumbers` - Create a blocked number

### credits

* `postCreditTransfer` - Transfer credits to another account

### message

* `getMessages` - Retrieve Messages
* `getMessagesSend` - Send message by simple GET or POST
* `getMessagesId` - Show Message
* `getMessagesIdRelatedReceivedMessages` - List Related Messages
* `postMessages` - Send Messages

### profile

* `getProfile` - Get profile

### webhooks

* `deleteWebhooksId` - Delete a webhook
* `getWebhooks` - List webhooks
* `getWebhooksId` - Read a webhook
* `postWebhooks` - Create a webhook
* `postWebhooksId` - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
