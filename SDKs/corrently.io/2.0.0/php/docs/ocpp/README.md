# ocpp

## Overview

Alternative access to Corrently OCPP Data (hosted cloud backend).

### Available Operations

* [ocppSessions](#ocppsessions) - Last Session Info

## ocppSessions

Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).
Last session Info of managed EV charging stations connected to the correnty ecosystem.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->ocpp->ocppSessions();

    if ($response->easeeChargers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
