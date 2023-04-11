# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/ecommerce/9.1.2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apideck.com/ecommerce/9.1.2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CustomersAllRequest,
  CustomersAllResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CustomersAllRequest = {
  cursor: "corrupti",
  fields: "provident",
  filter: {
    email: "elon@musk.com",
    phoneNumber: "111-111-1111",
  },
  limit: 715190,
  raw: false,
  xApideckAppId: "quibusdam",
  xApideckConsumerId: "unde",
  xApideckServiceId: "nulla",
};

sdk.customers.customersAll(req).then((res: CustomersAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### customers

* `customersAll` - List Customers
* `customersOne` - Get Customer

### orders

* `ordersAll` - List Orders
* `ordersOne` - Get Order

### products

* `productsAll` - List Products
* `productsOne` - Get Product

### stores

* `storesOne` - Get Store
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

