# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/bigredcloud.com/v1/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.AccountsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultAccountDto != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [AccountsGet](docs/accounts/README.md#accountsget) - Returns a list of company's Accounts. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

### [AnalysisCategories](docs/analysiscategories/README.md)

* [AnalysisCategoriesGet](docs/analysiscategories/README.md#analysiscategoriesget) - Returns a list of company's Analysis Categories. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### [BankAccounts](docs/bankaccounts/README.md)

* [BankAccountsDelete](docs/bankaccounts/README.md#bankaccountsdelete) - Removes an existing Bank Account.
* [BankAccountsGet](docs/bankaccounts/README.md#bankaccountsget) - Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.
* [BankAccountsPost](docs/bankaccounts/README.md#bankaccountspost) - Creates a new Bank Account.
* [BankAccountsProcessBatch](docs/bankaccounts/README.md#bankaccountsprocessbatch) - Processes a batch of Bank Accounts.
* [BankAccountsPut](docs/bankaccounts/README.md#bankaccountsput) - Updates an existing Bank Account.
* [GetV1BankAccountsID](docs/bankaccounts/README.md#getv1bankaccountsid) - Returns information about a single Bank Account.

### [BookTranTypes](docs/booktrantypes/README.md)

* [BookTranTypesGet](docs/booktrantypes/README.md#booktrantypesget) - Returns a list of global Book Transactions' Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [CashPayments](docs/cashpayments/README.md)

* [CashPaymentsDelete](docs/cashpayments/README.md#cashpaymentsdelete) - Removes an existing Cash Payment.
* [CashPaymentsGet](docs/cashpayments/README.md#cashpaymentsget) - Returns a list of company's Cash Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [CashPaymentsPost](docs/cashpayments/README.md#cashpaymentspost) - Creates a new Cash Payment.
* [CashPaymentsProcessBatch](docs/cashpayments/README.md#cashpaymentsprocessbatch) - Processes a batch of Cash Payments.
* [CashPaymentsPut](docs/cashpayments/README.md#cashpaymentsput) - Updates an existing Cash Payment.
* [GetV1CashPaymentsID](docs/cashpayments/README.md#getv1cashpaymentsid) - Returns information about a single Cash Payment.

### [CashReceipts](docs/cashreceipts/README.md)

* [CashReceiptsDelete](docs/cashreceipts/README.md#cashreceiptsdelete) - Removes an existing Cash Receipt.
* [CashReceiptsGet](docs/cashreceipts/README.md#cashreceiptsget) - Returns a list of company's Cash Receipts. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [CashReceiptsPost](docs/cashreceipts/README.md#cashreceiptspost) - Creates a new Cash Receipt.
* [CashReceiptsProcessBatch](docs/cashreceipts/README.md#cashreceiptsprocessbatch) - Processes a batch of Cash Receipts.
* [CashReceiptsPut](docs/cashreceipts/README.md#cashreceiptsput) - Updates an existing Cash Receipt.
* [GetV1CashReceiptsID](docs/cashreceipts/README.md#getv1cashreceiptsid) - Returns information about a single Cash Receipt.

### [CategoryTypes](docs/categorytypes/README.md)

* [CategoryTypesGet](docs/categorytypes/README.md#categorytypesget) - Returns a list of company's Category Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [CompanySettings](docs/companysettings/README.md)

* [CompanySettingsGet](docs/companysettings/README.md#companysettingsget) - Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.

### [CompanySetupConfig](docs/companysetupconfig/README.md)

* [CompanySetupConfigGet](docs/companysetupconfig/README.md#companysetupconfigget) - Returns the company configuration settings.
* [CompanySetupConfigGetCompanyOptions](docs/companysetupconfig/README.md#companysetupconfiggetcompanyoptions) - Returns the company option setting.
* [CompanySetupConfigGetFinancialYear](docs/companysetupconfig/README.md#companysetupconfiggetfinancialyear) - Returns the financial year.

### [Customers](docs/customers/README.md)

* [CustomersDelete](docs/customers/README.md#customersdelete) - Removes an existing Customer.
* [CustomersGet](docs/customers/README.md#customersget) - Returns a list of company's Customers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* [CustomersGetAccountTrans](docs/customers/README.md#customersgetaccounttrans) - Returns a list of Customer's account transactions.
* [CustomersGetOpeningBalance](docs/customers/README.md#customersgetopeningbalance) - Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* [CustomersGetOpeningBalanceList](docs/customers/README.md#customersgetopeningbalancelist) - Returns a list of Customer's opening balance transactions.
* [CustomersGetQuotes](docs/customers/README.md#customersgetquotes) - Returns a list of Customer's quotes.
* [CustomersPost](docs/customers/README.md#customerspost) - Creates a new Customer.
* [CustomersProcessBatch](docs/customers/README.md#customersprocessbatch) - Processes a batch of Customers.
* [CustomersPut](docs/customers/README.md#customersput) - Updates an existing Customer.
* [GetV1CustomersID](docs/customers/README.md#getv1customersid) - Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.

### [Email](docs/email/README.md)

* [EmailSendEmailStatement](docs/email/README.md#emailsendemailstatement) - Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* [EmailSendQuote](docs/email/README.md#emailsendquote) - Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* [EmailSendSalesInvoice](docs/email/README.md#emailsendsalesinvoice) - Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.

### [OwnerTypeGroups](docs/ownertypegroups/README.md)

* [OwnerTypeGroupsGet](docs/ownertypegroups/README.md#ownertypegroupsget) - Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [OwnerTypes](docs/ownertypes/README.md)

* [OwnerTypesGet](docs/ownertypes/README.md#ownertypesget) - Returns a list of global Owner Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [Payments](docs/payments/README.md)

* [PaymentsDelete](docs/payments/README.md#paymentsdelete) - Removes an existing Payment.
* [PaymentsGet](docs/payments/README.md#paymentsget) - Returns a list of company's Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [PaymentsPost](docs/payments/README.md#paymentspost) - Creates a new Payment.
* [PaymentsProcessBatch](docs/payments/README.md#paymentsprocessbatch) - Processes a batch of Payments.
* [PaymentsPut](docs/payments/README.md#paymentsput) - Updates an existing Payment.
* [GetV1PaymentsID](docs/payments/README.md#getv1paymentsid) - Returns information about a single Payments.

### [ProductTypes](docs/producttypes/README.md)

* [ProductTypesGet](docs/producttypes/README.md#producttypesget) - Returns a list of global Product Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [Products](docs/products/README.md)

* [ProductsDelete](docs/products/README.md#productsdelete) - Removes an existing Product.
* [ProductsGet](docs/products/README.md#productsget) - Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.
* [ProductsPost](docs/products/README.md#productspost) - Creates a new Product.
* [ProductsProcessBatch](docs/products/README.md#productsprocessbatch) - Processes a batch of Products.
* [ProductsPut](docs/products/README.md#productsput) - Updates an existing Product.
* [GetV1ProductsID](docs/products/README.md#getv1productsid) - Returns information about a single Product.

### [Purchases](docs/purchases/README.md)

* [PurchasesDelete](docs/purchases/README.md#purchasesdelete) - Removes an existing Purchase.
* [PurchasesGet](docs/purchases/README.md#purchasesget) - Returns a list of company's Purchases. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [PurchasesPost](docs/purchases/README.md#purchasespost) - Creates a new Purchase.
* [PurchasesProcessBatch](docs/purchases/README.md#purchasesprocessbatch) - Processes a batch of Purchases.
* [PurchasesPut](docs/purchases/README.md#purchasesput) - Updates an existing Purchase.
* [GetV1PurchasesID](docs/purchases/README.md#getv1purchasesid) - Returns information about a single Purchases.

### [Quote](docs/quote/README.md)

* [QuoteClose](docs/quote/README.md#quoteclose) - Close a Quote.
* [QuoteDelete](docs/quote/README.md#quotedelete) - Removes an existing Quote.
* [QuoteGet](docs/quote/README.md#quoteget) - Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".
* [QuotePost](docs/quote/README.md#quotepost) - Creates a new Quote.
* [QuotePostCreateQuoteWithGeneratingReference](docs/quote/README.md#quotepostcreatequotewithgeneratingreference) - Creates a new Quote with auto generating reference.
* [QuotePostGenerateSaleInvoice](docs/quote/README.md#quotepostgeneratesaleinvoice) - Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.
* [QuoteProcessBatch](docs/quote/README.md#quoteprocessbatch) - Processes a batch of Quote.
* [QuotePut](docs/quote/README.md#quoteput) - Updates an existing Quote.
* [QuoteReopen](docs/quote/README.md#quotereopen) - Reopen a Quote.
* [GetV1QuotesID](docs/quote/README.md#getv1quotesid) - Returns information about a single Quote.

### [Sales](docs/sales/README.md)

* [SalesGet](docs/sales/README.md#salesget) - Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### [SalesCreditNotes](docs/salescreditnotes/README.md)

* [SalesCreditNotesDelete](docs/salescreditnotes/README.md#salescreditnotesdelete) - Removes an existing Sales Credit Note.
* [SalesCreditNotesGet](docs/salescreditnotes/README.md#salescreditnotesget) - Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [SalesCreditNotesPost](docs/salescreditnotes/README.md#salescreditnotespost) - Creates a new Sales Credit Note.
* [SalesCreditNotesProcessBatch](docs/salescreditnotes/README.md#salescreditnotesprocessbatch) - Processes a batch of Sales Credit Notes.
* [SalesCreditNotesPut](docs/salescreditnotes/README.md#salescreditnotesput) - Updates an existing Sales Credit Note.
* [GetV1SalesCreditNotesID](docs/salescreditnotes/README.md#getv1salescreditnotesid) - Returns information about a single Sales Credit Note.

### [SalesEntries](docs/salesentries/README.md)

* [SalesEntriesDelete](docs/salesentries/README.md#salesentriesdelete) - Removes an existing Sales Entry.
* [SalesEntriesGet](docs/salesentries/README.md#salesentriesget) - Returns a list of company's Sales Entries. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [SalesEntriesPost](docs/salesentries/README.md#salesentriespost) - Creates a new Sales Entry.
* [SalesEntriesProcessBatch](docs/salesentries/README.md#salesentriesprocessbatch) - Processes a batch of Sales Entries.
* [SalesEntriesPut](docs/salesentries/README.md#salesentriesput) - Updates an existing Sales Entry.
* [GetV1SalesEntriesID](docs/salesentries/README.md#getv1salesentriesid) - Returns information about a single Sales Entry.

### [SalesInvoices](docs/salesinvoices/README.md)

* [SalesInvoicesDelete](docs/salesinvoices/README.md#salesinvoicesdelete) - Removes an existing Sales Invoice.
* [SalesInvoicesGet](docs/salesinvoices/README.md#salesinvoicesget) - Returns a list of company's Sales Invoices. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [SalesInvoicesPost](docs/salesinvoices/README.md#salesinvoicespost) - Creates a new Sales Invoice.
* [SalesInvoicesPostCreateSaleInvoiceWithGeneratingReference](docs/salesinvoices/README.md#salesinvoicespostcreatesaleinvoicewithgeneratingreference) - Creates a new Sale Invoice with auto generating reference.
* [SalesInvoicesProcessBatch](docs/salesinvoices/README.md#salesinvoicesprocessbatch) - Processes a batch of Sales Invoices.
* [SalesInvoicesPut](docs/salesinvoices/README.md#salesinvoicesput) - Updates an existing Sales Invoice.
* [GetV1SalesInvoicesID](docs/salesinvoices/README.md#getv1salesinvoicesid) - Returns information about a single Sales Invoice.

### [SalesRep](docs/salesrep/README.md)

* [SalesRepDelete](docs/salesrep/README.md#salesrepdelete) - Removes an existing Sale Rep.
* [SalesRepGet](docs/salesrep/README.md#salesrepget) - Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".
* [SalesRepPost](docs/salesrep/README.md#salesreppost) - Creates a new SaleRep.
* [SalesRepProcessBatch](docs/salesrep/README.md#salesrepprocessbatch) - Processes a batch of Sale Rep.
* [SalesRepPut](docs/salesrep/README.md#salesrepput) - Updates an existing Sale Rep.
* [GetV1SalesRepsID](docs/salesrep/README.md#getv1salesrepsid) - Returns information about a single SaleRep.

### [Suppliers](docs/suppliers/README.md)

* [SuppliersDelete](docs/suppliers/README.md#suppliersdelete) - Removes an existing Supplier.
* [SuppliersGet](docs/suppliers/README.md#suppliersget) - Returns a list of company's Suppliers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* [SuppliersGetAccountTrans](docs/suppliers/README.md#suppliersgetaccounttrans) - Returns a list of Supplier's account transactions.
* [SuppliersGetOpeningBalance](docs/suppliers/README.md#suppliersgetopeningbalance) - Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* [SuppliersGetOpeningBalanceList](docs/suppliers/README.md#suppliersgetopeningbalancelist) - Returns a list of Supplier's opening balance transactions.
* [SuppliersPost](docs/suppliers/README.md#supplierspost) - Creates a new Supplier.
* [SuppliersProcessBatch](docs/suppliers/README.md#suppliersprocessbatch) - Processes a batch of Suppliers.
* [SuppliersPut](docs/suppliers/README.md#suppliersput) - Updates an existing Supplier.
* [GetV1SuppliersID](docs/suppliers/README.md#getv1suppliersid) - Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.

### [UserDefinedFields](docs/userdefinedfields/README.md)

* [UserDefinedFieldsGet](docs/userdefinedfields/README.md#userdefinedfieldsget) - Returns a list of company's User Defined Fields. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### [VatAnalysisTypes](docs/vatanalysistypes/README.md)

* [VatAnalysisTypesGet](docs/vatanalysistypes/README.md#vatanalysistypesget) - Returns a list of global Vat Analysis Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [VatCategories](docs/vatcategories/README.md)

* [VatCategoriesGet](docs/vatcategories/README.md#vatcategoriesget) - Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* [VatCategoriesProcessVatRates](docs/vatcategories/README.md#vatcategoriesprocessvatrates) - Process Vat Rates

### [VatRates](docs/vatrates/README.md)

* [VatRatesGet](docs/vatrates/README.md#vatratesget) - Returns a list of company's Vat Rates. Supports OData querying protocol.
Filtering is allowed by "vatCategoryId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### [VatTypes](docs/vattypes/README.md)

* [VatTypesGet](docs/vattypes/README.md#vattypesget) - Returns a list of global Vat Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
