# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/AccountService/5/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/AccountService/5/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CloseAccountHolderRequest,
  PostCloseAccountHolderResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CloseAccountHolderRequest = {
  accountHolderCode: "corrupti",
};

sdk.accountHolders.postCloseAccountHolder(req).then((res: PostCloseAccountHolderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accountHolders

* `postCloseAccountHolder` - Close an account holder
* `postCloseStores` - Close stores
* `postCreateAccountHolder` - Create an account holder
* `postGetAccountHolder` - Get an account holder
* `postGetTaxForm` - Get a tax form
* `postSuspendAccountHolder` - Suspend an account holder
* `postUnSuspendAccountHolder` - Unsuspend an account holder
* `postUpdateAccountHolder` - Update an account holder
* `postUpdateAccountHolderState` - Update payout or processing state

### accounts

* `postCloseAccount` - Close an account
* `postCreateAccount` - Create an account
* `postUpdateAccount` - Update an account

### verification

* `postCheckAccountHolder` - Trigger verification
* `postDeleteBankAccounts` - Delete bank accounts
* `postDeleteLegalArrangements` - Delete legal arrangements
* `postDeletePayoutMethods` - Delete payout methods
* `postDeleteShareholders` - Delete shareholders
* `postDeleteSignatories` - Delete signatories
* `postGetUploadedDocuments` - Get documents
* `postUploadDocument` - Upload a document
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

