<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchExecuteStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchExecuteStatementInput;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\BatchExecuteStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchExecuteStatementRequest();
    $request->batchExecuteStatementInput = new BatchExecuteStatementInput();
    $request->batchExecuteStatementInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::TOTAL;
    $request->batchExecuteStatementInput->statements = [
        new BatchStatementRequest(),
        new BatchStatementRequest(),
        new BatchStatementRequest(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = BatchExecuteStatementXAmzTargetEnum::DYNAMO_DB20120810_BATCH_EXECUTE_STATEMENT;

    $response = $sdk->batchExecuteStatement($request);

    if ($response->batchExecuteStatementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->