<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountBalancesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountBalancesRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->orderBy = '-modifiedDate';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'corrupti';

    $response = $sdk->accountBalances->listAccountBalances($request);

    if ($response->accountBalances !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->