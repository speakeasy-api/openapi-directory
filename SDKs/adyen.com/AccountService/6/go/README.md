# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/AccountService/6/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountHolders.PostCloseAccountHolder(ctx, shared.CloseAccountHolderRequest{
        AccountHolderCode: "corrupti",
    }, operations.PostCloseAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseAccountHolderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccountHolders](docs/accountholders/README.md)

* [PostCloseAccountHolder](docs/accountholders/README.md#postcloseaccountholder) - Close an account holder
* [PostCloseStores](docs/accountholders/README.md#postclosestores) - Close stores
* [PostCreateAccountHolder](docs/accountholders/README.md#postcreateaccountholder) - Create an account holder
* [PostGetAccountHolder](docs/accountholders/README.md#postgetaccountholder) - Get an account holder
* [PostGetTaxForm](docs/accountholders/README.md#postgettaxform) - Get a tax form
* [PostSuspendAccountHolder](docs/accountholders/README.md#postsuspendaccountholder) - Suspend an account holder
* [PostUnSuspendAccountHolder](docs/accountholders/README.md#postunsuspendaccountholder) - Unsuspend an account holder
* [PostUpdateAccountHolder](docs/accountholders/README.md#postupdateaccountholder) - Update an account holder
* [PostUpdateAccountHolderState](docs/accountholders/README.md#postupdateaccountholderstate) - Update payout or processing state

### [Accounts](docs/accounts/README.md)

* [PostCloseAccount](docs/accounts/README.md#postcloseaccount) - Close an account
* [PostCreateAccount](docs/accounts/README.md#postcreateaccount) - Create an account
* [PostUpdateAccount](docs/accounts/README.md#postupdateaccount) - Update an account

### [Verification](docs/verification/README.md)

* [PostCheckAccountHolder](docs/verification/README.md#postcheckaccountholder) - Trigger verification
* [PostDeleteBankAccounts](docs/verification/README.md#postdeletebankaccounts) - Delete bank accounts
* [PostDeleteLegalArrangements](docs/verification/README.md#postdeletelegalarrangements) - Delete legal arrangements
* [PostDeletePayoutMethods](docs/verification/README.md#postdeletepayoutmethods) - Delete payout methods
* [PostDeleteShareholders](docs/verification/README.md#postdeleteshareholders) - Delete shareholders
* [PostDeleteSignatories](docs/verification/README.md#postdeletesignatories) - Delete signatories
* [PostGetUploadedDocuments](docs/verification/README.md#postgetuploadeddocuments) - Get documents
* [PostUploadDocument](docs/verification/README.md#postuploaddocument) - Upload a document
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
