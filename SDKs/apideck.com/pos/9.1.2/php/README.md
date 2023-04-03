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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### items

* `itemsAdd` - Create Item
* `itemsAll` - List Items
* `itemsDelete` - Delete Item
* `itemsOne` - Get Item
* `itemsUpdate` - Update Item

### locations

* `locationsAdd` - Create Location
* `locationsAll` - List Locations
* `locationsDelete` - Delete Location
* `locationsOne` - Get Location
* `locationsUpdate` - Update Location

### merchants

* `merchantsAdd` - Create Merchant
* `merchantsAll` - List Merchants
* `merchantsDelete` - Delete Merchant
* `merchantsOne` - Get Merchant
* `merchantsUpdate` - Update Merchant

### modifierGroups

* `modifierGroupsAdd` - Create Modifier Group
* `modifierGroupsAll` - List Modifier Groups
* `modifierGroupsDelete` - Delete Modifier Group
* `modifierGroupsOne` - Get Modifier Group
* `modifierGroupsUpdate` - Update Modifier Group

### modifiers

* `modifiersAdd` - Create Modifier
* `modifiersAll` - List Modifiers
* `modifiersDelete` - Delete Modifier
* `modifiersOne` - Get Modifier
* `modifiersUpdate` - Update Modifier

### orderTypes

* `orderTypesAdd` - Create Order Type
* `orderTypesAll` - List Order Types
* `orderTypesDelete` - Delete Order Type
* `orderTypesOne` - Get Order Type
* `orderTypesUpdate` - Update Order Type

### orders

* `ordersAdd` - Create Order
* `ordersAll` - List Orders
* `ordersDelete` - Delete Order
* `ordersOne` - Get Order
* `ordersPay` - Pay Order
* `ordersUpdate` - Update Order

### payments

* `paymentsAdd` - Create Payment
* `paymentsAll` - List Payments
* `paymentsDelete` - Delete Payment
* `paymentsOne` - Get Payment
* `paymentsUpdate` - Update Payment

### tenders

* `tendersAdd` - Create Tender
* `tendersAll` - List Tenders
* `tendersDelete` - Delete Tender
* `tendersOne` - Get Tender
* `tendersUpdate` - Update Tender
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
