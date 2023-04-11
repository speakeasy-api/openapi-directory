# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/ecosystem/0.0.6/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/ecosystem/0.0.6/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CategoriesAllRequest,
  CategoriesAllResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CategoriesAllRequest = {
  cursor: "corrupti",
  ecosystemId: "provident",
  limit: 715190,
};

sdk.category.categoriesAll(req).then((res: CategoriesAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### category

* `categoriesAll` - List categories
* `categoriesOne` - Get category
* `categoryListingsAll` - List category listings

### collection

* `collectionListingsAll` - List collection listings
* `collectionsAll` - List collections
* `collectionsOne` - Get collection

### ecosystem

* `ecosystemsOne` - Get ecosystem

### listing

* `listingsAll` - List listings
* `listingsOne` - Get listing

### product

* `productListingsAll` - List product listings
* `productsAll` - List products
* `productsOne` - Get product
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

