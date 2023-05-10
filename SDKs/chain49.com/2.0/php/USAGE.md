<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressV2Request;
use \OpenAPI\OpenAPI\Models\Shared\DetailsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressV2Request();
    $request->address = '321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL';
    $request->blockchain = 'bitcoin';
    $request->contract = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
    $request->details = DetailsEnum::BASIC;
    $request->fromBlock = 10;
    $request->page = 1;
    $request->pageSize = 1000;
    $request->secondary = 'usd';
    $request->toBlock = 100;

    $response = $sdk->addresses->getAddressV2($request);

    if ($response->getAddressV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->