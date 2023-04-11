# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/exavault.com/2.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/exavault.com/2.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAccountRequest,
  GetAccountResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAccountRequest = {
  evAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
  evApiKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
  include: "masterUser",
};

sdk.account.getAccount(req).then((res: GetAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account

* `getAccount` - Get account settings
* `updateAccount` - Update account settings

### activity

* `getSessionLogs` - Get activity logs
* `getWebhookLogs` - Get webhook logs

### email

* `sendReferralEmail` - Send referral email to a given address
* `sendWelcomeEmail` - Resend welcome email to specific user

### emailLists

* `addEmailList` - Create new email list
* `deleteEmailListById` - Delete an email group with given id
* `getEmailListById` - Get individual email group
* `getEmailLists` - Get all email groups
* `updateEmailListById` - Update an email group

### form

* `deleteFormMessageById` - Delete a receive form submission
* `getFormById` - Get receive folder form by Id
* `getFormByShareHash` - Get receive folder form settings
* `getFormEntries` - Get form data entries for a receive
* `updateFormById` - Updates a form with given parameters

### notifications

* `addNotification` - Create a new notification
* `deleteNotificationById` - Delete a notification
* `getNotificationById` - Get notification details
* `listNotifications` - Get a list of notifications
* `updateNotificationById` - Update a notification

### recipients

* `resendInvitationsForShare` - Resend invitations to share recipients

### resources

* `addFolder` - Create a folder
* `compressFiles` - Compress resources
* `copyResources` - Copy resources
* `deleteResourceById` - Delete a Resource
* `deleteResources` - Delete Resources
* `download` - Download a file
* `extractFiles` - Extract resources
* `getPreviewImage` - Preview a file
* `getResourceInfo` - Get Resource Properties
* `getResourceInfoById` - Get resource metadata
* `listResourceContents` - List contents of folder
* `listResources` - Get a list of all resources
* `moveResources` - Move resources
* `updateResourceById` - Rename a resource.
* `uploadFile` - Upload a file

### sshKeys

* `addSSHKey` - Create a new SSH Key
* `deleteSSHKey` - Delete an SSH Key
* `getSSHKey` - Get metadata for an SSH Key
* `getSSHKeysList` - Get metadata for a list of SSH Keys

### shares

* `addShare` - Creates a share
* `completeDirectSend` - Complete send files
* `deleteShareById` - Deactivate a share
* `getShareById` - Get a share
* `listShares` - Get a list of shares
* `updateShareById` - Update a share

### users

* `addUser` - Create a user
* `deleteUser` - Delete a user
* `getUserById` - Get info for a user
* `listUsers` - Get a list of users
* `updateUser` - Update a user

### webhooks

* `addWebhook` - Add A New Webhook
* `deleteWebhook` - Delete a webhook
* `getWebhookById` - Get info for a webhook
* `getWehooksList` - Get Webhooks List
* `regenerateWebhookToken` - Regenerate security token
* `resendWebhookActivityEntry` - Resend a webhook message
* `updateWebhook` - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

