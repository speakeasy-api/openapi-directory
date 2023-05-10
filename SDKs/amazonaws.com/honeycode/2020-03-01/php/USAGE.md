<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreateTableRowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreateTableRowsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CreateRowData;
use \OpenAPI\OpenAPI\Models\Shared\CellInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchCreateTableRowsRequest();
    $request->requestBody = new BatchCreateTableRowsRequestBody();
    $request->requestBody->clientRequestToken = 'corrupti';
    $request->requestBody->rowsToCreate = [
        new CreateRowData(),
        new CreateRowData(),
        new CreateRowData(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->tableId = 'error';
    $request->workbookId = 'deserunt';

    $response = $sdk->batchCreateTableRows($request);

    if ($response->batchCreateTableRowsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->