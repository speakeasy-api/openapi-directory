# smartCharging

### Available Operations

* [deletechargingschedule](#deletechargingschedule) - Delete a smart charging schedule
* [setchargingschedule](#setchargingschedule) - Set one of charging power or current of a specific chargestation connector

## deletechargingschedule

Delete a smart charging schedule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletechargingscheduleRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletechargingscheduleRequestBody();
    $request->id = 'e80ca55e-fd20-4e45-be18-58b6a89fbe3a';

    $response = $sdk->smartCharging->deletechargingschedule($request);

    if ($response->deletechargingschedule201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setchargingschedule

Set one of charging power or current of a specific chargestation connector

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetchargingscheduleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SetchargingscheduleRequestBodySchedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetchargingscheduleRequestBody();
    $request->connector = 'nostrum';
    $request->schedule = [
        new SetchargingscheduleRequestBodySchedule(),
        new SetchargingscheduleRequestBodySchedule(),
        new SetchargingscheduleRequestBodySchedule(),
    ];

    $response = $sdk->smartCharging->setchargingschedule($request);

    if ($response->setchargingschedule201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
