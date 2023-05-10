# drives

## Overview

Drive data

### Available Operations

* [getDrives](#getdrives) - Drive data and results

## getDrives

Get game drives

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDrivesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDrivesRequest();
    $request->classification = 'temporibus';
    $request->conference = 'ab';
    $request->defense = 'quis';
    $request->defenseConference = 'veritatis';
    $request->offense = 'deserunt';
    $request->offenseConference = 'perferendis';
    $request->seasonType = 'ipsam';
    $request->team = 'repellendus';
    $request->week = 957156;
    $request->year = 778157;

    $response = $sdk->drives->getDrives($request);

    if ($response->drives !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
