# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ebay.com/sell-listing/v1_beta.3.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ebay.com/sell-listing/v1_beta.3.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### itemDraft

* `createItemDraft` - This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

