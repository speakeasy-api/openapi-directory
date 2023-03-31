# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/appwrite.io/client/0.9.3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AccountCreateRequestBody(
    email="Larue_Rau85@yahoo.com",
    name="corrupti",
    password="illum",
)
    
res = s.account.account_create(req, operations.AccountCreateSecurity(
    project="YOUR_API_KEY_HERE",
))

if res.user is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account

* `account_create` - Create Account
* `account_create_anonymous_session` - Create Anonymous Session
* `account_create_jwt` - Create Account JWT
* `account_create_o_auth2_session` - Create Account Session with OAuth2
* `account_create_recovery` - Create Password Recovery
* `account_create_session` - Create Account Session
* `account_create_verification` - Create Email Verification
* `account_delete` - Delete Account
* `account_delete_session` - Delete Account Session
* `account_delete_sessions` - Delete All Account Sessions
* `account_get` - Get Account
* `account_get_logs` - Get Account Logs
* `account_get_prefs` - Get Account Preferences
* `account_get_session` - Get Session By ID
* `account_get_sessions` - Get Account Sessions
* `account_update_email` - Update Account Email
* `account_update_name` - Update Account Name
* `account_update_password` - Update Account Password
* `account_update_prefs` - Update Account Preferences
* `account_update_recovery` - Complete Password Recovery
* `account_update_verification` - Complete Email Verification

### avatars

* `avatars_get_browser` - Get Browser Icon
* `avatars_get_credit_card` - Get Credit Card Icon
* `avatars_get_favicon` - Get Favicon
* `avatars_get_flag` - Get Country Flag
* `avatars_get_image` - Get Image from URL
* `avatars_get_initials` - Get User Initials
* `avatars_get_qr` - Get QR Code

### database

* `database_create_document` - Create Document
* `database_delete_document` - Delete Document
* `database_get_document` - Get Document
* `database_list_documents` - List Documents
* `database_update_document` - Update Document

### functions

* `functions_create_execution` - Create Execution
* `functions_get_execution` - Get Execution
* `functions_list_executions` - List Executions

### locale

* `locale_get` - Get User Locale
* `locale_get_continents` - List Continents
* `locale_get_countries` - List Countries
* `locale_get_countries_eu` - List EU Countries
* `locale_get_countries_phones` - List Countries Phone Codes
* `locale_get_currencies` - List Currencies
* `locale_get_languages` - List Languages

### storage

* `storage_create_file` - Create File
* `storage_delete_file` - Delete File
* `storage_get_file` - Get File
* `storage_get_file_download` - Get File for Download
* `storage_get_file_preview` - Get File Preview
* `storage_get_file_view` - Get File for View
* `storage_list_files` - List Files
* `storage_update_file` - Update File

### teams

* `teams_create` - Create Team
* `teams_create_membership` - Create Team Membership
* `teams_delete` - Delete Team
* `teams_delete_membership` - Delete Team Membership
* `teams_get` - Get Team
* `teams_get_memberships` - Get Team Memberships
* `teams_list` - List Teams
* `teams_update` - Update Team
* `teams_update_membership_roles` - Update Membership Roles
* `teams_update_membership_status` - Update Team Membership Status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
