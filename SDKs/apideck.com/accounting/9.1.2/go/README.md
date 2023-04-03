# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/accounting/9.1.2/go
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

    req := operations.BalanceSheetOneRequest{
        Filter: &shared.BalanceSheetFilter{
            EndDate: "2021-12-31",
            StartDate: "2021-01-01",
        },
        PassThrough: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Raw: false,
        XApideckAppID: "illum",
        XApideckConsumerID: "vel",
        XApideckServiceID: "error",
    }

    ctx := context.Background()
    res, err := s.BalanceSheet.BalanceSheetOne(ctx, req, operations.BalanceSheetOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBalanceSheetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### BalanceSheet

* `BalanceSheetOne` - Get BalanceSheet

### Bills

* `BillsAdd` - Create Bill
* `BillsAll` - List Bills
* `BillsDelete` - Delete Bill
* `BillsOne` - Get Bill
* `BillsUpdate` - Update Bill

### CompanyInfo

* `CompanyInfoOne` - Get company info

### CreditNotes

* `CreditNotesAdd` - Create Credit Note
* `CreditNotesAll` - List Credit Notes
* `CreditNotesDelete` - Delete Credit Note
* `CreditNotesOne` - Get Credit Note
* `CreditNotesUpdate` - Update Credit Note

### Customers

* `CustomersAdd` - Create Customer
* `CustomersAll` - List Customers
* `CustomersDelete` - Delete Customer
* `CustomersOne` - Get Customer
* `CustomersUpdate` - Update Customer

### InvoiceItems

* `InvoiceItemsAdd` - Create Invoice Item
* `InvoiceItemsAll` - List Invoice Items
* `InvoiceItemsDelete` - Delete Invoice Item
* `InvoiceItemsOne` - Get Invoice Item
* `InvoiceItemsUpdate` - Update Invoice Item

### Invoices

* `InvoicesAdd` - Create Invoice
* `InvoicesAll` - List Invoices
* `InvoicesDelete` - Delete Invoice
* `InvoicesOne` - Get Invoice
* `InvoicesUpdate` - Update Invoice

### JournalEntries

* `JournalEntriesAdd` - Create Journal Entry
* `JournalEntriesAll` - List Journal Entries
* `JournalEntriesDelete` - Delete Journal Entry
* `JournalEntriesOne` - Get Journal Entry
* `JournalEntriesUpdate` - Update Journal Entry

### LedgerAccounts

* `LedgerAccountsAdd` - Create Ledger Account
* `LedgerAccountsAll` - List Ledger Accounts
* `LedgerAccountsDelete` - Delete Ledger Account
* `LedgerAccountsOne` - Get Ledger Account
* `LedgerAccountsUpdate` - Update Ledger Account

### Payments

* `PaymentsAdd` - Create Payment
* `PaymentsAll` - List Payments
* `PaymentsDelete` - Delete Payment
* `PaymentsOne` - Get Payment
* `PaymentsUpdate` - Update Payment

### ProfitAndLoss

* `ProfitAndLossOne` - Get Profit and Loss

### Suppliers

* `SuppliersAdd` - Create Supplier
* `SuppliersAll` - List Suppliers
* `SuppliersDelete` - Delete Supplier
* `SuppliersOne` - Get Supplier
* `SuppliersUpdate` - Update Supplier

### TaxRates

* `TaxRatesAdd` - Create Tax Rate
* `TaxRatesAll` - List Tax Rates
* `TaxRatesDelete` - Delete Tax Rate
* `TaxRatesOne` - Get Tax Rate
* `TaxRatesUpdate` - Update Tax Rate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
