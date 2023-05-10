<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateByteMatchSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateByteMatchSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateByteMatchSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateByteMatchSetRequest();
    $request->createByteMatchSetRequest = new CreateByteMatchSetRequest();
    $request->createByteMatchSetRequest->changeToken = 'corrupti';
    $request->createByteMatchSetRequest->name = 'Kelvin Sporer';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = CreateByteMatchSetXAmzTargetEnum::AWSWAF20150824_CREATE_BYTE_MATCH_SET;

    $response = $sdk->createByteMatchSet($request);

    if ($response->createByteMatchSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->