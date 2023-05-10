# customerAlerts

### Available Operations

* [getStoreAlerts](#getstorealerts) - Get store's alerts
* [saveStoreAlerts](#savestorealerts) - Save store alerts

## getStoreAlerts

Get store's alerts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoreAlertsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoreAlertsRequest();
    $request->ifNoneMatch = 'deleniti';
    $request->storeId = 'pariatur';

    $response = $sdk->customerAlerts->getStoreAlerts($request);

    if ($response->storeAlerts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveStoreAlerts

You just have to send the alert you want to update, does not need all alerts. (PARTIAL UPDATE ACCEPTED)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SaveStoreAlertsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SaveStoreAlertRequest;
use \OpenAPI\OpenAPI\Models\Shared\StoreAlertProperty;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveStoreAlertsRequest();
    $request->requestBody = [
        'nobis' => new SaveStoreAlertRequest(),
        'libero' => new SaveStoreAlertRequest(),
        'delectus' => new SaveStoreAlertRequest(),
    ];
    $request->storeId = 'quaerat';

    $response = $sdk->customerAlerts->saveStoreAlerts($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
