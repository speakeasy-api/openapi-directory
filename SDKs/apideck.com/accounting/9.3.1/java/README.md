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
import org.openapis.openapi.models.operations.BalanceSheetOneRequest;
import org.openapis.openapi.models.operations.BalanceSheetOneResponse;
import org.openapis.openapi.models.operations.BalanceSheetOneSecurity;
import org.openapis.openapi.models.shared.BalanceSheetFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BalanceSheetOneRequest req = new BalanceSheetOneRequest("corrupti", "provident") {{
                filter = new BalanceSheetFilter() {{
                    endDate = "2021-12-31";
                    startDate = "2021-01-01";
                }};;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
                raw = false;
                xApideckServiceId = "error";
            }};            

            BalanceSheetOneResponse res = sdk.balanceSheet.balanceSheetOne(req, new BalanceSheetOneSecurity("deserunt") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBalanceSheetResponse != null) {
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


### [balanceSheet](docs/balancesheet/README.md)

* [balanceSheetOne](docs/balancesheet/README.md#balancesheetone) - Get BalanceSheet

### [bills](docs/bills/README.md)

* [billsAdd](docs/bills/README.md#billsadd) - Create Bill
* [billsAll](docs/bills/README.md#billsall) - List Bills
* [billsDelete](docs/bills/README.md#billsdelete) - Delete Bill
* [billsOne](docs/bills/README.md#billsone) - Get Bill
* [billsUpdate](docs/bills/README.md#billsupdate) - Update Bill

### [companyInfo](docs/companyinfo/README.md)

* [companyInfoOne](docs/companyinfo/README.md#companyinfoone) - Get company info

### [creditNotes](docs/creditnotes/README.md)

* [creditNotesAdd](docs/creditnotes/README.md#creditnotesadd) - Create Credit Note
* [creditNotesAll](docs/creditnotes/README.md#creditnotesall) - List Credit Notes
* [creditNotesDelete](docs/creditnotes/README.md#creditnotesdelete) - Delete Credit Note
* [creditNotesOne](docs/creditnotes/README.md#creditnotesone) - Get Credit Note
* [creditNotesUpdate](docs/creditnotes/README.md#creditnotesupdate) - Update Credit Note

### [customers](docs/customers/README.md)

* [customersAdd](docs/customers/README.md#customersadd) - Create Customer
* [customersAll](docs/customers/README.md#customersall) - List Customers
* [customersDelete](docs/customers/README.md#customersdelete) - Delete Customer
* [customersOne](docs/customers/README.md#customersone) - Get Customer
* [customersUpdate](docs/customers/README.md#customersupdate) - Update Customer

### [invoiceItems](docs/invoiceitems/README.md)

* [invoiceItemsAdd](docs/invoiceitems/README.md#invoiceitemsadd) - Create Invoice Item
* [invoiceItemsAll](docs/invoiceitems/README.md#invoiceitemsall) - List Invoice Items
* [invoiceItemsDelete](docs/invoiceitems/README.md#invoiceitemsdelete) - Delete Invoice Item
* [invoiceItemsOne](docs/invoiceitems/README.md#invoiceitemsone) - Get Invoice Item
* [invoiceItemsUpdate](docs/invoiceitems/README.md#invoiceitemsupdate) - Update Invoice Item

### [invoices](docs/invoices/README.md)

* [invoicesAdd](docs/invoices/README.md#invoicesadd) - Create Invoice
* [invoicesAll](docs/invoices/README.md#invoicesall) - List Invoices
* [invoicesDelete](docs/invoices/README.md#invoicesdelete) - Delete Invoice
* [invoicesOne](docs/invoices/README.md#invoicesone) - Get Invoice
* [invoicesUpdate](docs/invoices/README.md#invoicesupdate) - Update Invoice

### [journalEntries](docs/journalentries/README.md)

* [journalEntriesAdd](docs/journalentries/README.md#journalentriesadd) - Create Journal Entry
* [journalEntriesAll](docs/journalentries/README.md#journalentriesall) - List Journal Entries
* [journalEntriesDelete](docs/journalentries/README.md#journalentriesdelete) - Delete Journal Entry
* [journalEntriesOne](docs/journalentries/README.md#journalentriesone) - Get Journal Entry
* [journalEntriesUpdate](docs/journalentries/README.md#journalentriesupdate) - Update Journal Entry

### [ledgerAccounts](docs/ledgeraccounts/README.md)

* [ledgerAccountsAdd](docs/ledgeraccounts/README.md#ledgeraccountsadd) - Create Ledger Account
* [ledgerAccountsAll](docs/ledgeraccounts/README.md#ledgeraccountsall) - List Ledger Accounts
* [ledgerAccountsDelete](docs/ledgeraccounts/README.md#ledgeraccountsdelete) - Delete Ledger Account
* [ledgerAccountsOne](docs/ledgeraccounts/README.md#ledgeraccountsone) - Get Ledger Account
* [ledgerAccountsUpdate](docs/ledgeraccounts/README.md#ledgeraccountsupdate) - Update Ledger Account

### [payments](docs/payments/README.md)

* [paymentsAdd](docs/payments/README.md#paymentsadd) - Create Payment
* [paymentsAll](docs/payments/README.md#paymentsall) - List Payments
* [paymentsDelete](docs/payments/README.md#paymentsdelete) - Delete Payment
* [paymentsOne](docs/payments/README.md#paymentsone) - Get Payment
* [paymentsUpdate](docs/payments/README.md#paymentsupdate) - Update Payment

### [profitAndLoss](docs/profitandloss/README.md)

* [profitAndLossOne](docs/profitandloss/README.md#profitandlossone) - Get Profit and Loss

### [suppliers](docs/suppliers/README.md)

* [suppliersAdd](docs/suppliers/README.md#suppliersadd) - Create Supplier
* [suppliersAll](docs/suppliers/README.md#suppliersall) - List Suppliers
* [suppliersDelete](docs/suppliers/README.md#suppliersdelete) - Delete Supplier
* [suppliersOne](docs/suppliers/README.md#suppliersone) - Get Supplier
* [suppliersUpdate](docs/suppliers/README.md#suppliersupdate) - Update Supplier

### [taxRates](docs/taxrates/README.md)

* [taxRatesAdd](docs/taxrates/README.md#taxratesadd) - Create Tax Rate
* [taxRatesAll](docs/taxrates/README.md#taxratesall) - List Tax Rates
* [taxRatesDelete](docs/taxrates/README.md#taxratesdelete) - Delete Tax Rate
* [taxRatesOne](docs/taxrates/README.md#taxratesone) - Get Tax Rate
* [taxRatesUpdate](docs/taxrates/README.md#taxratesupdate) - Update Tax Rate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
