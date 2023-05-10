# wiMWechselprozesseImMesswesenStromStatusAPI

## Overview

Access to status information of an existing metering change and allocation process.

### Available Operations

* [wimstatus](#wimstatus) - WiM Proess Informtion

## wimstatus

Access to status information of an existing metering change and allocation process.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WimstatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WimstatusRequest();
    $request->vid = 'corporis';

    $response = $sdk->wiMWechselprozesseImMesswesenStromStatusAPI->wimstatus($request);

    if ($response->wimstatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
