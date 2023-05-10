# coaches

## Overview

Information about coaches

### Available Operations

* [getCoaches](#getcoaches) - Coaching records and history

## getCoaches

Coaching history

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCoachesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCoachesRequest();
    $request->firstName = 'Vincenzo';
    $request->lastName = 'Goldner';
    $request->maxYear = 383441;
    $request->minYear = 477665;
    $request->team = 'minus';
    $request->year = 812169;

    $response = $sdk->coaches->getCoaches($request);

    if ($response->coaches !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
