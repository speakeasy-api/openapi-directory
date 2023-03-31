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

import org.openapis.openapi.models.operations.GetAccountHoldersIdSecurity;
import org.openapis.openapi.models.operations.GetAccountHoldersIdPathParams;
import org.openapis.openapi.models.operations.GetAccountHoldersIdRequest;
import org.openapis.openapi.models.operations.GetAccountHoldersIdResponse;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountHoldersIdRequest req = new GetAccountHoldersIdRequest() {{
                security = new GetAccountHoldersIdSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GetAccountHoldersIdPathParams() {{
                    id = "corrupti";
                }};
            }};            

            GetAccountHoldersIdResponse res = sdk.accountHolders.getAccountHoldersId(req);

            if (res.accountHolder.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accountHolders

* `getAccountHoldersId` - Get an account holder
* `getAccountHoldersIdBalanceAccounts` - Get all balance accounts of an account holder
* `patchAccountHoldersId` - Update an account holder
* `postAccountHolders` - Create an account holder

### balanceAccounts

* `getBalanceAccountsId` - Get a balance account
* `getBalanceAccountsIdPaymentInstruments` - Get all payment instruments for a balance account
* `patchBalanceAccountsId` - Update a balance account
* `postBalanceAccounts` - Create a balance account

### bankAccountValidation

* `postValidateBankAccountIdentification` - Validate a bank account

### documents

* `deleteDocumentsId` - Delete a document
* `getDocumentsId` - Get a document
* `patchDocumentsId` - Update a document
* `postDocuments` - Upload a document for verification checks

### legalEntities

* `getLegalEntitiesId` - Get a legal entity
* `patchLegalEntitiesId` - Update a legal entity
* `postLegalEntities` - Create a legal entity

### paymentInstrumentGroups

* `getPaymentInstrumentGroupsId` - Get a payment instrument group
* `getPaymentInstrumentGroupsIdTransactionRules` - Get all transaction rules for a payment instrument group
* `postPaymentInstrumentGroups` - Create a payment instrument group

### paymentInstruments

* `getPaymentInstrumentsId` - Get a payment instrument
* `getPaymentInstrumentsIdReveal` - Get the reveal information of a payment instrument
* `getPaymentInstrumentsIdTransactionRules` - Get all transaction rules for a payment instrument
* `patchPaymentInstrumentsId` - Update a payment instrument
* `postPaymentInstruments` - Create a payment instrument

### platform

* `getBalancePlatformsId` - Get a balance platform
* `getBalancePlatformsIdAccountHolders` - Get all account holders under a balance platform

### transactionRules

* `deleteTransactionRulesTransactionRuleId` - Delete a transaction rule
* `getTransactionRulesTransactionRuleId` - Get a transaction rule
* `patchTransactionRulesTransactionRuleId` - Update a transaction rule
* `postTransactionRules` - Create a transaction rule

### transferInstruments

* `deleteTransferInstrumentsId` - Delete a transfer instrument
* `getTransferInstrumentsId` - Get a transfer instrument
* `patchTransferInstrumentsId` - Update a transfer instrument
* `postTransferInstruments` - Create a transfer instrument
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
