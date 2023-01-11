<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ItemsAddRequest, ItemsAddResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: ItemsAddRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    raw: false,
  },
  headers: {
    xApideckAppId: "voluptas",
    xApideckConsumerId: "culpa",
    xApideckServiceId: "expedita",
  },
  request: {
    abbreviation: "consequuntur",
    absentAtLocationIds: [
      "expedita",
      "voluptas",
    ],
    available: true,
    availableForPickup: false,
    availableOnline: true,
    categories: [
      "dicta",
      "debitis",
      "voluptatum",
    ],
    code: "et",
    cost: 11.100000,
    deleted: false,
    description: "voluptate",
    hidden: true,
    id: "vitae",
    idempotencyKey: "totam",
    modifierGroups: [
      "illum",
    ],
    name: "debitis",
    options: [
      "odio",
      "dolore",
    ],
    presentAtAllLocations: false,
    priceAmount: 57.099998,
    priceCurrency: "UGX",
    pricingType: "fixed",
    productType: "regular",
    sku: "est",
    taxIds: [
      "odit",
      "non",
      "voluptas",
    ],
    variations: [
      "aut",
      "illo",
    ],
  },
};

sdk.items.itemsAdd(req).then((res: ItemsAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->