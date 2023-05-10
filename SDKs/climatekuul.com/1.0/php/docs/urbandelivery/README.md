# urbanDelivery

### Available Operations

* [confirmCarbonOffset](#confirmcarbonoffset) - confirmCarbonOffset
* [confirmPayment](#confirmpayment) - confirmPayment
* [confirmPaymentOfTransaction](#confirmpaymentoftransaction) - confirmTransaction
* [confirmsPlanting](#confirmsplanting) - confirmPlanting
* [urbanDelivery](#urbandelivery) - urbanDelivery

## confirmCarbonOffset

confirmCarbonOffset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmCarbonOffsetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmCarbonOffsetRequestBody();
    $request->carbonOffset = 'y';
    $request->contactEmail = 'example@example.com';
    $request->contactFirstName = 'abc';
    $request->contactLastName = 'xyz';
    $request->transactionId = '60a7875a01d88997746c91ae';

    $response = $sdk->urbanDelivery->confirmCarbonOffset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPayment

confirmPayment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPaymentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPaymentRequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4247-9fb9-7835101a4560';
    $request->apiKeyL2 = 'c60f8db5-7904-4227-960d-27400c38b166';
    $request->confirmPayment = 'y';
    $request->paymentID = 34567878;
    $request->transactionId = '60a7875a01d88997746c91ae';

    $response = $sdk->urbanDelivery->confirmPayment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPaymentOfTransaction

confirmTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPaymentOfTransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPaymentOfTransactionRequestBody();
    $request->confirmTransaction = 'y';
    $request->transactionId = '60a7875a01d88997746c91ae';

    $response = $sdk->urbanDelivery->confirmPaymentOfTransaction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmsPlanting

confirmPlanting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmsPlantingRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmsPlantingRequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4247-9fb9-7835101a4560';
    $request->apiKeyL2 = 'c60f8db5-7904-4227-960d-27400c38b166';
    $request->confirmPlanting = 'y';
    $request->transactionId = '60a7875a01d88997746c91ae';

    $response = $sdk->urbanDelivery->confirmsPlanting($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## urbanDelivery

urbanDelivery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UrbanDeliveryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UrbanDeliveryRequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4547-9fb9-7835101a3960';
    $request->apiKeyL2 = 'c60f8db5-7204-4427-960d-27400c38b166';
    $request->destinationLatitude = -89.870752;
    $request->destinationLongitude = 179.66949;
    $request->itemCount = 3;
    $request->originLatitude = -89.372628;
    $request->originLongitude = -179.159339;
    $request->vehicleType = 'PRIVATE CAR';

    $response = $sdk->urbanDelivery->urbanDelivery($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
