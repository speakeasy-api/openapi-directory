<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteWorldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteWorldsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteWorldsRequest();
    $request->requestBody = new BatchDeleteWorldsRequestBody();
    $request->requestBody->worlds = [
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

    $response = $sdk->batchDeleteWorlds($request);

    if ($response->batchDeleteWorldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->