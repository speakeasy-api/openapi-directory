# connections

## Overview

Create and manage partner expense connection.

### Available Operations

* [createPartnerExpenseConnection](#createpartnerexpenseconnection) - Create Partner Expense connection

## createPartnerExpenseConnection

Creates a Partner Expense data connection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePartnerExpenseConnectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePartnerExpenseConnectionRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';

    $response = $sdk->connections->createPartnerExpenseConnection($request);

    if ($response->dataConnection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
