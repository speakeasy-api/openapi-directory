# webhookTests

## Overview

Operations about webhook_tests

### Available Operations

* [postWebhookTests](#postwebhooktests) - Create Webhook Test

## postWebhookTests

Create Webhook Test

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhookTestsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWebhookTestsRequestBody();
    $request->action = 'test';
    $request->body = [
        'cum' => 'at',
        'alias' => 'quia',
        'quidem' => 'fuga',
        'repudiandae' => 'accusantium',
    ];
    $request->encoding = 'RAW';
    $request->fileAsBody = false;
    $request->fileFormField = 'upload_file_data';
    $request->headers = [
        'officiis' => 'eos',
        'quibusdam' => 'odio',
        'praesentium' => 'odit',
    ];
    $request->method = 'GET';
    $request->rawBody = 'test body';
    $request->url = 'https://www.site.com/...';

    $response = $sdk->webhookTests->postWebhookTests($request);

    if ($response->webhookTestEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
