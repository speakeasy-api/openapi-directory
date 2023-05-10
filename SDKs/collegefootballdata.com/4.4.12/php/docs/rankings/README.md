# rankings

## Overview

Historical poll rankings

### Available Operations

* [getRankings](#getrankings) - Historical polls and rankings

## getRankings

Poll rankings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRankingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRankingsRequest();
    $request->seasonType = 'perferendis';
    $request->week = 39187;
    $request->year = 441711;

    $response = $sdk->rankings->getRankings($request);

    if ($response->rankingWeeks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
