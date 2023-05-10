# roadDistance

### Available Operations

* [confirmCarbonOffset5](#confirmcarbonoffset5) - confirmCarbonOffset
* [confirmPayment5](#confirmpayment5) - confirmPayment
* [confirmPaymentOfTransaction5](#confirmpaymentoftransaction5) - confirmTransaction
* [confirmsPlanting5](#confirmsplanting5) - confirmPlanting
* [roadDistance](#roaddistance) - RoadDistance

## confirmCarbonOffset5

confirmCarbonOffset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmCarbonOffset5RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmCarbonOffset5RequestBody();
    $request->carbonOffset = 'y';
    $request->contactEmail = 'example@example.com';
    $request->contactFirstName = 'abc';
    $request->contactLastName = 'xyz';
    $request->transactionId = '60a7823401d88997746c91a7';

    $response = $sdk->roadDistance->confirmCarbonOffset5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPayment5

confirmPayment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPayment5RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPayment5RequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4247-9fb9-7835101a4560';
    $request->apiKeyL2 = 'c60f8db5-7904-4227-960d-27400c38b166';
    $request->confirmPayment = 'y';
    $request->paymentID = 34567878;
    $request->transactionId = '60a7823401d88997746c91a7';

    $response = $sdk->roadDistance->confirmPayment5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPaymentOfTransaction5

confirmTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPaymentOfTransaction5RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPaymentOfTransaction5RequestBody();
    $request->confirmTransaction = 'y';
    $request->transactionId = '60a7823401d88997746c91a7';

    $response = $sdk->roadDistance->confirmPaymentOfTransaction5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmsPlanting5

confirmPlanting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmsPlanting5RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmsPlanting5RequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4247-9fb9-7835101a4560';
    $request->apiKeyL2 = 'c60f8db5-7904-4227-960d-27400c38b166';
    $request->confirmPlanting = 'y';
    $request->transactionId = '60a7823401d88997746c91a7';

    $response = $sdk->roadDistance->confirmsPlanting5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## roadDistance

RoadDistance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RoadDistanceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoadDistanceRequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4547-9fb9-7835101a3960';
    $request->apiKeyL2 = 'c60f8db5-7204-4427-960d-27400c38b166';
    $request->travelDistance = 2450;
    $request->tripEnd = 18;
    $request->tripStart = 16;
    $request->vehicleMake = 'Honda';
    $request->vehicleType = 'personal car';
    $request->vehicleYear = 2010;

    $response = $sdk->roadDistance->roadDistance($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
