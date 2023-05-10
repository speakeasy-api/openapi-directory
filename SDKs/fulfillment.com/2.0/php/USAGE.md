<!-- Start SDK Example Usage -->
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
    $request->fromDate = 'corrupti';
    $request->hydrate = [
        GetAccountingHydrateEnum::ITEMS,
        GetAccountingHydrateEnum::ITEMS,
        GetAccountingHydrateEnum::ITEMS,
    ];
    $request->limit = 715190;
    $request->orderIds = [
        602763,
        857946,
        544883,
        847252,
    ];
    $request->page = 423655;
    $request->toDate = 'error';
    $request->warehouseIds = [
        384382,
        437587,
        297534,
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
<!-- End SDK Example Usage -->