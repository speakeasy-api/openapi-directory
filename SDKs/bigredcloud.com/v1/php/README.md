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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->accounts->accountsGet();

    if ($response->pageResultAccountDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [accountsGet](docs/accounts/README.md#accountsget) - Returns a list of company's Accounts. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

### [analysisCategories](docs/analysiscategories/README.md)

* [analysisCategoriesGet](docs/analysiscategories/README.md#analysiscategoriesget) - Returns a list of company's Analysis Categories. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### [bankAccounts](docs/bankaccounts/README.md)

* [bankAccountsDelete](docs/bankaccounts/README.md#bankaccountsdelete) - Removes an existing Bank Account.
* [bankAccountsGet](docs/bankaccounts/README.md#bankaccountsget) - Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.
* [bankAccountsPost](docs/bankaccounts/README.md#bankaccountspost) - Creates a new Bank Account.
* [bankAccountsProcessBatch](docs/bankaccounts/README.md#bankaccountsprocessbatch) - Processes a batch of Bank Accounts.
* [bankAccountsPut](docs/bankaccounts/README.md#bankaccountsput) - Updates an existing Bank Account.
* [getV1BankAccountsId](docs/bankaccounts/README.md#getv1bankaccountsid) - Returns information about a single Bank Account.

### [bookTranTypes](docs/booktrantypes/README.md)

* [bookTranTypesGet](docs/booktrantypes/README.md#booktrantypesget) - Returns a list of global Book Transactions' Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [cashPayments](docs/cashpayments/README.md)

* [cashPaymentsDelete](docs/cashpayments/README.md#cashpaymentsdelete) - Removes an existing Cash Payment.
* [cashPaymentsGet](docs/cashpayments/README.md#cashpaymentsget) - Returns a list of company's Cash Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [cashPaymentsPost](docs/cashpayments/README.md#cashpaymentspost) - Creates a new Cash Payment.
* [cashPaymentsProcessBatch](docs/cashpayments/README.md#cashpaymentsprocessbatch) - Processes a batch of Cash Payments.
* [cashPaymentsPut](docs/cashpayments/README.md#cashpaymentsput) - Updates an existing Cash Payment.
* [getV1CashPaymentsId](docs/cashpayments/README.md#getv1cashpaymentsid) - Returns information about a single Cash Payment.

### [cashReceipts](docs/cashreceipts/README.md)

* [cashReceiptsDelete](docs/cashreceipts/README.md#cashreceiptsdelete) - Removes an existing Cash Receipt.
* [cashReceiptsGet](docs/cashreceipts/README.md#cashreceiptsget) - Returns a list of company's Cash Receipts. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [cashReceiptsPost](docs/cashreceipts/README.md#cashreceiptspost) - Creates a new Cash Receipt.
* [cashReceiptsProcessBatch](docs/cashreceipts/README.md#cashreceiptsprocessbatch) - Processes a batch of Cash Receipts.
* [cashReceiptsPut](docs/cashreceipts/README.md#cashreceiptsput) - Updates an existing Cash Receipt.
* [getV1CashReceiptsId](docs/cashreceipts/README.md#getv1cashreceiptsid) - Returns information about a single Cash Receipt.

### [categoryTypes](docs/categorytypes/README.md)

* [categoryTypesGet](docs/categorytypes/README.md#categorytypesget) - Returns a list of company's Category Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [companySettings](docs/companysettings/README.md)

* [companySettingsGet](docs/companysettings/README.md#companysettingsget) - Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.

### [companySetupConfig](docs/companysetupconfig/README.md)

* [companySetupConfigGet](docs/companysetupconfig/README.md#companysetupconfigget) - Returns the company configuration settings.
* [companySetupConfigGetCompanyOptions](docs/companysetupconfig/README.md#companysetupconfiggetcompanyoptions) - Returns the company option setting.
* [companySetupConfigGetFinancialYear](docs/companysetupconfig/README.md#companysetupconfiggetfinancialyear) - Returns the financial year.

### [customers](docs/customers/README.md)

* [customersDelete](docs/customers/README.md#customersdelete) - Removes an existing Customer.
* [customersGet](docs/customers/README.md#customersget) - Returns a list of company's Customers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* [customersGetAccountTrans](docs/customers/README.md#customersgetaccounttrans) - Returns a list of Customer's account transactions.
* [customersGetOpeningBalance](docs/customers/README.md#customersgetopeningbalance) - Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* [customersGetOpeningBalanceList](docs/customers/README.md#customersgetopeningbalancelist) - Returns a list of Customer's opening balance transactions.
* [customersGetQuotes](docs/customers/README.md#customersgetquotes) - Returns a list of Customer's quotes.
* [customersPost](docs/customers/README.md#customerspost) - Creates a new Customer.
* [customersProcessBatch](docs/customers/README.md#customersprocessbatch) - Processes a batch of Customers.
* [customersPut](docs/customers/README.md#customersput) - Updates an existing Customer.
* [getV1CustomersId](docs/customers/README.md#getv1customersid) - Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.

### [email](docs/email/README.md)

* [emailSendEmailStatement](docs/email/README.md#emailsendemailstatement) - Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* [emailSendQuote](docs/email/README.md#emailsendquote) - Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* [emailSendSalesInvoice](docs/email/README.md#emailsendsalesinvoice) - Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.

### [ownerTypeGroups](docs/ownertypegroups/README.md)

* [ownerTypeGroupsGet](docs/ownertypegroups/README.md#ownertypegroupsget) - Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [ownerTypes](docs/ownertypes/README.md)

* [ownerTypesGet](docs/ownertypes/README.md#ownertypesget) - Returns a list of global Owner Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [payments](docs/payments/README.md)

* [paymentsDelete](docs/payments/README.md#paymentsdelete) - Removes an existing Payment.
* [paymentsGet](docs/payments/README.md#paymentsget) - Returns a list of company's Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [paymentsPost](docs/payments/README.md#paymentspost) - Creates a new Payment.
* [paymentsProcessBatch](docs/payments/README.md#paymentsprocessbatch) - Processes a batch of Payments.
* [paymentsPut](docs/payments/README.md#paymentsput) - Updates an existing Payment.
* [getV1PaymentsId](docs/payments/README.md#getv1paymentsid) - Returns information about a single Payments.

### [productTypes](docs/producttypes/README.md)

* [productTypesGet](docs/producttypes/README.md#producttypesget) - Returns a list of global Product Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [products](docs/products/README.md)

* [productsDelete](docs/products/README.md#productsdelete) - Removes an existing Product.
* [productsGet](docs/products/README.md#productsget) - Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.
* [productsPost](docs/products/README.md#productspost) - Creates a new Product.
* [productsProcessBatch](docs/products/README.md#productsprocessbatch) - Processes a batch of Products.
* [productsPut](docs/products/README.md#productsput) - Updates an existing Product.
* [getV1ProductsId](docs/products/README.md#getv1productsid) - Returns information about a single Product.

### [purchases](docs/purchases/README.md)

* [purchasesDelete](docs/purchases/README.md#purchasesdelete) - Removes an existing Purchase.
* [purchasesGet](docs/purchases/README.md#purchasesget) - Returns a list of company's Purchases. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [purchasesPost](docs/purchases/README.md#purchasespost) - Creates a new Purchase.
* [purchasesProcessBatch](docs/purchases/README.md#purchasesprocessbatch) - Processes a batch of Purchases.
* [purchasesPut](docs/purchases/README.md#purchasesput) - Updates an existing Purchase.
* [getV1PurchasesId](docs/purchases/README.md#getv1purchasesid) - Returns information about a single Purchases.

### [quote](docs/quote/README.md)

* [quoteClose](docs/quote/README.md#quoteclose) - Close a Quote.
* [quoteDelete](docs/quote/README.md#quotedelete) - Removes an existing Quote.
* [quoteGet](docs/quote/README.md#quoteget) - Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".
* [quotePost](docs/quote/README.md#quotepost) - Creates a new Quote.
* [quotePostCreateQuoteWithGeneratingReference](docs/quote/README.md#quotepostcreatequotewithgeneratingreference) - Creates a new Quote with auto generating reference.
* [quotePostGenerateSaleInvoice](docs/quote/README.md#quotepostgeneratesaleinvoice) - Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.
* [quoteProcessBatch](docs/quote/README.md#quoteprocessbatch) - Processes a batch of Quote.
* [quotePut](docs/quote/README.md#quoteput) - Updates an existing Quote.
* [quoteReopen](docs/quote/README.md#quotereopen) - Reopen a Quote.
* [getV1QuotesId](docs/quote/README.md#getv1quotesid) - Returns information about a single Quote.

### [sales](docs/sales/README.md)

* [salesGet](docs/sales/README.md#salesget) - Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### [salesCreditNotes](docs/salescreditnotes/README.md)

* [salesCreditNotesDelete](docs/salescreditnotes/README.md#salescreditnotesdelete) - Removes an existing Sales Credit Note.
* [salesCreditNotesGet](docs/salescreditnotes/README.md#salescreditnotesget) - Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [salesCreditNotesPost](docs/salescreditnotes/README.md#salescreditnotespost) - Creates a new Sales Credit Note.
* [salesCreditNotesProcessBatch](docs/salescreditnotes/README.md#salescreditnotesprocessbatch) - Processes a batch of Sales Credit Notes.
* [salesCreditNotesPut](docs/salescreditnotes/README.md#salescreditnotesput) - Updates an existing Sales Credit Note.
* [getV1SalesCreditNotesId](docs/salescreditnotes/README.md#getv1salescreditnotesid) - Returns information about a single Sales Credit Note.

### [salesEntries](docs/salesentries/README.md)

* [salesEntriesDelete](docs/salesentries/README.md#salesentriesdelete) - Removes an existing Sales Entry.
* [salesEntriesGet](docs/salesentries/README.md#salesentriesget) - Returns a list of company's Sales Entries. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [salesEntriesPost](docs/salesentries/README.md#salesentriespost) - Creates a new Sales Entry.
* [salesEntriesProcessBatch](docs/salesentries/README.md#salesentriesprocessbatch) - Processes a batch of Sales Entries.
* [salesEntriesPut](docs/salesentries/README.md#salesentriesput) - Updates an existing Sales Entry.
* [getV1SalesEntriesId](docs/salesentries/README.md#getv1salesentriesid) - Returns information about a single Sales Entry.

### [salesInvoices](docs/salesinvoices/README.md)

* [salesInvoicesDelete](docs/salesinvoices/README.md#salesinvoicesdelete) - Removes an existing Sales Invoice.
* [salesInvoicesGet](docs/salesinvoices/README.md#salesinvoicesget) - Returns a list of company's Sales Invoices. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [salesInvoicesPost](docs/salesinvoices/README.md#salesinvoicespost) - Creates a new Sales Invoice.
* [salesInvoicesPostCreateSaleInvoiceWithGeneratingReference](docs/salesinvoices/README.md#salesinvoicespostcreatesaleinvoicewithgeneratingreference) - Creates a new Sale Invoice with auto generating reference.
* [salesInvoicesProcessBatch](docs/salesinvoices/README.md#salesinvoicesprocessbatch) - Processes a batch of Sales Invoices.
* [salesInvoicesPut](docs/salesinvoices/README.md#salesinvoicesput) - Updates an existing Sales Invoice.
* [getV1SalesInvoicesId](docs/salesinvoices/README.md#getv1salesinvoicesid) - Returns information about a single Sales Invoice.

### [salesRep](docs/salesrep/README.md)

* [salesRepDelete](docs/salesrep/README.md#salesrepdelete) - Removes an existing Sale Rep.
* [salesRepGet](docs/salesrep/README.md#salesrepget) - Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".
* [salesRepPost](docs/salesrep/README.md#salesreppost) - Creates a new SaleRep.
* [salesRepProcessBatch](docs/salesrep/README.md#salesrepprocessbatch) - Processes a batch of Sale Rep.
* [salesRepPut](docs/salesrep/README.md#salesrepput) - Updates an existing Sale Rep.
* [getV1SalesRepsId](docs/salesrep/README.md#getv1salesrepsid) - Returns information about a single SaleRep.

### [suppliers](docs/suppliers/README.md)

* [suppliersDelete](docs/suppliers/README.md#suppliersdelete) - Removes an existing Supplier.
* [suppliersGet](docs/suppliers/README.md#suppliersget) - Returns a list of company's Suppliers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* [suppliersGetAccountTrans](docs/suppliers/README.md#suppliersgetaccounttrans) - Returns a list of Supplier's account transactions.
* [suppliersGetOpeningBalance](docs/suppliers/README.md#suppliersgetopeningbalance) - Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* [suppliersGetOpeningBalanceList](docs/suppliers/README.md#suppliersgetopeningbalancelist) - Returns a list of Supplier's opening balance transactions.
* [suppliersPost](docs/suppliers/README.md#supplierspost) - Creates a new Supplier.
* [suppliersProcessBatch](docs/suppliers/README.md#suppliersprocessbatch) - Processes a batch of Suppliers.
* [suppliersPut](docs/suppliers/README.md#suppliersput) - Updates an existing Supplier.
* [getV1SuppliersId](docs/suppliers/README.md#getv1suppliersid) - Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.

### [userDefinedFields](docs/userdefinedfields/README.md)

* [userDefinedFieldsGet](docs/userdefinedfields/README.md#userdefinedfieldsget) - Returns a list of company's User Defined Fields. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### [vatAnalysisTypes](docs/vatanalysistypes/README.md)

* [vatAnalysisTypesGet](docs/vatanalysistypes/README.md#vatanalysistypesget) - Returns a list of global Vat Analysis Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### [vatCategories](docs/vatcategories/README.md)

* [vatCategoriesGet](docs/vatcategories/README.md#vatcategoriesget) - Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* [vatCategoriesProcessVatRates](docs/vatcategories/README.md#vatcategoriesprocessvatrates) - Process Vat Rates

### [vatRates](docs/vatrates/README.md)

* [vatRatesGet](docs/vatrates/README.md#vatratesget) - Returns a list of company's Vat Rates. Supports OData querying protocol.
Filtering is allowed by "vatCategoryId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### [vatTypes](docs/vattypes/README.md)

* [vatTypesGet](docs/vattypes/README.md#vattypesget) - Returns a list of global Vat Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
