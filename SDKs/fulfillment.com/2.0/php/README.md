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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounting](docs/accounting/README.md)

* [getAccounting](docs/accounting/README.md#getaccounting) - List Order Accounting

### [auth](docs/auth/README.md)

* [postOauthAccessToken](docs/auth/README.md#postoauthaccesstoken) - Generate an Access Token

### [inventory](docs/inventory/README.md)

* [getInventory](docs/inventory/README.md#getinventory) - List of Item Inventories

### [orders](docs/orders/README.md)

* [deleteOrdersId](docs/orders/README.md#deleteordersid) - Cancel an Order
* [getOrders](docs/orders/README.md#getorders) - List of Orders
* [getOrder](docs/orders/README.md#getorder) - Order Details
* [postOrders](docs/orders/README.md#postorders) - New Order

### [partners](docs/partners/README.md)

* [putOrdersIdShip](docs/partners/README.md#putordersidship) - Ship an Order
* [putOrdersIdStatus](docs/partners/README.md#putordersidstatus) - Update Order Status

### [returns](docs/returns/README.md)

* [getReturns](docs/returns/README.md#getreturns) - List Returns
* [putReturns](docs/returns/README.md#putreturns) - Inform us of an RMA

### [tracking](docs/tracking/README.md)

* [getTrack](docs/tracking/README.md#gettrack) - Tracking

### [users](docs/users/README.md)

* [getUsersMe](docs/users/README.md#getusersme) - About Me
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
