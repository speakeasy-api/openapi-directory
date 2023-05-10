# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PreSignRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRmmPreSignAttachmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreSignRequest();
    $request->fileExtension = 'pdf';
    $request->mediaType = 'application/pdf';

    $requestSecurity = new PostRmmPreSignAttachmentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->attachments->postRmmPreSignAttachment($request, $requestSecurity);

    if ($response->preSignInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [attachments](docs/attachments/README.md)

* [postRmmPreSignAttachment](docs/attachments/README.md#postrmmpresignattachment) - Upload an attachment via a signed URL

### [blockedNumbers](docs/blockednumbers/README.md)

* [getBlockedNumbers](docs/blockednumbers/README.md#getblockednumbers) - List blocked numbers
* [postBlockedNumbers](docs/blockednumbers/README.md#postblockednumbers) - Create a blocked number

### [credits](docs/credits/README.md)

* [postCreditTransfer](docs/credits/README.md#postcredittransfer) - Transfer credits to another account

### [message](docs/message/README.md)

* [getMessages](docs/message/README.md#getmessages) - Retrieve Messages
* [getMessagesSend](docs/message/README.md#getmessagessend) - Send message by simple GET or POST
* [getMessagesId](docs/message/README.md#getmessagesid) - Show Message
* [getMessagesIdRelatedReceivedMessages](docs/message/README.md#getmessagesidrelatedreceivedmessages) - List Related Messages
* [postMessages](docs/message/README.md#postmessages) - Send Messages

### [profile](docs/profile/README.md)

* [getProfile](docs/profile/README.md#getprofile) - Get profile

### [webhooks](docs/webhooks/README.md)

* [deleteWebhooksId](docs/webhooks/README.md#deletewebhooksid) - Delete a webhook
* [getWebhooks](docs/webhooks/README.md#getwebhooks) - List webhooks
* [getWebhooksId](docs/webhooks/README.md#getwebhooksid) - Read a webhook
* [postWebhooks](docs/webhooks/README.md#postwebhooks) - Create a webhook
* [postWebhooksId](docs/webhooks/README.md#postwebhooksid) - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
