# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### api

* `createApiApplication` - Create a new API Application

### accounts

* `addAccount` - Add a new account
* `getAccountById` - Retrieve the details of a fire.com Account
* `getAccounts` - List all fire.com Accounts

### authentication

* `authenticate` - Authenticate with the API.

### cards

* `blockCard` - Block a card
* `createNewCard` - Create a new debit card.
* `getListofCardTransactions` - List Card Transactions.
* `getListofCards` - View List of Cards.
* `unblockCard` - Unblock a card

### directDebits

* `activateMandate` - Activate a direct debit mandate
* `cancelMandateByUuid` - Cancel a direct debit mandate
* `getDirectDebitByUuid` - Get the details of a direct debit
* `getDirectDebitMandates` - List all direct debit mandates
* `getDirectDebitsForMandateUuid` - Get all DD payments associated with a direct debit mandate
* `getMandate` - Get direct debit mandate details
* `rejectDirectDebit` - Reject a direct debit payment
* `updateMandateAlias` - Update a direct debit mandate alias

### openBanking

* `getListOfAspsps` - Get list of ASPSPs / Banks
* `getPaymentDetails` - Get Payment Details
* `newPaymentRequest` - Create a Fire Open Payment request

### payeeBankAccounts

* `getPayees` - List all Payee Bank Accounts

### paymentBatches

* `addBankTransferBatchPayment` - Add a bank transfer payment to the batch.
* `addInternalTransferBatchPayment` - Add an internal transfer payment to the batch
* `cancelBatchPayment` - Cancel a batch
* `createBatchPayment` - Create a new batch of payments
* `deleteBankTransferBatchPayment` - Remove a Payment from the Batch (Bank Transfers)
* `deleteInternalTransferBatchPayment` - Remove a Payment from the Batch (Internal Transfer)
* `getBatches` - List batches
* `getDetailsSingleBatch` - Get details of a single Batch
* `getItemsBatchBankTransfer` - List items in a Batch
* `getItemsBatchInternalTrasnfer` - List items in a Batch
* `getListofApproversForBatch` - List Approvers for a Batch
* `submitBatch` - Submit a batch for approval

### transactions

* `getTransactionsByIdv1` - List transactions for an account (v1)
* `getTransactionsByIdv3` - List transactions for an account (v3)
* `getTransactionsFilteredById` - Filtered list of transactions for an account (v1)

### users

* `getUser` - Returns details of a specific fire.com user.
* `getUsers` - Returns list of all users on your fire.com account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
