# SDK

## Overview

API for Internet Archive's Wayback Machine

### Available Operations

* [getWaybackV1Available](#getwaybackv1available)

## getWaybackV1Available

### Example Usage

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
    $request->callback = 'illum';
    $request->closest = ClosestEnum::BEFORE;
    $request->statusCode = StatusCodeEnum::FOUR_HUNDRED_AND_FOURTEEN;
    $request->tag = 'deserunt';
    $request->timeout = 3843.82;
    $request->timestamp = 'iure';
    $request->url = 'magnam';

    $response = $sdk->sdk->getWaybackV1Available($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
