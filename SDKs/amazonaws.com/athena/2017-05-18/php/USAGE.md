<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetNamedQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetNamedQueryInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetNamedQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetNamedQueryRequest();
    $request->batchGetNamedQueryInput = new BatchGetNamedQueryInput();
    $request->batchGetNamedQueryInput->namedQueryIds = [
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
    $request->xAmzTarget = BatchGetNamedQueryXAmzTargetEnum::AMAZON_ATHENA_BATCH_GET_NAMED_QUERY;

    $response = $sdk->batchGetNamedQuery($request);

    if ($response->batchGetNamedQueryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->