<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AckMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AckMessageRequest();
    $request->queueMessageId = 'corrupti';
    $request->queueName = 'provident';

    $response = $sdk->queues->ackMessage($request);

    if ($response->apiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->