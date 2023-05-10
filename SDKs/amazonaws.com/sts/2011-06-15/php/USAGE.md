<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDecodeAuthorizationMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDecodeAuthorizationMessageActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDecodeAuthorizationMessageVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDecodeAuthorizationMessageRequest();
    $request->action = GETDecodeAuthorizationMessageActionEnum::DECODE_AUTHORIZATION_MESSAGE;
    $request->encodedMessage = 'corrupti';
    $request->version = GETDecodeAuthorizationMessageVersionEnum::TWO_THOUSAND_AND_ELEVEN0615;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->getDecodeAuthorizationMessage($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->