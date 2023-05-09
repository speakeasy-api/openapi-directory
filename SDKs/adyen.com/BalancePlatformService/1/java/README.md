# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountHoldersIdRequest;
import org.openapis.openapi.models.operations.GetAccountHoldersIdResponse;
import org.openapis.openapi.models.operations.GetAccountHoldersIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountHoldersIdRequest req = new GetAccountHoldersIdRequest("corrupti");            

            GetAccountHoldersIdResponse res = sdk.accountHolders.getAccountHoldersId(req, new GetAccountHoldersIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.accountHolder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountHolders](docs/accountholders/README.md)

* [getAccountHoldersId](docs/accountholders/README.md#getaccountholdersid) - Get an account holder
* [getAccountHoldersIdBalanceAccounts](docs/accountholders/README.md#getaccountholdersidbalanceaccounts) - Get all balance accounts of an account holder
* [patchAccountHoldersId](docs/accountholders/README.md#patchaccountholdersid) - Update an account holder
* [postAccountHolders](docs/accountholders/README.md#postaccountholders) - Create an account holder

### [balanceAccounts](docs/balanceaccounts/README.md)

* [getBalanceAccountsId](docs/balanceaccounts/README.md#getbalanceaccountsid) - Get a balance account
* [getBalanceAccountsIdPaymentInstruments](docs/balanceaccounts/README.md#getbalanceaccountsidpaymentinstruments) - Get all payment instruments for a balance account
* [patchBalanceAccountsId](docs/balanceaccounts/README.md#patchbalanceaccountsid) - Update a balance account
* [postBalanceAccounts](docs/balanceaccounts/README.md#postbalanceaccounts) - Create a balance account

### [bankAccountValidation](docs/bankaccountvalidation/README.md)

* [postValidateBankAccountIdentification](docs/bankaccountvalidation/README.md#postvalidatebankaccountidentification) - Validate a bank account

### [documents](docs/documents/README.md)

* [deleteDocumentsId](docs/documents/README.md#deletedocumentsid) - Delete a document
* [getDocumentsId](docs/documents/README.md#getdocumentsid) - Get a document
* [patchDocumentsId](docs/documents/README.md#patchdocumentsid) - Update a document
* [postDocuments](docs/documents/README.md#postdocuments) - Upload a document for verification checks

### [legalEntities](docs/legalentities/README.md)

* [getLegalEntitiesId](docs/legalentities/README.md#getlegalentitiesid) - Get a legal entity
* [patchLegalEntitiesId](docs/legalentities/README.md#patchlegalentitiesid) - Update a legal entity
* [postLegalEntities](docs/legalentities/README.md#postlegalentities) - Create a legal entity

### [paymentInstrumentGroups](docs/paymentinstrumentgroups/README.md)

* [getPaymentInstrumentGroupsId](docs/paymentinstrumentgroups/README.md#getpaymentinstrumentgroupsid) - Get a payment instrument group
* [getPaymentInstrumentGroupsIdTransactionRules](docs/paymentinstrumentgroups/README.md#getpaymentinstrumentgroupsidtransactionrules) - Get all transaction rules for a payment instrument group
* [postPaymentInstrumentGroups](docs/paymentinstrumentgroups/README.md#postpaymentinstrumentgroups) - Create a payment instrument group

### [paymentInstruments](docs/paymentinstruments/README.md)

* [getPaymentInstrumentsId](docs/paymentinstruments/README.md#getpaymentinstrumentsid) - Get a payment instrument
* [getPaymentInstrumentsIdReveal](docs/paymentinstruments/README.md#getpaymentinstrumentsidreveal) - Get the PAN of a payment instrument
* [getPaymentInstrumentsIdTransactionRules](docs/paymentinstruments/README.md#getpaymentinstrumentsidtransactionrules) - Get all transaction rules for a payment instrument
* [patchPaymentInstrumentsId](docs/paymentinstruments/README.md#patchpaymentinstrumentsid) - Update a payment instrument
* [postPaymentInstruments](docs/paymentinstruments/README.md#postpaymentinstruments) - Create a payment instrument

### [platform](docs/platform/README.md)

* [getBalancePlatformsId](docs/platform/README.md#getbalanceplatformsid) - Get a balance platform
* [getBalancePlatformsIdAccountHolders](docs/platform/README.md#getbalanceplatformsidaccountholders) - Get all account holders under a balance platform

### [transactionRules](docs/transactionrules/README.md)

* [deleteTransactionRulesTransactionRuleId](docs/transactionrules/README.md#deletetransactionrulestransactionruleid) - Delete a transaction rule
* [getTransactionRulesTransactionRuleId](docs/transactionrules/README.md#gettransactionrulestransactionruleid) - Get a transaction rule
* [patchTransactionRulesTransactionRuleId](docs/transactionrules/README.md#patchtransactionrulestransactionruleid) - Update a transaction rule
* [postTransactionRules](docs/transactionrules/README.md#posttransactionrules) - Create a transaction rule

### [transferInstruments](docs/transferinstruments/README.md)

* [deleteTransferInstrumentsId](docs/transferinstruments/README.md#deletetransferinstrumentsid) - Delete a transfer instrument
* [getTransferInstrumentsId](docs/transferinstruments/README.md#gettransferinstrumentsid) - Get a transfer instrument
* [patchTransferInstrumentsId](docs/transferinstruments/README.md#patchtransferinstrumentsid) - Update a transfer instrument
* [postTransferInstruments](docs/transferinstruments/README.md#posttransferinstruments) - Create a transfer instrument
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
