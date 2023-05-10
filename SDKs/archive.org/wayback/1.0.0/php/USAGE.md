<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWaybackV1AvailableRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClosestEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWaybackV1AvailableRequest();
    $request->callback = 'corrupti';
    $request->closest = ClosestEnum::BEFORE;
    $request->statusCode = StatusCodeEnum::FOUR_HUNDRED_AND_TWENTY_ONE;
    $request->tag = 'quibusdam';
    $request->timeout = 6027.63;
    $request->timestamp = 'nulla';
    $request->url = 'corrupti';

    $response = $sdk->getWaybackV1Available($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->