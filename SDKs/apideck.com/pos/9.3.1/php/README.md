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
use \OpenAPI\OpenAPI\Models\Operations\ItemsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemCategoriesInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemOptions;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemPricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemVariationsInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemVariationsPricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ItemsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemsAddRequest();
    $request->itemInput = new ItemInput();
    $request->itemInput->abbreviation = 'Ch';
    $request->itemInput->absentAtLocationIds = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->itemInput->available = true;
    $request->itemInput->availableForPickup = false;
    $request->itemInput->availableOnline = false;
    $request->itemInput->categories = [
        new ItemCategoriesInput(),
        new ItemCategoriesInput(),
        new ItemCategoriesInput(),
    ];
    $request->itemInput->code = '11910345';
    $request->itemInput->cost = 2;
    $request->itemInput->deleted = true;
    $request->itemInput->description = 'Hot Chocolate';
    $request->itemInput->hidden = true;
    $request->itemInput->id = '#cocoa';
    $request->itemInput->idempotencyKey = 'random_string';
    $request->itemInput->isRevenue = false;
    $request->itemInput->name = 'Cocoa';
    $request->itemInput->options = [
        new ItemOptions(),
        new ItemOptions(),
        new ItemOptions(),
        new ItemOptions(),
    ];
    $request->itemInput->presentAtAllLocations = false;
    $request->itemInput->priceAmount = 10;
    $request->itemInput->priceCurrency = CurrencyEnum::USD;
    $request->itemInput->pricingType = ItemPricingTypeEnum::FIXED;
    $request->itemInput->productType = ItemProductTypeEnum::REGULAR;
    $request->itemInput->sku = '11910345';
    $request->itemInput->taxIds = [
        'illum',
        'vel',
        'error',
    ];
    $request->itemInput->useDefaultTaxRates = false;
    $request->itemInput->variations = [
        new ItemVariationsInput(),
        new ItemVariationsInput(),
        new ItemVariationsInput(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'suscipit';
    $request->xApideckConsumerId = 'iure';
    $request->xApideckServiceId = 'magnam';

    $requestSecurity = new ItemsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->items->itemsAdd($request, $requestSecurity);

    if ($response->createItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [items](docs/items/README.md)

* [itemsAdd](docs/items/README.md#itemsadd) - Create Item
* [itemsAll](docs/items/README.md#itemsall) - List Items
* [itemsDelete](docs/items/README.md#itemsdelete) - Delete Item
* [itemsOne](docs/items/README.md#itemsone) - Get Item
* [itemsUpdate](docs/items/README.md#itemsupdate) - Update Item

### [locations](docs/locations/README.md)

* [locationsAdd](docs/locations/README.md#locationsadd) - Create Location
* [locationsAll](docs/locations/README.md#locationsall) - List Locations
* [locationsDelete](docs/locations/README.md#locationsdelete) - Delete Location
* [locationsOne](docs/locations/README.md#locationsone) - Get Location
* [locationsUpdate](docs/locations/README.md#locationsupdate) - Update Location

### [merchants](docs/merchants/README.md)

* [merchantsAdd](docs/merchants/README.md#merchantsadd) - Create Merchant
* [merchantsAll](docs/merchants/README.md#merchantsall) - List Merchants
* [merchantsDelete](docs/merchants/README.md#merchantsdelete) - Delete Merchant
* [merchantsOne](docs/merchants/README.md#merchantsone) - Get Merchant
* [merchantsUpdate](docs/merchants/README.md#merchantsupdate) - Update Merchant

### [modifierGroups](docs/modifiergroups/README.md)

* [modifierGroupsAdd](docs/modifiergroups/README.md#modifiergroupsadd) - Create Modifier Group
* [modifierGroupsAll](docs/modifiergroups/README.md#modifiergroupsall) - List Modifier Groups
* [modifierGroupsDelete](docs/modifiergroups/README.md#modifiergroupsdelete) - Delete Modifier Group
* [modifierGroupsOne](docs/modifiergroups/README.md#modifiergroupsone) - Get Modifier Group
* [modifierGroupsUpdate](docs/modifiergroups/README.md#modifiergroupsupdate) - Update Modifier Group

### [modifiers](docs/modifiers/README.md)

* [modifiersAdd](docs/modifiers/README.md#modifiersadd) - Create Modifier
* [modifiersAll](docs/modifiers/README.md#modifiersall) - List Modifiers
* [modifiersDelete](docs/modifiers/README.md#modifiersdelete) - Delete Modifier
* [modifiersOne](docs/modifiers/README.md#modifiersone) - Get Modifier
* [modifiersUpdate](docs/modifiers/README.md#modifiersupdate) - Update Modifier

### [orderTypes](docs/ordertypes/README.md)

* [orderTypesAdd](docs/ordertypes/README.md#ordertypesadd) - Create Order Type
* [orderTypesAll](docs/ordertypes/README.md#ordertypesall) - List Order Types
* [orderTypesDelete](docs/ordertypes/README.md#ordertypesdelete) - Delete Order Type
* [orderTypesOne](docs/ordertypes/README.md#ordertypesone) - Get Order Type
* [orderTypesUpdate](docs/ordertypes/README.md#ordertypesupdate) - Update Order Type

### [orders](docs/orders/README.md)

* [ordersAdd](docs/orders/README.md#ordersadd) - Create Order
* [ordersAll](docs/orders/README.md#ordersall) - List Orders
* [ordersDelete](docs/orders/README.md#ordersdelete) - Delete Order
* [ordersOne](docs/orders/README.md#ordersone) - Get Order
* [ordersPay](docs/orders/README.md#orderspay) - Pay Order
* [ordersUpdate](docs/orders/README.md#ordersupdate) - Update Order

### [payments](docs/payments/README.md)

* [paymentsAdd](docs/payments/README.md#paymentsadd) - Create Payment
* [paymentsAll](docs/payments/README.md#paymentsall) - List Payments
* [paymentsDelete](docs/payments/README.md#paymentsdelete) - Delete Payment
* [paymentsOne](docs/payments/README.md#paymentsone) - Get Payment
* [paymentsUpdate](docs/payments/README.md#paymentsupdate) - Update Payment

### [tenders](docs/tenders/README.md)

* [tendersAdd](docs/tenders/README.md#tendersadd) - Create Tender
* [tendersAll](docs/tenders/README.md#tendersall) - List Tenders
* [tendersDelete](docs/tenders/README.md#tendersdelete) - Delete Tender
* [tendersOne](docs/tenders/README.md#tendersone) - Get Tender
* [tendersUpdate](docs/tenders/README.md#tendersupdate) - Update Tender
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
