<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchExecuteStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchExecuteStatementInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchExecuteStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchExecuteStatementRequest();
    $request->batchExecuteStatementInput = new BatchExecuteStatementInput();
    $request->batchExecuteStatementInput->clientToken = 'corrupti';
    $request->batchExecuteStatementInput->clusterIdentifier = 'provident';
    $request->batchExecuteStatementInput->database = 'distinctio';
    $request->batchExecuteStatementInput->dbUser = 'quibusdam';
    $request->batchExecuteStatementInput->secretArn = 'unde';
    $request->batchExecuteStatementInput->sqls = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->batchExecuteStatementInput->statementName = 'deserunt';
    $request->batchExecuteStatementInput->withEvent = false;
    $request->batchExecuteStatementInput->workgroupName = 'suscipit';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = BatchExecuteStatementXAmzTargetEnum::REDSHIFT_DATA_BATCH_EXECUTE_STATEMENT;

    $response = $sdk->batchExecuteStatement($request);

    if ($response->batchExecuteStatementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->