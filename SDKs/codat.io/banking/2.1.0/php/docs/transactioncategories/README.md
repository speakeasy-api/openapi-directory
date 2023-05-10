# transactionCategories

## Overview

Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

### Available Operations

* [~~getTransactionCategory~~](#gettransactioncategory) - Get transaction category :warning: **Deprecated**
* [listTransactionCategories](#listtransactioncategories) - List all transaction categories

## ~~getTransactionCategory~~

Gets a specified bank transaction category for a given company

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionCategoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionCategoryRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->transactionCategoryId = 'quibusdam';

    $response = $sdk->transactionCategories->getTransactionCategory($request);

    if ($response->transactionCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTransactionCategories

Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transactionactivity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTransactionCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTransactionCategoriesRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->orderBy = '-modifiedDate';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'unde';

    $response = $sdk->transactionCategories->listTransactionCategories($request);

    if ($response->transactionCategories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
