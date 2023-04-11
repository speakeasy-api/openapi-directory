<!-- Start SDK Example Usage -->
```typescript
import {
  CreateItemDraftRequest,
  CreateItemDraftResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateItemDraftRequest = {
  contentLanguage: "corrupti",
  itemDraft: {
    categoryId: "provident",
    charity: {
      charityId: "distinctio",
      donationPercentage: "quibusdam",
    },
    condition: "unde",
    format: "nulla",
    pricingSummary: {
      auctionReservePrice: {
        currency: "corrupti",
        value: "illum",
      },
      auctionStartPrice: {
        currency: "vel",
        value: "error",
      },
      price: {
        currency: "deserunt",
        value: "suscipit",
      },
    },
    product: {
      aspects: [
        {
          name: "magnam",
          values: [
            "ipsa",
            "delectus",
            "tempora",
            "suscipit",
          ],
        },
        {
          name: "molestiae",
          values: [
            "placeat",
            "voluptatum",
            "iusto",
            "excepturi",
          ],
        },
      ],
      brand: "nisi",
      description: "recusandae",
      epid: "temporibus",
      imageUrls: [
        "quis",
      ],
      title: "Mr.",
    },
  },
  xEbayCMarketplaceId: "deserunt",
};

sdk.itemDraft.createItemDraft(req).then((res: CreateItemDraftResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->