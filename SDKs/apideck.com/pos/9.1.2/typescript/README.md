# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/pos/9.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/pos/9.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ItemsAddRequest,
  ItemsAddResponse
} from "openapi/dist/sdk/models/operations";
import {
  ItemPricingTypeEnum,
  ItemProductTypeEnum,
  ItemVariationsPricingTypeEnum,
  CurrencyEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ItemsAddRequest = {
  itemInput: {
    abbreviation: "Ch",
    absentAtLocationIds: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    available: true,
    availableForPickup: false,
    availableOnline: false,
    categories: [
      {
        imageIds: [
          "12345",
          "12345",
          "12345",
          "12345",
        ],
        name: "corrupti",
      },
      {
        imageIds: [
          "12345",
          "12345",
          "12345",
          "12345",
        ],
        name: "vel",
      },
      {
        imageIds: [
          "12345",
          "12345",
          "12345",
        ],
        name: "deserunt",
      },
    ],
    code: "11910345",
    cost: 2,
    deleted: true,
    description: "Hot Chocolate",
    hidden: true,
    id: "#cocoa",
    idempotencyKey: "random_string",
    name: "Cocoa",
    options: [
      {
        attributeId: "12345",
        id: "12345",
        name: "Option 1",
      },
      {
        attributeId: "12345",
        id: "12345",
        name: "Option 1",
      },
    ],
    presentAtAllLocations: false,
    priceAmount: 10,
    priceCurrency: CurrencyEnum.Usd,
    pricingType: ItemPricingTypeEnum.Fixed,
    productType: ItemProductTypeEnum.Regular,
    sku: "11910345",
    taxIds: [
      "magnam",
      "debitis",
    ],
    variations: [
      {
        name: "Variation",
        presentAtAllLocations: false,
        priceAmount: 10,
        priceCurrency: CurrencyEnum.Usd,
        pricingType: ItemVariationsPricingTypeEnum.Fixed,
        sequence: 1,
        sku: "11910345",
        stockable: false,
      },
    ],
  },
  raw: false,
  xApideckAppId: "delectus",
  xApideckConsumerId: "tempora",
  xApideckServiceId: "suscipit",
};

sdk.items.itemsAdd(req).then((res: ItemsAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

