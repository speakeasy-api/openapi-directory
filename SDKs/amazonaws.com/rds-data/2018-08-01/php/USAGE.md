<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchExecuteStatementRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchExecuteStatementRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SqlParameter;
use \OpenAPI\OpenAPI\Models\Shared\TypeHintEnum;
use \OpenAPI\OpenAPI\Models\Shared\Field;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchExecuteStatementRequest();
    $request->requestBody = new BatchExecuteStatementRequestBody();
    $request->requestBody->database = 'corrupti';
    $request->requestBody->parameterSets = [
        [
            new SqlParameter(),
            new SqlParameter(),
            new SqlParameter(),
        ],
        [
            new SqlParameter(),
            new SqlParameter(),
            new SqlParameter(),
            new SqlParameter(),
        ],
        [
            new SqlParameter(),
            new SqlParameter(),
            new SqlParameter(),
        ],
    ];
    $request->requestBody->resourceArn = 'nulla';
    $request->requestBody->schema = 'corrupti';
    $request->requestBody->secretArn = 'illum';
    $request->requestBody->sql = 'vel';
    $request->requestBody->transactionId = 'error';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->batchExecuteStatement($request);

    if ($response->batchExecuteStatementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->