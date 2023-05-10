# webhooks

## Overview

Webhooks allow you to subscribe to notifications about events that occur on Asana resources (e.g., tasks, projects, stories, etc.).

For a more detailed explanation of webhooks see the [overview of webhooks](/docs/overview-of-webhooks).

### Available Operations

* [createWebhook](#createwebhook) - Establish a webhook
* [deleteWebhook](#deletewebhook) - Delete a webhook
* [getWebhook](#getwebhook) - Get a webhook
* [getWebhooks](#getwebhooks) - Get multiple webhooks
* [updateWebhook](#updatewebhook) - Update a webhook

## createWebhook

Establishing a webhook is a two-part process. First, a simple HTTP POST
request initiates the creation similar to creating any other resource.

Next, in the middle of this request comes the confirmation handshake.
When a webhook is created, we will send a test POST to the target with an
`X-Hook-Secret` header. The target must respond with a `200 OK` or `204
No Content` and a matching `X-Hook-Secret` header to confirm that this
webhook subscription is indeed expected. We strongly recommend storing
this secret to be used to verify future webhook event signatures.

The POST request to create the webhook will then return with the status
of the request. If you do not acknowledge the webhook’s confirmation
handshake it will fail to setup, and you will receive an error in
response to your attempt to create it. This means you need to be able to
receive and complete the webhook *while* the POST request is in-flight
(in other words, have a server that can handle requests asynchronously).

Invalid hostnames like localhost will recieve a 403 Forbidden status code.

```
# Request
curl -H "Authorization: Bearer <personal_access_token>" \
-X POST https://app.asana.com/api/1.0/webhooks \
-d "resource=8675309" \
-d "target=https://example.com/receive-webhook/7654"
```

```
# Handshake sent to https://example.com/
POST /receive-webhook/7654
X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
```

```
# Handshake response sent by example.com
HTTP/1.1 200
X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
```

```
# Response
HTTP/1.1 201
{
  "data": {
    "gid": "43214",
    "resource": {
      "gid": "8675309",
      "name": "Bugs"
    },
    "target": "https://example.com/receive-webhook/7654",
    "active": false,
    "last_success_at": null,
    "last_failure_at": null,
    "last_failure_content": null
  }
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\WebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookRequestFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebhookRequest();
    $request->requestBody = new CreateWebhookRequestBody();
    $request->requestBody->data = new WebhookRequest();
    $request->requestBody->data->filters = [
        new WebhookRequestFilters(),
    ];
    $request->requestBody->data->resource = '12345';
    $request->requestBody->data->target = 'https://example.com/receive-webhook/7654?app_specific_param=app_specific_value';
    $request->optFields = [
        'quas',
        'repudiandae',
        'corporis',
    ];
    $request->optPretty = false;

    $response = $sdk->webhooks->createWebhook($request);

    if ($response->createWebhook201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhook

This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhookRequest();
    $request->optFields = [
        'blanditiis',
    ];
    $request->optPretty = false;
    $request->webhookGid = 'ex';

    $response = $sdk->webhooks->deleteWebhook($request);

    if ($response->deleteWebhook200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhook

Returns the full record for the given webhook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhookRequest();
    $request->optFields = [
        'sit',
    ];
    $request->optPretty = false;
    $request->webhookGid = 'vel';

    $response = $sdk->webhooks->getWebhook($request);

    if ($response->getWebhook200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhooks

Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhooksRequest();
    $request->limit = 342611;
    $request->offset = 'saepe';
    $request->optFields = [
        'consequatur',
        'incidunt',
        'reiciendis',
    ];
    $request->optPretty = false;
    $request->resource = 'dolorem';
    $request->workspace = 'harum';

    $response = $sdk->webhooks->getWebhooks($request);

    if ($response->getWebhooks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWebhook

An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\WebhookUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookUpdateRequestFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWebhookRequest();
    $request->requestBody = new UpdateWebhookRequestBody();
    $request->requestBody->data = new WebhookUpdateRequest();
    $request->requestBody->data->filters = [
        new WebhookUpdateRequestFilters(),
    ];
    $request->optFields = [
        'occaecati',
    ];
    $request->optPretty = false;
    $request->webhookGid = 'labore';

    $response = $sdk->webhooks->updateWebhook($request);

    if ($response->updateWebhook200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
