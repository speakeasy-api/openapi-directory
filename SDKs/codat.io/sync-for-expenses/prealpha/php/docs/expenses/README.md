# expenses

## Overview

Create expense datasets and upload receipts.

### Available Operations

* [createExpenseDataset](#createexpensedataset) - Create expense-transactions
* [uploadAttachment](#uploadattachment) - Upload attachment

## createExpenseDataset

Create an expense transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExpenseDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateExpenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExpenseTransaction;
use \OpenAPI\OpenAPI\Models\Shared\ExpenseTransactionLine;
use \OpenAPI\OpenAPI\Models\Shared\RecordRef;
use \OpenAPI\OpenAPI\Models\Shared\ExpenseTransactionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExpenseDatasetRequest();
    $request->createExpenseRequest = new CreateExpenseRequest();
    $request->createExpenseRequest->items = [
        new ExpenseTransaction(),
        new ExpenseTransaction(),
        new ExpenseTransaction(),
    ];
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';

    $response = $sdk->expenses->createExpenseDataset($request);

    if ($response->createExpenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadAttachment

Creates an attachment in the accounting software against the given transactionId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadAttachmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadAttachmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadAttachmentRequest();
    $request->requestBody = new UploadAttachmentRequestBody();
    $request->requestBody->content = 'provident';
    $request->requestBody->requestBody = 'distinctio';
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->syncId = '6fb40d5e-b13e-11ed-afa1-0242ac120002';
    $request->transactionId = '336694d8-2dca-4cb5-a28d-3ccb83e55eee';

    $response = $sdk->expenses->uploadAttachment($request);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
