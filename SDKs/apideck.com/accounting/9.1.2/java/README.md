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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BalanceSheetOneSecurity;
import org.openapis.openapi.models.operations.BalanceSheetOneRequest;
import org.openapis.openapi.models.operations.BalanceSheetOneResponse;
import org.openapis.openapi.models.shared.BalanceSheetFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BalanceSheetOneRequest req = new BalanceSheetOneRequest() {{
                filter = new BalanceSheetFilter() {{
                    endDate = "2021-12-31";
                    startDate = "2021-01-01";
                }};
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("provident", "distinctio");
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                }};
                raw = false;
                xApideckAppId = "illum";
                xApideckConsumerId = "vel";
                xApideckServiceId = "error";
            }}            

            BalanceSheetOneResponse res = sdk.balanceSheet.balanceSheetOne(req, new BalanceSheetOneSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBalanceSheetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
