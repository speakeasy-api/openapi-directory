# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/accounting/9.3.1/go
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
    res, err := s.BalanceSheet.BalanceSheetOne(ctx, operations.BalanceSheetOneRequest{
        Filter: &shared.BalanceSheetFilter{
            EndDate: sdk.String("2021-12-31"),
            StartDate: sdk.String("2021-01-01"),
        },
        PassThrough: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "illum",
        XApideckConsumerID: "vel",
        XApideckServiceID: sdk.String("error"),
    }, operations.BalanceSheetOneSecurity{
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


### [BalanceSheet](docs/balancesheet/README.md)

* [BalanceSheetOne](docs/balancesheet/README.md#balancesheetone) - Get BalanceSheet

### [Bills](docs/bills/README.md)

* [BillsAdd](docs/bills/README.md#billsadd) - Create Bill
* [BillsAll](docs/bills/README.md#billsall) - List Bills
* [BillsDelete](docs/bills/README.md#billsdelete) - Delete Bill
* [BillsOne](docs/bills/README.md#billsone) - Get Bill
* [BillsUpdate](docs/bills/README.md#billsupdate) - Update Bill

### [CompanyInfo](docs/companyinfo/README.md)

* [CompanyInfoOne](docs/companyinfo/README.md#companyinfoone) - Get company info

### [CreditNotes](docs/creditnotes/README.md)

* [CreditNotesAdd](docs/creditnotes/README.md#creditnotesadd) - Create Credit Note
* [CreditNotesAll](docs/creditnotes/README.md#creditnotesall) - List Credit Notes
* [CreditNotesDelete](docs/creditnotes/README.md#creditnotesdelete) - Delete Credit Note
* [CreditNotesOne](docs/creditnotes/README.md#creditnotesone) - Get Credit Note
* [CreditNotesUpdate](docs/creditnotes/README.md#creditnotesupdate) - Update Credit Note

### [Customers](docs/customers/README.md)

* [CustomersAdd](docs/customers/README.md#customersadd) - Create Customer
* [CustomersAll](docs/customers/README.md#customersall) - List Customers
* [CustomersDelete](docs/customers/README.md#customersdelete) - Delete Customer
* [CustomersOne](docs/customers/README.md#customersone) - Get Customer
* [CustomersUpdate](docs/customers/README.md#customersupdate) - Update Customer

### [InvoiceItems](docs/invoiceitems/README.md)

* [InvoiceItemsAdd](docs/invoiceitems/README.md#invoiceitemsadd) - Create Invoice Item
* [InvoiceItemsAll](docs/invoiceitems/README.md#invoiceitemsall) - List Invoice Items
* [InvoiceItemsDelete](docs/invoiceitems/README.md#invoiceitemsdelete) - Delete Invoice Item
* [InvoiceItemsOne](docs/invoiceitems/README.md#invoiceitemsone) - Get Invoice Item
* [InvoiceItemsUpdate](docs/invoiceitems/README.md#invoiceitemsupdate) - Update Invoice Item

### [Invoices](docs/invoices/README.md)

* [InvoicesAdd](docs/invoices/README.md#invoicesadd) - Create Invoice
* [InvoicesAll](docs/invoices/README.md#invoicesall) - List Invoices
* [InvoicesDelete](docs/invoices/README.md#invoicesdelete) - Delete Invoice
* [InvoicesOne](docs/invoices/README.md#invoicesone) - Get Invoice
* [InvoicesUpdate](docs/invoices/README.md#invoicesupdate) - Update Invoice

### [JournalEntries](docs/journalentries/README.md)

* [JournalEntriesAdd](docs/journalentries/README.md#journalentriesadd) - Create Journal Entry
* [JournalEntriesAll](docs/journalentries/README.md#journalentriesall) - List Journal Entries
* [JournalEntriesDelete](docs/journalentries/README.md#journalentriesdelete) - Delete Journal Entry
* [JournalEntriesOne](docs/journalentries/README.md#journalentriesone) - Get Journal Entry
* [JournalEntriesUpdate](docs/journalentries/README.md#journalentriesupdate) - Update Journal Entry

### [LedgerAccounts](docs/ledgeraccounts/README.md)

* [LedgerAccountsAdd](docs/ledgeraccounts/README.md#ledgeraccountsadd) - Create Ledger Account
* [LedgerAccountsAll](docs/ledgeraccounts/README.md#ledgeraccountsall) - List Ledger Accounts
* [LedgerAccountsDelete](docs/ledgeraccounts/README.md#ledgeraccountsdelete) - Delete Ledger Account
* [LedgerAccountsOne](docs/ledgeraccounts/README.md#ledgeraccountsone) - Get Ledger Account
* [LedgerAccountsUpdate](docs/ledgeraccounts/README.md#ledgeraccountsupdate) - Update Ledger Account

### [Payments](docs/payments/README.md)

* [PaymentsAdd](docs/payments/README.md#paymentsadd) - Create Payment
* [PaymentsAll](docs/payments/README.md#paymentsall) - List Payments
* [PaymentsDelete](docs/payments/README.md#paymentsdelete) - Delete Payment
* [PaymentsOne](docs/payments/README.md#paymentsone) - Get Payment
* [PaymentsUpdate](docs/payments/README.md#paymentsupdate) - Update Payment

### [ProfitAndLoss](docs/profitandloss/README.md)

* [ProfitAndLossOne](docs/profitandloss/README.md#profitandlossone) - Get Profit and Loss

### [Suppliers](docs/suppliers/README.md)

* [SuppliersAdd](docs/suppliers/README.md#suppliersadd) - Create Supplier
* [SuppliersAll](docs/suppliers/README.md#suppliersall) - List Suppliers
* [SuppliersDelete](docs/suppliers/README.md#suppliersdelete) - Delete Supplier
* [SuppliersOne](docs/suppliers/README.md#suppliersone) - Get Supplier
* [SuppliersUpdate](docs/suppliers/README.md#suppliersupdate) - Update Supplier

### [TaxRates](docs/taxrates/README.md)

* [TaxRatesAdd](docs/taxrates/README.md#taxratesadd) - Create Tax Rate
* [TaxRatesAll](docs/taxrates/README.md#taxratesall) - List Tax Rates
* [TaxRatesDelete](docs/taxrates/README.md#taxratesdelete) - Delete Tax Rate
* [TaxRatesOne](docs/taxrates/README.md#taxratesone) - Get Tax Rate
* [TaxRatesUpdate](docs/taxrates/README.md#taxratesupdate) - Update Tax Rate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
