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