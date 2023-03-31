# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/exavault.com/2.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAccountRequest(
    ev_access_token="19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
    ev_api_key="exampleaccount-zwSuWUZ8S38h33qPS8v0s",
    include="masterUser",
)
    
res = s.account.get_account(req)

if res.account_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account

* `get_account` - Get account settings
* `update_account` - Update account settings

### activity

* `get_session_logs` - Get activity logs
* `get_webhook_logs` - Get webhook logs

### email

* `send_referral_email` - Send referral email to a given address
* `send_welcome_email` - Resend welcome email to specific user

### email_lists

* `add_email_list` - Create new email list
* `delete_email_list_by_id` - Delete an email group with given id
* `get_email_list_by_id` - Get individual email group
* `get_email_lists` - Get all email groups
* `update_email_list_by_id` - Update an email group

### form

* `delete_form_message_by_id` - Delete a receive form submission
* `get_form_by_id` - Get receive folder form by Id
* `get_form_by_share_hash` - Get receive folder form settings
* `get_form_entries` - Get form data entries for a receive
* `update_form_by_id` - Updates a form with given parameters

### notifications

* `add_notification` - Create a new notification
* `delete_notification_by_id` - Delete a notification
* `get_notification_by_id` - Get notification details
* `list_notifications` - Get a list of notifications
* `update_notification_by_id` - Update a notification

### recipients

* `resend_invitations_for_share` - Resend invitations to share recipients

### resources

* `add_folder` - Create a folder
* `compress_files` - Compress resources
* `copy_resources` - Copy resources
* `delete_resource_by_id` - Delete a Resource
* `delete_resources` - Delete Resources
* `download` - Download a file
* `extract_files` - Extract resources
* `get_preview_image` - Preview a file
* `get_resource_info` - Get Resource Properties
* `get_resource_info_by_id` - Get resource metadata
* `list_resource_contents` - List contents of folder
* `list_resources` - Get a list of all resources
* `move_resources` - Move resources
* `update_resource_by_id` - Rename a resource.
* `upload_file` - Upload a file

### ssh_keys

* `add_ssh_key` - Create a new SSH Key
* `delete_ssh_key` - Delete an SSH Key
* `get_ssh_key` - Get metadata for an SSH Key
* `get_ssh_keys_list` - Get metadata for a list of SSH Keys

### shares

* `add_share` - Creates a share
* `complete_direct_send` - Complete send files
* `delete_share_by_id` - Deactivate a share
* `get_share_by_id` - Get a share
* `list_shares` - Get a list of shares
* `update_share_by_id` - Update a share

### users

* `add_user` - Create a user
* `delete_user` - Delete a user
* `get_user_by_id` - Get info for a user
* `list_users` - Get a list of users
* `update_user` - Update a user

### webhooks

* `add_webhook` - Add A New Webhook
* `delete_webhook` - Delete a webhook
* `get_webhook_by_id` - Get info for a webhook
* `get_wehooks_list` - Get Webhooks List
* `regenerate_webhook_token` - Regenerate security token
* `resend_webhook_activity_entry` - Resend a webhook message
* `update_webhook` - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
