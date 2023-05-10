<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RequestAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestAccessTokenRequest();
    $request->requestBody = new SignedTokenRequest();
    $request->requestBody->capability = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->requestBody->clientId = 'vel';
    $request->requestBody->keyName = 'xVLyHw.LMJZxw';
    $request->requestBody->mac = 'error';
    $request->requestBody->nonce = 'deserunt';
    $request->requestBody->timestamp = 384382;
    $request->xAblyVersion = 'iure';
    $request->format = ResponseFormatEnum::JSONP;
    $request->keyName = 'debitis';

    $response = $sdk->authentication->requestAccessToken($request);

    if ($response->tokenDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->