<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetItemInput;
use \OpenAPI\OpenAPI\Models\Shared\KeysAndAttributes;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetItemRequest();
    $request->batchGetItemInput = new BatchGetItemInput();
    $request->batchGetItemInput->requestItems = [
        'provident' => new KeysAndAttributes(),
        'distinctio' => new KeysAndAttributes(),
        'quibusdam' => new KeysAndAttributes(),
    ];
    $request->requestItems = 'unde';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = BatchGetItemXAmzTargetEnum::DYNAMO_DB20111205_BATCH_GET_ITEM;

    $response = $sdk->batchGetItem($request);

    if ($response->batchGetItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->