# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanyInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompanyInfoRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->companyInfo->getCompanyInfo($request);

    if ($response->companyInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [companyInfo](docs/companyinfo/README.md)

* [getCompanyInfo](docs/companyinfo/README.md#getcompanyinfo) - Get company info

### [customers](docs/customers/README.md)

* [listCustomers](docs/customers/README.md#listcustomers) - List customers

### [disputes](docs/disputes/README.md)

* [listDisputes](docs/disputes/README.md#listdisputes) - List disputes

### [locations](docs/locations/README.md)

* [listLocations](docs/locations/README.md#listlocations) - List locations

### [orders](docs/orders/README.md)

* [listOrders](docs/orders/README.md#listorders) - List orders

### [payments](docs/payments/README.md)

* [listPaymentMethods](docs/payments/README.md#listpaymentmethods) - List payment methods
* [listPayments](docs/payments/README.md#listpayments) - List payments

### [products](docs/products/README.md)

* [listProductCategories](docs/products/README.md#listproductcategories) - List product categories
* [listProducts](docs/products/README.md#listproducts) - List products

### [taxComponents](docs/taxcomponents/README.md)

* [getTaxComponents](docs/taxcomponents/README.md#gettaxcomponents) - List tax components

### [transactions](docs/transactions/README.md)

* [listTransactions](docs/transactions/README.md#listtransactions) - List transactions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
