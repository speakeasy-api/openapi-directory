# airtravelMultileg

### Available Operations

* [airtravelMultileg](#airtravelmultileg) - airtravelMultileg
* [confirmCarbonOffset3](#confirmcarbonoffset3) - confirmCarbonOffset
* [confirmPayment3](#confirmpayment3) - confirmPayment
* [confirmPaymentOfTransaction3](#confirmpaymentoftransaction3) - confirmTransaction
* [confirmsPlanting3](#confirmsplanting3) - confirmPlanting

## airtravelMultileg

airtravelMultileg

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AirtravelMultilegRequest;
use \OpenAPI\OpenAPI\Models\Shared\Leg1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AirtravelMultilegRequest();
    $request->apiKeyL1 = 'corrupti';
    $request->apiKeyL2 = 'provident';
    $request->contactEmail = 'distinctio';
    $request->contactFirstName = 'quibusdam';
    $request->contactLastName = 'unde';
    $request->leg1 = new Leg1();
    $request->leg1->destinationAirportCode = 'nulla';
    $request->leg1->originAirportCode = 'corrupti';
    $request->leg1->travelClass = 'illum';
    $request->leg2 = new Leg1();
    $request->leg2->destinationAirportCode = 'vel';
    $request->leg2->originAirportCode = 'error';
    $request->leg2->travelClass = 'deserunt';
    $request->leg3 = new Leg1();
    $request->leg3->destinationAirportCode = 'suscipit';
    $request->leg3->originAirportCode = 'iure';
    $request->leg3->travelClass = 'magnam';
    $request->legsCount = 'debitis';
    $request->numberOfPassengers = 'ipsa';
    $request->travelMode = 'delectus';

    $response = $sdk->airtravelMultileg->airtravelMultileg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmCarbonOffset3

confirmCarbonOffset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmCarbonOffset3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmCarbonOffset3RequestBody();
    $request->carbonOffset = 'y';
    $request->contactEmail = 'example@example.com';
    $request->contactFirstName = 'abc';
    $request->contactLastName = 'xyz';
    $request->transactionId = '60a75c0e94c8cb95a6d0e02e';

    $response = $sdk->airtravelMultileg->confirmCarbonOffset3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPayment3

confirmPayment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPayment3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPayment3RequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4247-9fb9-7835101a4560';
    $request->apiKeyL2 = 'c60f8db5-7904-4227-960d-27400c38b166';
    $request->confirmPayment = 'y';
    $request->paymentID = 34567878;
    $request->transactionId = '60a75c0e94c8cb95a6d0e02e';

    $response = $sdk->airtravelMultileg->confirmPayment3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPaymentOfTransaction3

confirmTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPaymentOfTransaction3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPaymentOfTransaction3RequestBody();
    $request->confirmTransaction = 'y';
    $request->transactionId = '60a75c0e94c8cb95a6d0e02e';

    $response = $sdk->airtravelMultileg->confirmPaymentOfTransaction3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmsPlanting3

confirmPlanting

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmsPlanting3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmsPlanting3RequestBody();
    $request->apiKeyL1 = 'd95fead6-e8a6-4247-9fb9-7835101a4560';
    $request->apiKeyL2 = 'c60f8db5-7904-4227-960d-27400c38b166';
    $request->confirmPlanting = 'y';
    $request->transactionId = '60a75c0e94c8cb95a6d0e02e';

    $response = $sdk->airtravelMultileg->confirmsPlanting3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
