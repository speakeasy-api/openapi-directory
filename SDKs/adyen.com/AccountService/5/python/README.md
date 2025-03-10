# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/adyen.com/AccountService/5/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CloseAccountHolderRequest(
    account_holder_code="corrupti",
)
    
res = s.account_holders.post_close_account_holder(req, operations.PostCloseAccountHolderSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.close_account_holder_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account_holders

* `post_close_account_holder` - Close an account holder
* `post_close_stores` - Close stores
* `post_create_account_holder` - Create an account holder
* `post_get_account_holder` - Get an account holder
* `post_get_tax_form` - Get a tax form
* `post_suspend_account_holder` - Suspend an account holder
* `post_un_suspend_account_holder` - Unsuspend an account holder
* `post_update_account_holder` - Update an account holder
* `post_update_account_holder_state` - Update payout or processing state

### accounts

* `post_close_account` - Close an account
* `post_create_account` - Create an account
* `post_update_account` - Update an account

### verification

* `post_check_account_holder` - Trigger verification
* `post_delete_bank_accounts` - Delete bank accounts
* `post_delete_legal_arrangements` - Delete legal arrangements
* `post_delete_payout_methods` - Delete payout methods
* `post_delete_shareholders` - Delete shareholders
* `post_delete_signatories` - Delete signatories
* `post_get_uploaded_documents` - Get documents
* `post_upload_document` - Upload a document
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
