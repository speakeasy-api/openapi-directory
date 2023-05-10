# invoices

## Overview

Operations about invoices

### Available Operations

* [getInvoices](#getinvoices) - List Invoices
* [getInvoicesId](#getinvoicesid) - Show Invoice

## getInvoices

List Invoices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvoicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvoicesRequest();
    $request->cursor = 'debitis';
    $request->perPage = 72434;

    $response = $sdk->invoices->getInvoices($request);

    if ($response->accountLineItemEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvoicesId

Show Invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvoicesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvoicesIdRequest();
    $request->id = 967795;

    $response = $sdk->invoices->getInvoicesId($request);

    if ($response->accountLineItemEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
