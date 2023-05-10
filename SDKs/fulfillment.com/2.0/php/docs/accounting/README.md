# accounting

### Available Operations

* [getAccounting](#getaccounting) - List Order Accounting

## getAccounting

Retrieves accounting activity during the queried timespan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountingHydrateEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountingRequest();
    $request->fromDate = 'debitis';
    $request->hydrate = [
        GetAccountingHydrateEnum::ITEMS,
    ];
    $request->limit = 963663;
    $request->orderIds = [
        383441,
        477665,
    ];
    $request->page = 791725;
    $request->toDate = 'placeat';
    $request->warehouseIds = [
        479977,
        568045,
        392785,
    ];

    $requestSecurity = new GetAccountingSecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounting->getAccounting($request, $requestSecurity);

    if ($response->accountingArrayV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
