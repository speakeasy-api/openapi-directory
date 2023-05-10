# betting

## Overview

Betting lines and data

### Available Operations

* [getLines](#getlines) - Betting lines

## getLines

Closing betting lines

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLinesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinesRequest();
    $request->away = 'vel';
    $request->conference = 'error';
    $request->gameId = 645894;
    $request->home = 'suscipit';
    $request->seasonType = 'iure';
    $request->team = 'magnam';
    $request->week = 891773;
    $request->year = 56713;

    $response = $sdk->betting->getLines($request);

    if ($response->gameLines !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
