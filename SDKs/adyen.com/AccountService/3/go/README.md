# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/AccountService/3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.CloseAccountHolderRequest{
        AccountHolderCode: "corrupti",
    }

    ctx := context.Background()
    res, err := s.AccountHolders.PostCloseAccountHolder(ctx, req, operations.PostCloseAccountHolderSecurity{
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


### AccountHolders

* `PostCloseAccountHolder` - Close an account holder
* `PostCreateAccountHolder` - Create an account holder
* `PostGetAccountHolder` - Get an account holder
* `PostGetTaxForm` - Get a tax form
* `PostSuspendAccountHolder` - Suspend an account holder
* `PostUnSuspendAccountHolder` - Unsuspend an account holder
* `PostUpdateAccountHolder` - Update an account holder
* `PostUpdateAccountHolderState` - Update payout or processing state

### Accounts

* `PostCloseAccount` - Close an account
* `PostCreateAccount` - Create an account
* `PostUpdateAccount` - Update an account

### Verification

* `PostDeleteBankAccounts` - Delete bank accounts
* `PostDeleteLegalArrangements` - Delete legal arrangements
* `PostDeleteShareholders` - Delete shareholders
* `PostDeleteSignatories` - Delete signatories
* `PostGetUploadedDocuments` - Get documents
* `PostUploadDocument` - Upload a document
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
