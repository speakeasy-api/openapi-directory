# webhooks

### Available Operations

* [postWebhooksFirehoseTest](#postwebhooksfirehosetest) - Test Firehose Webhook
* [putWebhooksFirehose](#putwebhooksfirehose) - Update Firehose Webhook

## postWebhooksFirehoseTest

Trigger a test payload to be sent to your configured Firehose Webhook url.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWebhooksFirehoseTestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PostWebhooksFirehoseTestSecurity();
    $requestSecurity->clientAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webhooks->postWebhooksFirehoseTest($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWebhooksFirehose

Update Firehose Webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWebhooksFirehoseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutWebhooksFirehoseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWebhooksFirehoseRequestBody();
    $request->secret = '0Kvs1tAUQ69FOMBiWlt5XJSrruXMhWDiVbyrWaNm';
    $request->url = 'https://brainpower.co/enode-webhooks/firehose';

    $requestSecurity = new PutWebhooksFirehoseSecurity();
    $requestSecurity->clientAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->webhooks->putWebhooksFirehose($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
