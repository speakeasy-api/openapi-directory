# actionWebhookFailures

## Overview

Operations about action_webhook_failures

### Available Operations

* [postActionWebhookFailuresIdRetry](#postactionwebhookfailuresidretry) - retry Action Webhook Failure

## postActionWebhookFailuresIdRetry

retry Action Webhook Failure

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostActionWebhookFailuresIdRetryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostActionWebhookFailuresIdRetryRequest();
    $request->id = 645894;

    $response = $sdk->actionWebhookFailures->postActionWebhookFailuresIdRetry($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
