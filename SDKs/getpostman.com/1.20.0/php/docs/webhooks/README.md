# webhooks

## Overview

With webhooks you can trigger a collection at a specific time with your own custom payload which can then be accessed in the collection.

Learn more about webhooks in our [learning center](https://learning.postman.com/docs/designing-and-developing-your-api/monitoring-your-api/integrations-for-alerts/).

### Available Operations

* [createWebhook](#createwebhook) - Create Webhook

## createWebhook

Create a webhook that triggers a collection with your custom payload.

You can specify the webhook name and the collection to trigger by using the following attributes of the `webhook` object on your JSON body:

* `name`: the name of the webhook that you're creating.
* `collection`: the ID of the collection that you want to trigger once this webhook is called.

Once created, the webhook URL can be retrieved by accessing the `webhookUrl` attribute of the `webhook` object on the response JSON payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookRequestBodyWebhook;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebhookRequest();
    $request->requestBody = new CreateWebhookRequestBody();
    $request->requestBody->webhook = new CreateWebhookRequestBodyWebhook();
    $request->requestBody->webhook->collection = '{{collection_id}}';
    $request->requestBody->webhook->name = '{{webhook_name}}';
    $request->workspace = '{{workspace_id}}';

    $response = $sdk->webhooks->createWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
