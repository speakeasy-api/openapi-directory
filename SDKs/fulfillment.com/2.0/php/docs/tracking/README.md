# tracking

## Overview

Carrier Independent Tracking

### Available Operations

* [getTrack](#gettrack) - Tracking

## getTrack

Get uniformed tracking events for any package, this response is carrier independent. Please note, an API Key is required for throttling purposes, please contact your success manager for details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrackRequest();
    $request->trackingNumber = 'perferendis';

    $response = $sdk->tracking->getTrack($request);

    if ($response->trackingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
