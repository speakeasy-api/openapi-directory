# country

### Available Operations

* [getSalesTaxJurisdictions](#getsalestaxjurisdictions) - This method retrieves all the sales tax jurisdictions for the country that you specify in the <b>countryCode</b> path parameter. Countries with valid sales tax jurisdictions are Canada and the US.  <br/><br/>The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the <b>createOrReplaceSalesTax</b> in the <b>Account API</b> call to configure the tax tables for the jurisdictions you sell to.

## getSalesTaxJurisdictions

This method retrieves all the sales tax jurisdictions for the country that you specify in the <b>countryCode</b> path parameter. Countries with valid sales tax jurisdictions are Canada and the US.  <br/><br/>The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the <b>createOrReplaceSalesTax</b> in the <b>Account API</b> call to configure the tax tables for the jurisdictions you sell to.

### Example Usage

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
    $request->countryCode = 'MO';

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
