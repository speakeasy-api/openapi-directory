# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/exavault.com/2.0/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccount(ctx, operations.GetAccountRequest{
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        Include: sdk.String("masterUser"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Account](docs/account/README.md)

* [GetAccount](docs/account/README.md#getaccount) - Get account settings
* [UpdateAccount](docs/account/README.md#updateaccount) - Update account settings

### [Activity](docs/activity/README.md)

* [GetSessionLogs](docs/activity/README.md#getsessionlogs) - Get activity logs
* [GetWebhookLogs](docs/activity/README.md#getwebhooklogs) - Get webhook logs

### [Email](docs/email/README.md)

* [SendReferralEmail](docs/email/README.md#sendreferralemail) - Send referral email to a given address
* [SendWelcomeEmail](docs/email/README.md#sendwelcomeemail) - Resend welcome email to specific user

### [EmailLists](docs/emaillists/README.md)

* [AddEmailList](docs/emaillists/README.md#addemaillist) - Create new email list
* [DeleteEmailListByID](docs/emaillists/README.md#deleteemaillistbyid) - Delete an email group with given id
* [GetEmailListByID](docs/emaillists/README.md#getemaillistbyid) - Get individual email group
* [GetEmailLists](docs/emaillists/README.md#getemaillists) - Get all email groups
* [UpdateEmailListByID](docs/emaillists/README.md#updateemaillistbyid) - Update an email group

### [Form](docs/form/README.md)

* [DeleteFormMessageByID](docs/form/README.md#deleteformmessagebyid) - Delete a receive form submission
* [GetFormByID](docs/form/README.md#getformbyid) - Get receive folder form by Id
* [GetFormByShareHash](docs/form/README.md#getformbysharehash) - Get receive folder form settings
* [GetFormEntries](docs/form/README.md#getformentries) - Get form data entries for a receive
* [UpdateFormByID](docs/form/README.md#updateformbyid) - Updates a form with given parameters

### [Notifications](docs/notifications/README.md)

* [AddNotification](docs/notifications/README.md#addnotification) - Create a new notification
* [DeleteNotificationByID](docs/notifications/README.md#deletenotificationbyid) - Delete a notification
* [GetNotificationByID](docs/notifications/README.md#getnotificationbyid) - Get notification details
* [ListNotifications](docs/notifications/README.md#listnotifications) - Get a list of notifications
* [UpdateNotificationByID](docs/notifications/README.md#updatenotificationbyid) - Update a notification

### [Recipients](docs/recipients/README.md)

* [ResendInvitationsForShare](docs/recipients/README.md#resendinvitationsforshare) - Resend invitations to share recipients

### [Resources](docs/resources/README.md)

* [AddFolder](docs/resources/README.md#addfolder) - Create a folder
* [CompressFiles](docs/resources/README.md#compressfiles) - Compress resources
* [CopyResources](docs/resources/README.md#copyresources) - Copy resources
* [DeleteResourceByID](docs/resources/README.md#deleteresourcebyid) - Delete a Resource
* [DeleteResources](docs/resources/README.md#deleteresources) - Delete Resources
* [Download](docs/resources/README.md#download) - Download a file
* [ExtractFiles](docs/resources/README.md#extractfiles) - Extract resources
* [GetPreviewImage](docs/resources/README.md#getpreviewimage) - Preview a file
* [GetResourceInfo](docs/resources/README.md#getresourceinfo) - Get Resource Properties
* [GetResourceInfoByID](docs/resources/README.md#getresourceinfobyid) - Get resource metadata
* [ListResourceContents](docs/resources/README.md#listresourcecontents) - List contents of folder
* [ListResources](docs/resources/README.md#listresources) - Get a list of all resources
* [MoveResources](docs/resources/README.md#moveresources) - Move resources
* [UpdateResourceByID](docs/resources/README.md#updateresourcebyid) - Rename a resource.
* [UploadFile](docs/resources/README.md#uploadfile) - Upload a file

### [SSHKeys](docs/sshkeys/README.md)

* [AddSSHKey](docs/sshkeys/README.md#addsshkey) - Create a new SSH Key
* [DeleteSSHKey](docs/sshkeys/README.md#deletesshkey) - Delete an SSH Key
* [GetSSHKey](docs/sshkeys/README.md#getsshkey) - Get metadata for an SSH Key
* [GetSSHKeysList](docs/sshkeys/README.md#getsshkeyslist) - Get metadata for a list of SSH Keys

### [Shares](docs/shares/README.md)

* [AddShare](docs/shares/README.md#addshare) - Creates a share
* [CompleteDirectSend](docs/shares/README.md#completedirectsend) - Complete send files
* [DeleteShareByID](docs/shares/README.md#deletesharebyid) - Deactivate a share
* [GetShareByID](docs/shares/README.md#getsharebyid) - Get a share
* [ListShares](docs/shares/README.md#listshares) - Get a list of shares
* [UpdateShareByID](docs/shares/README.md#updatesharebyid) - Update a share

### [Users](docs/users/README.md)

* [AddUser](docs/users/README.md#adduser) - Create a user
* [DeleteUser](docs/users/README.md#deleteuser) - Delete a user
* [GetUserByID](docs/users/README.md#getuserbyid) - Get info for a user
* [ListUsers](docs/users/README.md#listusers) - Get a list of users
* [UpdateUser](docs/users/README.md#updateuser) - Update a user

### [Webhooks](docs/webhooks/README.md)

* [AddWebhook](docs/webhooks/README.md#addwebhook) - Add A New Webhook
* [DeleteWebhook](docs/webhooks/README.md#deletewebhook) - Delete a webhook
* [GetWebhookByID](docs/webhooks/README.md#getwebhookbyid) - Get info for a webhook
* [GetWehooksList](docs/webhooks/README.md#getwehookslist) - Get Webhooks List
* [RegenerateWebhookToken](docs/webhooks/README.md#regeneratewebhooktoken) - Regenerate security token
* [ResendWebhookActivityEntry](docs/webhooks/README.md#resendwebhookactivityentry) - Resend a webhook message
* [UpdateWebhook](docs/webhooks/README.md#updatewebhook) - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
