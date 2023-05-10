# webhooks

### Available Operations

* [createWebhook](#createwebhook) - Create a webhook
* [deleteWebhook](#deletewebhook) - Delete a webhook
* [findWebhookResources](#findwebhookresources) - Find webhook resources
* [findWebhooks](#findwebhooks) - Find webhooks
* [getWebhook](#getwebhook) - Find a specific webhook
* [getWebhookResource](#getwebhookresource) - Find specific webhook resource
* [updateWebhook](#updatewebhook) - Update a webhook

## createWebhook

Create a Webhook for notification in the CallFire system. Use the webhooks API to receive notifications of important CallFire events. Select the resource to listen to, and then choose the resource events to receive notifications on. When an event triggers, a POST will be made to the callback URL with a payload of notification information. Available resources and their events include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed'], 'MonthlyRenewal': ['failed', 'finished'], 'LowBalance': ['failed', 'finished']. Webhooks support secret token which is used as signing key to HmacSHA1 hash of json payload which is returned in 'X-CallFire-Signature' header. This header can be used to verify callback POST is coming from CallFire. See [security guide](https://developers.callfire.com/security-guide.html)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WebhookInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhookInput();
    $request->callback = 'nam';
    $request->enabled = false;
    $request->events = [
        'aliquid',
        'quasi',
        'saepe',
        'vel',
    ];
    $request->expiresAt = 690025;
    $request->fields = 'molestiae';
    $request->id = 699622;
    $request->name = 'Warren Rau V';
    $request->nonStrictSsl = false;
    $request->resource = 'tempore';
    $request->secret = 'adipisci';
    $request->singleUse = false;

    $requestSecurity = new CreateWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->webhooks->createWebhook($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhook

Deletes a webhook instance. Will be removed permanently

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhookRequest();
    $request->id = 766964;

    $requestSecurity = new DeleteWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->webhooks->deleteWebhook($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findWebhookResources

Searches for webhook resources. Available resources include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed'], 'MonthlyRenewal': ['failed', 'finished'], 'LowBalance': ['failed', 'finished']

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindWebhookResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindWebhookResourcesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindWebhookResourcesRequest();
    $request->fields = 'consequuntur';

    $requestSecurity = new FindWebhookResourcesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->webhooks->findWebhookResources($request, $requestSecurity);

    if ($response->itemListWebhookResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findWebhooks

Searches all webhooks available for a current user. Searches by name, resource, event, callback URL, or whether they are enabled. Returns a paged list of Webhooks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindWebhooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindWebhooksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindWebhooksRequest();
    $request->callback = 'consequatur';
    $request->enabled = false;
    $request->event = 'minus';
    $request->fields = 'quaerat';
    $request->limit = 959167;
    $request->name = 'Joy Labadie';
    $request->offset = 857723;
    $request->resource = 'quas';

    $requestSecurity = new FindWebhooksSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->webhooks->findWebhooks($request, $requestSecurity);

    if ($response->webhookPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhook

Returns a single Webhook instance for a given webhook id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhookRequest();
    $request->fields = 'esse';
    $request->id = 97468;

    $requestSecurity = new GetWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->webhooks->getWebhook($request, $requestSecurity);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhookResource

Returns information about supported events for a given webhook resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookResourceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhookResourceRequest();
    $request->fields = 'a';
    $request->resource = 'error';

    $requestSecurity = new GetWebhookResourceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->webhooks->getWebhookResource($request, $requestSecurity);

    if ($response->webhookResource !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWebhook

Updates the information in existing webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWebhookRequest();
    $request->webhookInput = new WebhookInput();
    $request->webhookInput->callback = 'sint';
    $request->webhookInput->enabled = false;
    $request->webhookInput->events = [
        'possimus',
        'quia',
        'eveniet',
        'asperiores',
    ];
    $request->webhookInput->expiresAt = 815524;
    $request->webhookInput->fields = 'veritatis';
    $request->webhookInput->id = 159414;
    $request->webhookInput->name = 'Hattie Nader';
    $request->webhookInput->nonStrictSsl = false;
    $request->webhookInput->resource = 'quae';
    $request->webhookInput->secret = 'earum';
    $request->webhookInput->singleUse = false;
    $request->id = 424032;

    $requestSecurity = new UpdateWebhookSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->webhooks->updateWebhook($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
