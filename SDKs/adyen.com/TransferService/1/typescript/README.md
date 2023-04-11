# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/TransferService/1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/TransferService/1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetTransactionsRequest,
  GetTransactionsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetTransactionsRequest = {
  accountHolderId: "corrupti",
  balanceAccountId: "provident",
  balancePlatform: "distinctio",
  createdSince: "2021-03-11T23:22:42.658Z",
  createdUntil: "2021-05-14T08:28:11.899Z",
  cursor: "illum",
  limit: 423655,
  paymentInstrumentId: "error",
};

sdk.transactions.getTransactions(req).then((res: GetTransactionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### transactions

* `getTransactions` - Get all transactions
* `getTransactionsId` - Get a transaction

### transfers

* `postTransfers` - Transfer funds
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

