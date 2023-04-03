# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/BalancePlatformService/1/go
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

    req := operations.GetAccountHoldersIDRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.AccountHolders.GetAccountHoldersID(ctx, req, operations.GetAccountHoldersIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolder != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AccountHolders

* `GetAccountHoldersID` - Get an account holder
* `GetAccountHoldersIDBalanceAccounts` - Get all balance accounts of an account holder
* `PatchAccountHoldersID` - Update an account holder
* `PostAccountHolders` - Create an account holder

### BalanceAccounts

* `GetBalanceAccountsID` - Get a balance account
* `GetBalanceAccountsIDPaymentInstruments` - Get all payment instruments for a balance account
* `PatchBalanceAccountsID` - Update a balance account
* `PostBalanceAccounts` - Create a balance account

### BankAccountValidation

* `PostValidateBankAccountIdentification` - Validate a bank account

### Documents

* `DeleteDocumentsID` - Delete a document
* `GetDocumentsID` - Get a document
* `PatchDocumentsID` - Update a document
* `PostDocuments` - Upload a document for verification checks

### LegalEntities

* `GetLegalEntitiesID` - Get a legal entity
* `PatchLegalEntitiesID` - Update a legal entity
* `PostLegalEntities` - Create a legal entity

### PaymentInstrumentGroups

* `GetPaymentInstrumentGroupsID` - Get a payment instrument group
* `GetPaymentInstrumentGroupsIDTransactionRules` - Get all transaction rules for a payment instrument group
* `PostPaymentInstrumentGroups` - Create a payment instrument group

### PaymentInstruments

* `GetPaymentInstrumentsID` - Get a payment instrument
* `GetPaymentInstrumentsIDReveal` - Get the reveal information of a payment instrument
* `GetPaymentInstrumentsIDTransactionRules` - Get all transaction rules for a payment instrument
* `PatchPaymentInstrumentsID` - Update a payment instrument
* `PostPaymentInstruments` - Create a payment instrument

### Platform

* `GetBalancePlatformsID` - Get a balance platform
* `GetBalancePlatformsIDAccountHolders` - Get all account holders under a balance platform

### TransactionRules

* `DeleteTransactionRulesTransactionRuleID` - Delete a transaction rule
* `GetTransactionRulesTransactionRuleID` - Get a transaction rule
* `PatchTransactionRulesTransactionRuleID` - Update a transaction rule
* `PostTransactionRules` - Create a transaction rule

### TransferInstruments

* `DeleteTransferInstrumentsID` - Delete a transfer instrument
* `GetTransferInstrumentsID` - Get a transfer instrument
* `PatchTransferInstrumentsID` - Update a transfer instrument
* `PostTransferInstruments` - Create a transfer instrument
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
