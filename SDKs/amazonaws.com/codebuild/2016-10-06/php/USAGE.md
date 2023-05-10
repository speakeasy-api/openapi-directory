<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteBuildsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteBuildsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteBuildsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteBuildsRequest();
    $request->batchDeleteBuildsInput = new BatchDeleteBuildsInput();
    $request->batchDeleteBuildsInput->ids = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = BatchDeleteBuildsXAmzTargetEnum::CODE_BUILD20161006_BATCH_DELETE_BUILDS;

    $response = $sdk->batchDeleteBuilds($request);

    if ($response->batchDeleteBuildsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->