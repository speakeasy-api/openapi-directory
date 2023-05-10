# health

### Available Operations

* [getHeartbeat](#getheartbeat) - Ping the server for liveness
* [getServerHealth](#getserverhealth) - Get state of the server and its dependencies.

## getHeartbeat

Ping the server for liveness

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->health->getHeartbeat();

    if ($response->getHeartbeat200TextPlainString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServerHealth

Get state of the server and its dependencies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->health->getServerHealth();

    if ($response->getServerHealth200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
