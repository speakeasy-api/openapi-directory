<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteReadSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteReadSetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteReadSetRequest();
    $request->requestBody = new BatchDeleteReadSetRequestBody();
    $request->requestBody->ids = [
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
    $request->sequenceStoreId = 'suscipit';

    $response = $sdk->batchDeleteReadSet($request);

    if ($response->batchDeleteReadSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->