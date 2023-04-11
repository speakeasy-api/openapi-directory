# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/fulfillment.com/2.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/fulfillment.com/2.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountingRequest,
  GetAccountingResponse,
  GetAccountingHydrateEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAccountingRequest = {
  fromDate: "corrupti",
  hydrate: [
    GetAccountingHydrateEnum.Items,
    GetAccountingHydrateEnum.Items,
    GetAccountingHydrateEnum.Items,
  ],
  limit: 715190,
  orderIds: [
    602763,
    857946,
    544883,
    847252,
  ],
  page: 423655,
  toDate: "error",
  warehouseIds: [
    384382,
    437587,
    297534,
  ],
};

sdk.accounting.getAccounting(req).then((res: GetAccountingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounting

* `getAccounting` - List Order Accounting

### auth

* `postOauthAccessToken` - Generate an Access Token

### inventory

* `getInventory` - List of Item Inventories

### orders

* `deleteOrdersId` - Cancel an Order
* `getOrders` - List of Orders
* `getOrder` - Order Details
* `postOrders` - New Order

### partners

* `putOrdersIdShip` - Ship an Order
* `putOrdersIdStatus` - Update Order Status

### returns

* `getReturns` - List Returns
* `putReturns` - Inform us of an RMA

### tracking

* `getTrack` - Tracking

### users

* `getUsersMe` - About Me
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

