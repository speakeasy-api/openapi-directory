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


### balanceSheet

* `balanceSheetOne` - Get BalanceSheet

### bills

* `billsAdd` - Create Bill
* `billsAll` - List Bills
* `billsDelete` - Delete Bill
* `billsOne` - Get Bill
* `billsUpdate` - Update Bill

### companyInfo

* `companyInfoOne` - Get company info

### creditNotes

* `creditNotesAdd` - Create Credit Note
* `creditNotesAll` - List Credit Notes
* `creditNotesDelete` - Delete Credit Note
* `creditNotesOne` - Get Credit Note
* `creditNotesUpdate` - Update Credit Note

### customers

* `customersAdd` - Create Customer
* `customersAll` - List Customers
* `customersDelete` - Delete Customer
* `customersOne` - Get Customer
* `customersUpdate` - Update Customer

### invoiceItems

* `invoiceItemsAdd` - Create Invoice Item
* `invoiceItemsAll` - List Invoice Items
* `invoiceItemsDelete` - Delete Invoice Item
* `invoiceItemsOne` - Get Invoice Item
* `invoiceItemsUpdate` - Update Invoice Item

### invoices

* `invoicesAdd` - Create Invoice
* `invoicesAll` - List Invoices
* `invoicesDelete` - Delete Invoice
* `invoicesOne` - Get Invoice
* `invoicesUpdate` - Update Invoice

### journalEntries

* `journalEntriesAdd` - Create Journal Entry
* `journalEntriesAll` - List Journal Entries
* `journalEntriesDelete` - Delete Journal Entry
* `journalEntriesOne` - Get Journal Entry
* `journalEntriesUpdate` - Update Journal Entry

### ledgerAccounts

* `ledgerAccountsAdd` - Create Ledger Account
* `ledgerAccountsAll` - List Ledger Accounts
* `ledgerAccountsDelete` - Delete Ledger Account
* `ledgerAccountsOne` - Get Ledger Account
* `ledgerAccountsUpdate` - Update Ledger Account

### payments

* `paymentsAdd` - Create Payment
* `paymentsAll` - List Payments
* `paymentsDelete` - Delete Payment
* `paymentsOne` - Get Payment
* `paymentsUpdate` - Update Payment

### profitAndLoss

* `profitAndLossOne` - Get Profit and Loss

### suppliers

* `suppliersAdd` - Create Supplier
* `suppliersAll` - List Suppliers
* `suppliersDelete` - Delete Supplier
* `suppliersOne` - Get Supplier
* `suppliersUpdate` - Update Supplier

### taxRates

* `taxRatesAdd` - Create Tax Rate
* `taxRatesAll` - List Tax Rates
* `taxRatesDelete` - Delete Tax Rate
* `taxRatesOne` - Get Tax Rate
* `taxRatesUpdate` - Update Tax Rate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
