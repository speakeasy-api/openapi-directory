# billingDetails

## Overview

Billing Details Rest V 2 Controller

### Available Operations

* [getBillingDetails](#getbillingdetails) - Retrieves the Billing Details
* [putBillingDetails](#putbillingdetails) - Updates the Billing Details

## getBillingDetails

Retrieves the Billing Details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBillingDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBillingDetailsRequest();
    $request->apiKey = 'iusto';

    $response = $sdk->billingDetails->getBillingDetails($request);

    if ($response->billingDetailsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putBillingDetails

Updates the Billing Details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutBillingDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillingDetailsModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutBillingDetailsRequest();
    $request->billingDetailsModel = new BillingDetailsModel();
    $request->billingDetailsModel->building = 'excepturi';
    $request->billingDetailsModel->city = 'Fort Rocky';
    $request->billingDetailsModel->companyName = 'ab';
    $request->billingDetailsModel->country = 'Greenland';
    $request->billingDetailsModel->email1 = 'veritatis';
    $request->billingDetailsModel->email2 = 'deserunt';
    $request->billingDetailsModel->email3 = 'perferendis';
    $request->billingDetailsModel->firstName1 = 'ipsam';
    $request->billingDetailsModel->firstName2 = 'repellendus';
    $request->billingDetailsModel->firstName3 = 'sapiente';
    $request->billingDetailsModel->lastName1 = 'quo';
    $request->billingDetailsModel->lastName2 = 'odit';
    $request->billingDetailsModel->lastName3 = 'at';
    $request->billingDetailsModel->postcode = '94784-5761';
    $request->billingDetailsModel->state = 'nam';
    $request->billingDetailsModel->street = '5159 Lebsack Common';
    $request->billingDetailsModel->taxNumber = 'commodi';
    $request->apiKey = 'molestiae';

    $response = $sdk->billingDetails->putBillingDetails($request);

    if ($response->billingDetailsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
