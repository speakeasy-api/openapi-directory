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
use \OpenAPI\OpenAPI\Models\Operations\WebhooksAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnifiedApiIdEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksAddRequest();
    $request->createWebhookRequest = new CreateWebhookRequest();
    $request->createWebhookRequest->deliveryUrl = 'https://example.com/my/webhook/endpoint';
    $request->createWebhookRequest->description = 'A description';
    $request->createWebhookRequest->events = [
        WebhookEventTypeEnum::CRM_COMPANY_CREATED,
        WebhookEventTypeEnum::CRM_COMPANY_CREATED,
        WebhookEventTypeEnum::CRM_COMPANY_CREATED,
    ];
    $request->createWebhookRequest->status = StatusEnum::ENABLED;
    $request->createWebhookRequest->unifiedApi = UnifiedApiIdEnum::CRM;
    $request->xApideckAppId = 'provident';

    $requestSecurity = new WebhooksAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->webhooksAdd($request, $requestSecurity);

    if ($response->createWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [webhooks](docs/webhooks/README.md)

* [webhooksAdd](docs/webhooks/README.md#webhooksadd) - Create webhook subscription
* [webhooksAll](docs/webhooks/README.md#webhooksall) - List webhook subscriptions
* [webhooksDelete](docs/webhooks/README.md#webhooksdelete) - Delete webhook subscription
* [webhooksExecute](docs/webhooks/README.md#webhooksexecute) - Execute a webhook
* [webhooksOne](docs/webhooks/README.md#webhooksone) - Get webhook subscription
* [webhooksResolve](docs/webhooks/README.md#webhooksresolve) - Resolve and Execute a connection webhook
* [webhooksShortExecute](docs/webhooks/README.md#webhooksshortexecute) - Execute a webhook
* [webhooksUpdate](docs/webhooks/README.md#webhooksupdate) - Update webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
