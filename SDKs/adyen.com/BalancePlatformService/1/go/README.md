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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountHolders.GetAccountHoldersID(ctx, operations.GetAccountHoldersIDRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    }, operations.GetAccountHoldersIDSecurity{
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


### [AccountHolders](docs/accountholders/README.md)

* [GetAccountHoldersID](docs/accountholders/README.md#getaccountholdersid) - Get an account holder
* [GetAccountHoldersIDBalanceAccounts](docs/accountholders/README.md#getaccountholdersidbalanceaccounts) - Get all balance accounts of an account holder
* [PatchAccountHoldersID](docs/accountholders/README.md#patchaccountholdersid) - Update an account holder
* [PostAccountHolders](docs/accountholders/README.md#postaccountholders) - Create an account holder

### [BalanceAccounts](docs/balanceaccounts/README.md)

* [GetBalanceAccountsID](docs/balanceaccounts/README.md#getbalanceaccountsid) - Get a balance account
* [GetBalanceAccountsIDPaymentInstruments](docs/balanceaccounts/README.md#getbalanceaccountsidpaymentinstruments) - Get all payment instruments for a balance account
* [PatchBalanceAccountsID](docs/balanceaccounts/README.md#patchbalanceaccountsid) - Update a balance account
* [PostBalanceAccounts](docs/balanceaccounts/README.md#postbalanceaccounts) - Create a balance account

### [BankAccountValidation](docs/bankaccountvalidation/README.md)

* [PostValidateBankAccountIdentification](docs/bankaccountvalidation/README.md#postvalidatebankaccountidentification) - Validate a bank account

### [Documents](docs/documents/README.md)

* [DeleteDocumentsID](docs/documents/README.md#deletedocumentsid) - Delete a document
* [GetDocumentsID](docs/documents/README.md#getdocumentsid) - Get a document
* [PatchDocumentsID](docs/documents/README.md#patchdocumentsid) - Update a document
* [PostDocuments](docs/documents/README.md#postdocuments) - Upload a document for verification checks

### [LegalEntities](docs/legalentities/README.md)

* [GetLegalEntitiesID](docs/legalentities/README.md#getlegalentitiesid) - Get a legal entity
* [PatchLegalEntitiesID](docs/legalentities/README.md#patchlegalentitiesid) - Update a legal entity
* [PostLegalEntities](docs/legalentities/README.md#postlegalentities) - Create a legal entity

### [PaymentInstrumentGroups](docs/paymentinstrumentgroups/README.md)

* [GetPaymentInstrumentGroupsID](docs/paymentinstrumentgroups/README.md#getpaymentinstrumentgroupsid) - Get a payment instrument group
* [GetPaymentInstrumentGroupsIDTransactionRules](docs/paymentinstrumentgroups/README.md#getpaymentinstrumentgroupsidtransactionrules) - Get all transaction rules for a payment instrument group
* [PostPaymentInstrumentGroups](docs/paymentinstrumentgroups/README.md#postpaymentinstrumentgroups) - Create a payment instrument group

### [PaymentInstruments](docs/paymentinstruments/README.md)

* [GetPaymentInstrumentsID](docs/paymentinstruments/README.md#getpaymentinstrumentsid) - Get a payment instrument
* [GetPaymentInstrumentsIDReveal](docs/paymentinstruments/README.md#getpaymentinstrumentsidreveal) - Get the PAN of a payment instrument
* [GetPaymentInstrumentsIDTransactionRules](docs/paymentinstruments/README.md#getpaymentinstrumentsidtransactionrules) - Get all transaction rules for a payment instrument
* [PatchPaymentInstrumentsID](docs/paymentinstruments/README.md#patchpaymentinstrumentsid) - Update a payment instrument
* [PostPaymentInstruments](docs/paymentinstruments/README.md#postpaymentinstruments) - Create a payment instrument

### [Platform](docs/platform/README.md)

* [GetBalancePlatformsID](docs/platform/README.md#getbalanceplatformsid) - Get a balance platform
* [GetBalancePlatformsIDAccountHolders](docs/platform/README.md#getbalanceplatformsidaccountholders) - Get all account holders under a balance platform

### [TransactionRules](docs/transactionrules/README.md)

* [DeleteTransactionRulesTransactionRuleID](docs/transactionrules/README.md#deletetransactionrulestransactionruleid) - Delete a transaction rule
* [GetTransactionRulesTransactionRuleID](docs/transactionrules/README.md#gettransactionrulestransactionruleid) - Get a transaction rule
* [PatchTransactionRulesTransactionRuleID](docs/transactionrules/README.md#patchtransactionrulestransactionruleid) - Update a transaction rule
* [PostTransactionRules](docs/transactionrules/README.md#posttransactionrules) - Create a transaction rule

### [TransferInstruments](docs/transferinstruments/README.md)

* [DeleteTransferInstrumentsID](docs/transferinstruments/README.md#deletetransferinstrumentsid) - Delete a transfer instrument
* [GetTransferInstrumentsID](docs/transferinstruments/README.md#gettransferinstrumentsid) - Get a transfer instrument
* [PatchTransferInstrumentsID](docs/transferinstruments/README.md#patchtransferinstrumentsid) - Update a transfer instrument
* [PostTransferInstruments](docs/transferinstruments/README.md#posttransferinstruments) - Create a transfer instrument
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
