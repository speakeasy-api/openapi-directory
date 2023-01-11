<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateItemDraftRequest, CreateItemDraftResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateItemDraftRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  headers: {
    contentLanguage: "sit",
    xEBAYCMARKETPLACEID: "voluptas",
  },
  request: {
    categoryId: "culpa",
    charity: {
      charityId: "expedita",
      donationPercentage: "consequuntur",
    },
    condition: "dolor",
    format: "expedita",
    pricingSummary: {
      auctionReservePrice: {
        currency: "voluptas",
        value: "fugit",
      },
      auctionStartPrice: {
        currency: "et",
        value: "nihil",
      },
      price: {
        currency: "rerum",
        value: "dicta",
      },
    },
    product: {
      aspects: [
        {
          name: "voluptatum",
          values: [
            "ut",
          ],
        },
      ],
      brand: "dolorem",
      description: "et",
      epid: "voluptate",
      imageUrls: [
        "vitae",
        "totam",
        "dolores",
      ],
      title: "illum",
    },
  },
};

sdk.itemDraft.createItemDraft(req).then((res: CreateItemDraftResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->