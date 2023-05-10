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
use \OpenAPI\OpenAPI\Models\Operations\CustomersAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\EcommerceCustomersFilter;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersAllRequest();
    $request->cursor = 'corrupti';
    $request->fields = 'provident';
    $request->filter = new EcommerceCustomersFilter();
    $request->filter->email = 'elon@musk.com';
    $request->filter->phoneNumber = '111-111-1111';
    $request->limit = 715190;
    $request->raw = false;
    $request->xApideckAppId = 'quibusdam';
    $request->xApideckConsumerId = 'unde';
    $request->xApideckServiceId = 'nulla';

    $requestSecurity = new CustomersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersAll($request, $requestSecurity);

    if ($response->getEcommerceCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customers](docs/customers/README.md)

* [customersAll](docs/customers/README.md#customersall) - List Customers
* [customersOne](docs/customers/README.md#customersone) - Get Customer

### [orders](docs/orders/README.md)

* [ordersAll](docs/orders/README.md#ordersall) - List Orders
* [ordersOne](docs/orders/README.md#ordersone) - Get Order

### [products](docs/products/README.md)

* [productsAll](docs/products/README.md#productsall) - List Products
* [productsOne](docs/products/README.md#productsone) - Get Product

### [stores](docs/stores/README.md)

* [storesOne](docs/stores/README.md#storesone) - Get Store
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
