<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderFeedbackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderFeedbackFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV1OrderFeedbackRequest();
    $request->action = PostV1OrderFeedbackActionEnum::REJECT;
    $request->format = PostV1OrderFeedbackFormatEnum::XML;
    $request->id = 'bd9d8d69-a674-4e0f-867c-c8796ed151a0';
    $request->key = 'ipsam';
    $request->notes = 'repellendus';

    $response = $sdk->postV1OrderFeedback($request);

    if ($response->postV1OrderFeedback200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->