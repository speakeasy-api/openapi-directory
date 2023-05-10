<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAbortEnvironmentUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAbortEnvironmentUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAbortEnvironmentUpdateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAbortEnvironmentUpdateRequest();
    $request->action = GETAbortEnvironmentUpdateActionEnum::ABORT_ENVIRONMENT_UPDATE;
    $request->environmentId = 'corrupti';
    $request->environmentName = 'provident';
    $request->version = GETAbortEnvironmentUpdateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->getAbortEnvironmentUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->