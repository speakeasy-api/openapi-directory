# SDK

## Overview

Online payment fraud detection service. It helps merchants to minimize chargebacks and therefore maximize the revenue. It can be used to detect fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

### Available Operations

* [postV1OrderFeedback](#postv1orderfeedback) - Feedback the status of an order transaction.
* [postV1OrderScreen](#postv1orderscreen) - Screen order for payment fraud.

## postV1OrderFeedback

Feedback the status of an order transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderFeedbackActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderFeedbackFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV1OrderFeedbackRequest();
    $request->action = PostV1OrderFeedbackActionEnum::REJECT_BLACKLIST;
    $request->format = PostV1OrderFeedbackFormatEnum::XML;
    $request->id = '2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392';
    $request->key = 'perferendis';
    $request->notes = 'ad';

    $response = $sdk->sdk->postV1OrderFeedback($request);

    if ($response->postV1OrderFeedback200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV1OrderScreen

Screen order for payment fraud.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderScreenRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostV1OrderScreenFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV1OrderScreenRequest();
    $request->amount = 6176.36;
    $request->avsResult = 'sed';
    $request->billAddr = 'iste';
    $request->billCity = 'dolor';
    $request->billCountry = 'natus';
    $request->billState = 'laboriosam';
    $request->billZipCode = 'hic';
    $request->binNo = 'saepe';
    $request->cardHash = 'fuga';
    $request->currency = 'in';
    $request->cvvResult = 'corporis';
    $request->department = 'iste';
    $request->email = 'Sterling6@yahoo.com';
    $request->emailDomain = 'reiciendis';
    $request->emailHash = 'est';
    $request->firstName = 'Madaline';
    $request->flpChecksum = 'laborum';
    $request->format = PostV1OrderScreenFormatEnum::JSON;
    $request->ip = 'dolorem';
    $request->key = 'corporis';
    $request->lastName = 'Champlin';
    $request->passwordHash = 'nobis';
    $request->paymentMode = 'enim';
    $request->quantity = 607831;
    $request->shipAddr = 'nemo';
    $request->shipCity = 'minima';
    $request->shipCountry = 'excepturi';
    $request->shipState = 'accusantium';
    $request->shipZipCode = 'iure';
    $request->userOrderId = 'culpa';
    $request->userOrderMemo = 'doloribus';
    $request->userPhone = 'sapiente';
    $request->usernameHash = 'architecto';

    $response = $sdk->sdk->postV1OrderScreen($request);

    if ($response->postV1OrderScreen200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
