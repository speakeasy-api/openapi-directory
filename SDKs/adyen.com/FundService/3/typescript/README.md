# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/FundService/3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/FundService/3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.AccountHolderBalanceRequest,
  PostAccountHolderBalanceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.AccountHolderBalanceRequest = {
  accountHolderCode: "corrupti",
};

sdk.general.postAccountHolderBalance(req).then((res: PostAccountHolderBalanceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `postAccountHolderBalance` - Get the balances of an account holder
* `postAccountHolderTransactionList` - Get a list of transactions
* `postDebitAccountHolder` - Send a direct debit request
* `postPayoutAccountHolder` - Pay out from an account to the account holder
* `postRefundFundsTransfer` - Refund a funds transfer
* `postRefundNotPaidOutTransfers` - Refund all transactions of an account since the most recent payout
* `postSetupBeneficiary` - Designate a beneficiary account and transfer the benefactor's current balance
* `postTransferFunds` - Transfer funds between platform accounts
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

