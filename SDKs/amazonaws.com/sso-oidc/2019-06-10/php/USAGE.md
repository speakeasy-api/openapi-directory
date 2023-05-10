<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTokenRequest();
    $request->requestBody = new CreateTokenRequestBody();
    $request->requestBody->clientId = 'corrupti';
    $request->requestBody->clientSecret = 'provident';
    $request->requestBody->code = 'distinctio';
    $request->requestBody->deviceCode = 'quibusdam';
    $request->requestBody->grantType = 'unde';
    $request->requestBody->redirectUri = 'nulla';
    $request->requestBody->refreshToken = 'corrupti';
    $request->requestBody->scope = [
        'vel',
        'error',
        'deserunt',
        'suscipit',
    ];
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->createToken($request);

    if ($response->createTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->