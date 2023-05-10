<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSalesTaxJurisdictionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSalesTaxJurisdictionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSalesTaxJurisdictionsRequest();
    $request->countryCode = 'MA';

    $requestSecurity = new GetSalesTaxJurisdictionsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->country->getSalesTaxJurisdictions($request, $requestSecurity);

    if ($response->salesTaxJurisdictions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->