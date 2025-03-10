# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apideck.com/accounting/9.1.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BalanceSheetOneRequest(
    filter=shared.BalanceSheetFilter(
        end_date="2021-12-31",
        start_date="2021-01-01",
    ),
    pass_through={
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
    },
    raw=False,
    x_apideck_app_id="illum",
    x_apideck_consumer_id="vel",
    x_apideck_service_id="error",
)
    
res = s.balance_sheet.balance_sheet_one(req, operations.BalanceSheetOneSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_balance_sheet_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### balance_sheet

* `balance_sheet_one` - Get BalanceSheet

### bills

* `bills_add` - Create Bill
* `bills_all` - List Bills
* `bills_delete` - Delete Bill
* `bills_one` - Get Bill
* `bills_update` - Update Bill

### company_info

* `company_info_one` - Get company info

### credit_notes

* `credit_notes_add` - Create Credit Note
* `credit_notes_all` - List Credit Notes
* `credit_notes_delete` - Delete Credit Note
* `credit_notes_one` - Get Credit Note
* `credit_notes_update` - Update Credit Note

### customers

* `customers_add` - Create Customer
* `customers_all` - List Customers
* `customers_delete` - Delete Customer
* `customers_one` - Get Customer
* `customers_update` - Update Customer

### invoice_items

* `invoice_items_add` - Create Invoice Item
* `invoice_items_all` - List Invoice Items
* `invoice_items_delete` - Delete Invoice Item
* `invoice_items_one` - Get Invoice Item
* `invoice_items_update` - Update Invoice Item

### invoices

* `invoices_add` - Create Invoice
* `invoices_all` - List Invoices
* `invoices_delete` - Delete Invoice
* `invoices_one` - Get Invoice
* `invoices_update` - Update Invoice

### journal_entries

* `journal_entries_add` - Create Journal Entry
* `journal_entries_all` - List Journal Entries
* `journal_entries_delete` - Delete Journal Entry
* `journal_entries_one` - Get Journal Entry
* `journal_entries_update` - Update Journal Entry

### ledger_accounts

* `ledger_accounts_add` - Create Ledger Account
* `ledger_accounts_all` - List Ledger Accounts
* `ledger_accounts_delete` - Delete Ledger Account
* `ledger_accounts_one` - Get Ledger Account
* `ledger_accounts_update` - Update Ledger Account

### payments

* `payments_add` - Create Payment
* `payments_all` - List Payments
* `payments_delete` - Delete Payment
* `payments_one` - Get Payment
* `payments_update` - Update Payment

### profit_and_loss

* `profit_and_loss_one` - Get Profit and Loss

### suppliers

* `suppliers_add` - Create Supplier
* `suppliers_all` - List Suppliers
* `suppliers_delete` - Delete Supplier
* `suppliers_one` - Get Supplier
* `suppliers_update` - Update Supplier

### tax_rates

* `tax_rates_add` - Create Tax Rate
* `tax_rates_all` - List Tax Rates
* `tax_rates_delete` - Delete Tax Rate
* `tax_rates_one` - Get Tax Rate
* `tax_rates_update` - Update Tax Rate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
