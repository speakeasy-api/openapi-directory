# airtravelCoordinates

### Available Operations

* [airtravelCoordinates](#airtravelcoordinates) - airtravelCoordinates
* [confirmCarbonOffset4](#confirmcarbonoffset4) - confirmCarbonOffset
* [confirmPayment4](#confirmpayment4) - confirmPayment
* [confirmPaymentOfTransaction4](#confirmpaymentoftransaction4) - confirmTransaction
* [confirmsPlanting4](#confirmsplanting4) - confirmPlanting

## airtravelCoordinates

airtravelCoordinates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AirtravelCoordinatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AirtravelCoordinatesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AirtravelCoordinatesRequest();
    $request->contentType = 'application/x-www-form-urlencoded';
    $request->requestBody = new AirtravelCoordinatesRequestBody();
    $request->requestBody->apiKeyL1 = 'd95fead6-e8a6-4547-9fb9-7835101a3960';
    $request->requestBody->apiKeyL2 = 'c60f8db5-7204-4427-960d-27400c38b166';
    $request->requestBody->destinationAirportLatitude = 24.9056;
    $request->requestBody->destinationAirportLongitude = 67.1569;
    $request->requestBody->numberOfPassengers = 2;
    $request->requestBody->originAirportLatitude = 31.5208;
    $request->requestBody->originAirportLongitude = 74.4028;
    $request->requestBody->travelClass = 'Economy';
    $request->requestBody->travelMode = 'round trip';

    $response = $sdk->airtravelCoordinates->airtravelCoordinates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmCarbonOffset4

confirmCarbonOffset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmCarbonOffset4RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmCarbonOffset4RequestBody();
    $request->carbonOffset = 'y';
    $request->contactEmail = 'example@example.com';
    $request->contactFirstName = 'abc';
    $request->contactLastName = 'xyz';
    $request->transactionId = '60a78ed201d88997746c91b5';

    $response = $sdk->airtravelCoordinates->confirmCarbonOffset4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPayment4

confirmPayment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPayment4RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPayment4RequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4247-9fb9-7835101a4560';
    $request->apiKeyL2 = 'c60f8db5-7904-4227-960d-27400c38b166';
    $request->confirmPayment = 'y';
    $request->paymentID = 34567878;
    $request->transactionId = '60a78ed201d88997746c91b5';

    $response = $sdk->airtravelCoordinates->confirmPayment4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPaymentOfTransaction4

confirmTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPaymentOfTransaction4RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPaymentOfTransaction4RequestBody();
    $request->confirmTransaction = 'y';
    $request->transactionId = '60a78ed201d88997746c91b5';

    $response = $sdk->airtravelCoordinates->confirmPaymentOfTransaction4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmsPlanting4

confirmPlanting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmsPlanting4RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmsPlanting4RequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4247-9fb9-7835101a4560';
    $request->apiKeyL2 = 'c60f8db5-7904-4227-960d-27400c38b166';
    $request->confirmPlanting = 'y';
    $request->transactionId = '60a78ed201d88997746c91b5';

    $response = $sdk->airtravelCoordinates->confirmsPlanting4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
