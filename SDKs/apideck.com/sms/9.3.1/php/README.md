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
use \OpenAPI\OpenAPI\Models\Operations\MessagesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageInput;
use \OpenAPI\OpenAPI\Models\Shared\MessageMessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\MessagesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesAddRequest();
    $request->messageInput = new MessageInput();
    $request->messageInput->body = 'Hi! How are you doing?';
    $request->messageInput->from = '+15017122661';
    $request->messageInput->messagingServiceId = '123456';
    $request->messageInput->reference = 'CUST001';
    $request->messageInput->scheduledAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T07:43:32.000Z');
    $request->messageInput->subject = 'Picture';
    $request->messageInput->to = '+15017122662';
    $request->messageInput->type = MessageMessageTypeEnum::SMS;
    $request->messageInput->webhookUrl = 'https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms';
    $request->raw = false;
    $request->xApideckAppId = 'corrupti';
    $request->xApideckConsumerId = 'provident';
    $request->xApideckServiceId = 'distinctio';

    $requestSecurity = new MessagesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->messages->messagesAdd($request, $requestSecurity);

    if ($response->createMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [messages](docs/messages/README.md)

* [messagesAdd](docs/messages/README.md#messagesadd) - Create Message
* [messagesAll](docs/messages/README.md#messagesall) - List Messages
* [messagesDelete](docs/messages/README.md#messagesdelete) - Delete Message
* [messagesOne](docs/messages/README.md#messagesone) - Get Message
* [messagesUpdate](docs/messages/README.md#messagesupdate) - Update Message
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
