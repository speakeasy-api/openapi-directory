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

import org.openapis.openapi.models.operations.AccountsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountsGetResponse res = sdk.accounts.accountsGet();

            if (res.pageResultAccountDto.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `accountsGet` - Returns a list of company's Accounts. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

### analysisCategories

* `analysisCategoriesGet` - Returns a list of company's Analysis Categories. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### bankAccounts

* `bankAccountsDelete` - Removes an existing Bank Account.
* `bankAccountsGet` - Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.
* `bankAccountsPost` - Creates a new Bank Account.
* `bankAccountsProcessBatch` - Processes a batch of Bank Accounts.
* `bankAccountsPut` - Updates an existing Bank Account.
* `getV1BankAccountsId` - Returns information about a single Bank Account.

### bookTranTypes

* `bookTranTypesGet` - Returns a list of global Book Transactions' Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### cashPayments

* `cashPaymentsDelete` - Removes an existing Cash Payment.
* `cashPaymentsGet` - Returns a list of company's Cash Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `cashPaymentsPost` - Creates a new Cash Payment.
* `cashPaymentsProcessBatch` - Processes a batch of Cash Payments.
* `cashPaymentsPut` - Updates an existing Cash Payment.
* `getV1CashPaymentsId` - Returns information about a single Cash Payment.

### cashReceipts

* `cashReceiptsDelete` - Removes an existing Cash Receipt.
* `cashReceiptsGet` - Returns a list of company's Cash Receipts. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `cashReceiptsPost` - Creates a new Cash Receipt.
* `cashReceiptsProcessBatch` - Processes a batch of Cash Receipts.
* `cashReceiptsPut` - Updates an existing Cash Receipt.
* `getV1CashReceiptsId` - Returns information about a single Cash Receipt.

### categoryTypes

* `categoryTypesGet` - Returns a list of company's Category Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### companySettings

* `companySettingsGet` - Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.

### companySetupConfig

* `companySetupConfigGet` - Returns the company configuration settings.
* `companySetupConfigGetCompanyOptions` - Returns the company option setting.
* `companySetupConfigGetFinancialYear` - Returns the financial year.

### customers

* `customersDelete` - Removes an existing Customer.
* `customersGet` - Returns a list of company's Customers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* `customersGetAccountTrans` - Returns a list of Customer's account transactions.
* `customersGetOpeningBalance` - Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* `customersGetOpeningBalanceList` - Returns a list of Customer's opening balance transactions.
* `customersGetQuotes` - Returns a list of Customer's quotes.
* `customersPost` - Creates a new Customer.
* `customersProcessBatch` - Processes a batch of Customers.
* `customersPut` - Updates an existing Customer.
* `getV1CustomersId` - Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.

### email

* `emailSendEmailStatement` - Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* `emailSendQuote` - Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* `emailSendSalesInvoice` - Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.

### ownerTypeGroups

* `ownerTypeGroupsGet` - Returns a list of global Owner Type Groups. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### ownerTypes

* `ownerTypesGet` - Returns a list of global Owner Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### payments

* `paymentsDelete` - Removes an existing Payment.
* `paymentsGet` - Returns a list of company's Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `paymentsPost` - Creates a new Payment.
* `paymentsProcessBatch` - Processes a batch of Payments.
* `paymentsPut` - Updates an existing Payment.
* `getV1PaymentsId` - Returns information about a single Payments.

### productTypes

* `productTypesGet` - Returns a list of global Product Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### products

* `productsDelete` - Removes an existing Product.
* `productsGet` - Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.
* `productsPost` - Creates a new Product.
* `productsProcessBatch` - Processes a batch of Products.
* `productsPut` - Updates an existing Product.
* `getV1ProductsId` - Returns information about a single Product.

### purchases

* `purchasesDelete` - Removes an existing Purchase.
* `purchasesGet` - Returns a list of company's Purchases. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `purchasesPost` - Creates a new Purchase.
* `purchasesProcessBatch` - Processes a batch of Purchases.
* `purchasesPut` - Updates an existing Purchase.
* `getV1PurchasesId` - Returns information about a single Purchases.

### quote

* `quoteClose` - Close a Quote.
* `quoteDelete` - Removes an existing Quote.
* `quoteGet` - Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".
* `quotePost` - Creates a new Quote.
* `quotePostCreateQuoteWithGeneratingReference` - Creates a new Quote with auto generating reference.
* `quotePostGenerateSaleInvoice` - Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.
* `quoteProcessBatch` - Processes a batch of Quote.
* `quotePut` - Updates an existing Quote.
* `quoteReopen` - Reopen a Quote.
* `getV1QuotesId` - Returns information about a single Quote.

### sales

* `salesGet` - Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### salesCreditNotes

* `salesCreditNotesDelete` - Removes an existing Sales Credit Note.
* `salesCreditNotesGet` - Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `salesCreditNotesPost` - Creates a new Sales Credit Note.
* `salesCreditNotesProcessBatch` - Processes a batch of Sales Credit Notes.
* `salesCreditNotesPut` - Updates an existing Sales Credit Note.
* `getV1SalesCreditNotesId` - Returns information about a single Sales Credit Note.

### salesEntries

* `salesEntriesDelete` - Removes an existing Sales Entry.
* `salesEntriesGet` - Returns a list of company's Sales Entries. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `salesEntriesPost` - Creates a new Sales Entry.
* `salesEntriesProcessBatch` - Processes a batch of Sales Entries.
* `salesEntriesPut` - Updates an existing Sales Entry.
* `getV1SalesEntriesId` - Returns information about a single Sales Entry.

### salesInvoices

* `salesInvoicesDelete` - Removes an existing Sales Invoice.
* `salesInvoicesGet` - Returns a list of company's Sales Invoices. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* `salesInvoicesPost` - Creates a new Sales Invoice.
* `salesInvoicesPostCreateSaleInvoiceWithGeneratingReference` - Creates a new Sale Invoice with auto generating reference.
* `salesInvoicesProcessBatch` - Processes a batch of Sales Invoices.
* `salesInvoicesPut` - Updates an existing Sales Invoice.
* `getV1SalesInvoicesId` - Returns information about a single Sales Invoice.

### salesRep

* `salesRepDelete` - Removes an existing Sale Rep.
* `salesRepGet` - Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".
* `salesRepPost` - Creates a new SaleRep.
* `salesRepProcessBatch` - Processes a batch of Sale Rep.
* `salesRepPut` - Updates an existing Sale Rep.
* `getV1SalesRepsId` - Returns information about a single SaleRep.

### suppliers

* `suppliersDelete` - Removes an existing Supplier.
* `suppliersGet` - Returns a list of company's Suppliers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* `suppliersGetAccountTrans` - Returns a list of Supplier's account transactions.
* `suppliersGetOpeningBalance` - Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* `suppliersGetOpeningBalanceList` - Returns a list of Supplier's opening balance transactions.
* `suppliersPost` - Creates a new Supplier.
* `suppliersProcessBatch` - Processes a batch of Suppliers.
* `suppliersPut` - Updates an existing Supplier.
* `getV1SuppliersId` - Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.

### userDefinedFields

* `userDefinedFieldsGet` - Returns a list of company's User Defined Fields. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### vatAnalysisTypes

* `vatAnalysisTypesGet` - Returns a list of global Vat Analysis Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### vatCategories

* `vatCategoriesGet` - Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* `vatCategoriesProcessVatRates` - Process Vat Rates

### vatRates

* `vatRatesGet` - Returns a list of company's Vat Rates. Supports OData querying protocol.
Filtering is allowed by "vatCategoryId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### vatTypes

* `vatTypesGet` - Returns a list of global Vat Types. Supports OData querying protocol.
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
