<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddProfileKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddProfileKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddProfileKeyRequest();
    $request->domainName = 'corrupti';
    $request->requestBody = new AddProfileKeyRequestBody();
    $request->requestBody->keyName = 'provident';
    $request->requestBody->profileId = 'distinctio';
    $request->requestBody->values = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->addProfileKey($request);

    if ($response->addProfileKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->