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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiApplicationNewApiApplication;
import org.openapis.openapi.models.operations.CreateApiApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CreateApiApplicationNewApiApplication req = new CreateApiApplicationNewApiApplication() {{
                applicationName = "Batch Processing API";
                enabled = true;
                expiry = OffsetDateTime.parse("2019-08-22T07:48:56.460Z");
                ican = 592845L;
                numberOfPayeeApprovalsRequired = 1L;
                numberOfPaymentApprovalsRequired = 1L;
                permissions = new String[]{{
                    add("quibusdam"),
                    add("unde"),
                    add("nulla"),
                }};
            }};            

            CreateApiApplicationResponse res = sdk.api.createApiApplication(req);

            if (res.apiApplication != null) {
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


### [api](docs/api/README.md)

* [createApiApplication](docs/api/README.md#createapiapplication) - Create a new API Application

### [accounts](docs/accounts/README.md)

* [addAccount](docs/accounts/README.md#addaccount) - Add a new account
* [getAccountById](docs/accounts/README.md#getaccountbyid) - Retrieve the details of a fire.com Account
* [getAccounts](docs/accounts/README.md#getaccounts) - List all fire.com Accounts

### [authentication](docs/authentication/README.md)

* [authenticate](docs/authentication/README.md#authenticate) - Authenticate with the API.

### [cards](docs/cards/README.md)

* [blockCard](docs/cards/README.md#blockcard) - Block a card
* [createNewCard](docs/cards/README.md#createnewcard) - Create a new debit card.
* [getListofCardTransactions](docs/cards/README.md#getlistofcardtransactions) - List Card Transactions.
* [getListofCards](docs/cards/README.md#getlistofcards) - View List of Cards.
* [unblockCard](docs/cards/README.md#unblockcard) - Unblock a card

### [directDebits](docs/directdebits/README.md)

* [activateMandate](docs/directdebits/README.md#activatemandate) - Activate a direct debit mandate
* [cancelMandateByUuid](docs/directdebits/README.md#cancelmandatebyuuid) - Cancel a direct debit mandate
* [getDirectDebitByUuid](docs/directdebits/README.md#getdirectdebitbyuuid) - Get the details of a direct debit
* [getDirectDebitMandates](docs/directdebits/README.md#getdirectdebitmandates) - List all direct debit mandates
* [getDirectDebitsForMandateUuid](docs/directdebits/README.md#getdirectdebitsformandateuuid) - Get all DD payments associated with a direct debit mandate
* [getMandate](docs/directdebits/README.md#getmandate) - Get direct debit mandate details
* [rejectDirectDebit](docs/directdebits/README.md#rejectdirectdebit) - Reject a direct debit payment
* [updateMandateAlias](docs/directdebits/README.md#updatemandatealias) - Update a direct debit mandate alias

### [openBanking](docs/openbanking/README.md)

* [getListOfAspsps](docs/openbanking/README.md#getlistofaspsps) - Get list of ASPSPs / Banks
* [getPaymentDetails](docs/openbanking/README.md#getpaymentdetails) - Get Payment Details
* [newPaymentRequest](docs/openbanking/README.md#newpaymentrequest) - Create a Fire Open Payment request

### [payeeBankAccounts](docs/payeebankaccounts/README.md)

* [getPayees](docs/payeebankaccounts/README.md#getpayees) - List all Payee Bank Accounts

### [paymentBatches](docs/paymentbatches/README.md)

* [addBankTransferBatchPayment](docs/paymentbatches/README.md#addbanktransferbatchpayment) - Add a bank transfer payment to the batch.
* [addInternalTransferBatchPayment](docs/paymentbatches/README.md#addinternaltransferbatchpayment) - Add an internal transfer payment to the batch
* [addInternationalTransferBatchPayment](docs/paymentbatches/README.md#addinternationaltransferbatchpayment) - Add an international transfer payment to the batch.
* [cancelBatchPayment](docs/paymentbatches/README.md#cancelbatchpayment) - Cancel a batch
* [createBatchPayment](docs/paymentbatches/README.md#createbatchpayment) - Create a new batch of payments
* [deleteBankTransferBatchPayment](docs/paymentbatches/README.md#deletebanktransferbatchpayment) - Remove a Payment from the Batch (Bank Transfers)
* [deleteInternalTransferBatchPayment](docs/paymentbatches/README.md#deleteinternaltransferbatchpayment) - Remove a Payment from the Batch (Internal Transfer)
* [deleteInternationalTransferBatchPayment](docs/paymentbatches/README.md#deleteinternationaltransferbatchpayment) - Remove a Payment from the Batch (International Transfers)
* [getBatches](docs/paymentbatches/README.md#getbatches) - List batches
* [getDetailsSingleBatch](docs/paymentbatches/README.md#getdetailssinglebatch) - Get details of a single Batch
* [getItemsBatchBankTransfer](docs/paymentbatches/README.md#getitemsbatchbanktransfer) - List items in a Batch (Bank Transfers)
* [getItemsBatchInternalTrasnfer](docs/paymentbatches/README.md#getitemsbatchinternaltrasnfer) - List items in a Batch (Internal Transfers)
* [getItemsBatchInternationalTransfer](docs/paymentbatches/README.md#getitemsbatchinternationaltransfer) - List items in a Batch (International Transfers)
* [getListofApproversForBatch](docs/paymentbatches/README.md#getlistofapproversforbatch) - List Approvers for a Batch
* [submitBatch](docs/paymentbatches/README.md#submitbatch) - Submit a batch for approval

### [transactions](docs/transactions/README.md)

* [~~getTransactionsByAccountIdFiltered~~](docs/transactions/README.md#gettransactionsbyaccountidfiltered) - Filtered list of transactions for an account (v1) :warning: **Deprecated**
* [~~getTransactionsByAccountIdv1~~](docs/transactions/README.md#gettransactionsbyaccountidv1) - List transactions for an account (v1) :warning: **Deprecated**
* [getTransactionsByAccountIdv3](docs/transactions/README.md#gettransactionsbyaccountidv3) - List transactions for an account (v3)

### [users](docs/users/README.md)

* [getUser](docs/users/README.md#getuser) - Returns details of a specific fire.com user.
* [getUsers](docs/users/README.md#getusers) - Returns list of all users on your fire.com account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
