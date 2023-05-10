# ecommerceDelivery

### Available Operations

* [confirmCarbonOffset1](#confirmcarbonoffset1) - confirmCarbonOffset
* [confirmPayment1](#confirmpayment1) - confirmPayment
* [confirmPaymentOfTransaction1](#confirmpaymentoftransaction1) - confirmTransaction
* [confirmsPlanting2](#confirmsplanting2) - confirmPlanting
* [ecommerceDelivery](#ecommercedelivery) - ecommerceDelivery

## confirmCarbonOffset1

confirmCarbonOffset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmCarbonOffset1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmCarbonOffset1RequestBody();
    $request->carbonOffset = 'y';
    $request->contactEmail = 'example@example.com';
    $request->contactFirstName = 'abc';
    $request->contactLastName = 'xyz';
    $request->transactionId = '60a766d401d88997746c91a0';

    $response = $sdk->ecommerceDelivery->confirmCarbonOffset1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPayment1

confirmPayment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPayment1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPayment1RequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4247-9fb9-7835101a4560';
    $request->apiKeyL2 = 'c60f8db5-7904-4227-960d-27400c38b166';
    $request->confirmPayment = 'y';
    $request->paymentID = 34567878;
    $request->transactionId = '60a766d401d88997746c91a0';

    $response = $sdk->ecommerceDelivery->confirmPayment1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPaymentOfTransaction1

confirmTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPaymentOfTransaction1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPaymentOfTransaction1RequestBody();
    $request->confirmTransaction = 'y';
    $request->transactionId = '60a766d401d88997746c91a0';

    $response = $sdk->ecommerceDelivery->confirmPaymentOfTransaction1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmsPlanting2

confirmPlanting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmsPlanting2RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmsPlanting2RequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4247-9fb9-7835101a4560';
    $request->apiKeyL2 = 'c60f8db5-7904-4227-960d-27400c38b166';
    $request->confirmPlanting = 'y';
    $request->transactionId = '60a766d401d88997746c91a0';

    $response = $sdk->ecommerceDelivery->confirmsPlanting2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ecommerceDelivery

ecommerceDelivery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EcommerceDeliveryRequest;
use \OpenAPI\OpenAPI\Models\Operations\EcommerceDeliveryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EcommerceDeliveryRequest();
    $request->contentType = 'application/x-www-form-urlencoded';
    $request->requestBody = new EcommerceDeliveryRequestBody();
    $request->requestBody->apiKeyL1 = 'd95fead6-e8a6-4547-9fb9-7835101a3960';
    $request->requestBody->apiKeyL2 = 'c60f8db5-7204-4427-960d-27400c38b166';
    $request->requestBody->destinationAirportCode = 'BRU';
    $request->requestBody->destinationLatitude = 50.870752;
    $request->requestBody->destinationLongitude = 4.66949;
    $request->requestBody->originAirportCode = 'KHI';
    $request->requestBody->originLatitude = 23.372628;
    $request->requestBody->originLongitude = 113.159339;
    $request->requestBody->volumetricWeight = 2.7;
    $request->requestBody->waybillType = 'road only';

    $response = $sdk->ecommerceDelivery->ecommerceDelivery($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
