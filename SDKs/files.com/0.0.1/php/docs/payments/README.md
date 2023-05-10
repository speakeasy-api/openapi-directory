# payments

## Overview

Operations about payments

### Available Operations

* [getPayments](#getpayments) - List Payments
* [getPaymentsId](#getpaymentsid) - Show Payment

## getPayments

List Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentsRequest();
    $request->cursor = 'reiciendis';
    $request->perPage = 588740;

    $response = $sdk->payments->getPayments($request);

    if ($response->accountLineItemEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentsId

Show Payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentsIdRequest();
    $request->id = 833819;

    $response = $sdk->payments->getPaymentsId($request);

    if ($response->accountLineItemEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
