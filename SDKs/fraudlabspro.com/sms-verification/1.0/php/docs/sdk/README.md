# SDK

## Overview

Send an SMS with verification code and a custom message for authentication purpose. It helps merchants to minimize chargebacks and fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

### Available Operations

* [getV1VerificationResult](#getv1verificationresult) - Verify that an OTP sent by the Send SMS Verification API is valid.
* [postV1VerificationSend](#postv1verificationsend) - Send an SMS with verification code and a custom message for authentication purpose.

## getV1VerificationResult

Verify that an OTP sent by the Send SMS Verification API is valid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1VerificationResultRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV1VerificationResultFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1VerificationResultRequest();
    $request->format = GetV1VerificationResultFormatEnum::XML;
    $request->key = 'nulla';
    $request->otp = 'corrupti';
    $request->tranId = 'illum';

    $response = $sdk->sdk->getV1VerificationResult($request);

    if ($response->getV1VerificationResult200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV1VerificationSend

Send an SMS with verification code and a custom message for authentication purpose.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV1VerificationSendRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostV1VerificationSendFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV1VerificationSendRequest();
    $request->countryCode = 'IO';
    $request->format = PostV1VerificationSendFormatEnum::XML;
    $request->key = 'deserunt';
    $request->mesg = 'suscipit';
    $request->tel = 'iure';

    $response = $sdk->sdk->postV1VerificationSend($request);

    if ($response->postV1VerificationSend200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
