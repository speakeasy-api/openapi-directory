# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/billingo.hu/3.0.7/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = shared.BankAccountInput(
    account_number="corrupti",
    account_number_iban="provident",
    currency="PLN",
    name="quibusdam",
    need_qr=False,
    swift="unde",
)
    
res = s.bank_account.create_bank_account(req)

if res.bank_account is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bank_account

* `create_bank_account` - Create a bank account
* `delete_bank_account` - Delete a bank account
* `get_bank_account` - Retrieve a bank account
* `list_bank_account` - List all bank account
* `update_bank_account` - Update a bank account

### currency

* `get_conversion_rate` - Get currencies exchange rate.

### document

* `cancel_document` - Cancel a document
* `create_document` - Create a document
* `create_document_from_proforma` - Create a document from proforma.
* `delete_payment` - Delete all payment history on document
* `download_document` - Download a document in PDF format.
* `get_document` - Retrieve a document
* `get_online_szamla_status` - Retrieve a document Online Számla status
* `get_payment` - Retrieve a payment histroy
* `get_public_url` - Retrieve a document download public url.
* `list_document` - List all documents
* `send_document` - Send invoice to given email adresses.
* `update_payment` - Update payment history

### document_block

* `list_document_block` - List all document blocks

### organization

* `get_organization_data` - Retrieve a organization data.

### partner

* `create_partner` - Create a partner
* `delete_partner` - Delete a partner
* `get_partner` - Retrieve a partner
* `list_partner` - List all partners
* `update_partner` - Update a partner

### product

* `create_product` - Create a product
* `delete_product` - Delete a product
* `get_product` - Retrieve a product
* `list_product` - List all product
* `update_product` - Update a product

### util

* `get_id` - Convert legacy ID to v3 ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
