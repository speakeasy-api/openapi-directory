# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/files.com/0.0.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/files.com/0.0.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetActionNotificationExportResultsRequest,
  GetActionNotificationExportResultsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetActionNotificationExportResultsRequest = {
  actionNotificationExportId: 548814,
  cursor: "provident",
  perPage: 715190,
  userId: 844266,
};

sdk.actionNotificationExportResults.getActionNotificationExportResults(req).then((res: GetActionNotificationExportResultsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### actionNotificationExportResults

* `getActionNotificationExportResults` - List Action Notification Export Results

### actionNotificationExports

* `getActionNotificationExportsId` - Show Action Notification Export
* `postActionNotificationExports` - Create Action Notification Export

### actionWebhookFailures

* `postActionWebhookFailuresIdRetry` - retry Action Webhook Failure

### apiKey

* `apiKeyDeleteCurrent` - Delete current API key.  (Requires current API connection to be using an API key.)
* `apiKeyFindCurrent` - Show information about current API key.  (Requires current API connection to be using an API key.)
* `apiKeyUpdateCurrent` - Update current API key.  (Requires current API connection to be using an API key.)

### apiKeys

* `deleteApiKeysId` - Delete Api Key
* `getApiKeys` - List Api Keys
* `getApiKeysId` - Show Api Key
* `patchApiKeysId` - Update Api Key
* `postApiKeys` - Create Api Key

### apps

* `getApps` - List Apps

### as2IncomingMessages

* `getAs2IncomingMessages` - List As2 Incoming Messages

### as2OutgoingMessages

* `getAs2OutgoingMessages` - List As2 Outgoing Messages

### as2Partners

* `deleteAs2PartnersId` - Delete As2 Partner
* `getAs2Partners` - List As2 Partners
* `getAs2PartnersId` - Show As2 Partner
* `patchAs2PartnersId` - Update As2 Partner
* `postAs2Partners` - Create As2 Partner

### as2Stations

* `deleteAs2StationsId` - Delete As2 Station
* `getAs2Stations` - List As2 Stations
* `getAs2StationsId` - Show As2 Station
* `patchAs2StationsId` - Update As2 Station
* `postAs2Stations` - Create As2 Station

### automationRuns

* `getAutomationRuns` - List Automation Runs
* `getAutomationRunsId` - Show Automation Run

### automations

* `deleteAutomationsId` - Delete Automation
* `getAutomations` - List Automations
* `getAutomationsId` - Show Automation
* `patchAutomationsId` - Update Automation
* `postAutomations` - Create Automation

### bandwidthSnapshots

* `getBandwidthSnapshots` - List Bandwidth Snapshots

### behaviors

* `behaviorListForPath` - List Behaviors by path
* `deleteBehaviorsId` - Delete Behavior
* `getBehaviors` - List Behaviors
* `getBehaviorsId` - Show Behavior
* `patchBehaviorsId` - Update Behavior
* `postBehaviors` - Create Behavior
* `postBehaviorsWebhookTest` - Test webhook.

### bundleDownloads

* `getBundleDownloads` - List Bundle Downloads

### bundleNotifications

* `deleteBundleNotificationsId` - Delete Bundle Notification
* `getBundleNotifications` - List Bundle Notifications
* `getBundleNotificationsId` - Show Bundle Notification
* `patchBundleNotificationsId` - Update Bundle Notification
* `postBundleNotifications` - Create Bundle Notification

### bundleRecipients

* `getBundleRecipients` - List Bundle Recipients
* `postBundleRecipients` - Create Bundle Recipient

### bundleRegistrations

* `getBundleRegistrations` - List Bundle Registrations

### bundles

* `deleteBundlesId` - Delete Bundle
* `getBundles` - List Bundles
* `getBundlesId` - Show Bundle
* `patchBundlesId` - Update Bundle
* `postBundles` - Create Bundle
* `postBundlesIdShare` - Send email(s) with a link to bundle

### clickwraps

* `deleteClickwrapsId` - Delete Clickwrap
* `getClickwraps` - List Clickwraps
* `getClickwrapsId` - Show Clickwrap
* `patchClickwrapsId` - Update Clickwrap
* `postClickwraps` - Create Clickwrap

### dnsRecords

* `getDnsRecords` - Show site DNS configuration.

### externalEvents

* `getExternalEvents` - List External Events
* `getExternalEventsId` - Show External Event
* `postExternalEvents` - Create External Event

### fileActions

* `fileActionBeginUpload` - Begin file upload
* `fileActionCopy` - Copy file/folder
* `fileActionFind` - Find file/folder by path
* `fileActionMove` - Move file/folder

### fileCommentReactions

* `deleteFileCommentReactionsId` - Delete File Comment Reaction
* `postFileCommentReactions` - Create File Comment Reaction

### fileComments

* `deleteFileCommentsId` - Delete File Comment
* `fileCommentListForPath` - List File Comments by path
* `patchFileCommentsId` - Update File Comment
* `postFileComments` - Create File Comment

### fileMigrations

* `getFileMigrationsId` - Show File Migration

### files

* `deleteFilesPath` - Delete file/folder
* `fileDownload` - Download file
* `patchFilesPath` - Update file/folder metadata
* `postFilesPath` - Upload file

### folders

* `folderListForPath` - List Folders by path
* `postFoldersPath` - Create folder

### formFieldSets

* `deleteFormFieldSetsId` - Delete Form Field Set
* `getFormFieldSets` - List Form Field Sets
* `getFormFieldSetsId` - Show Form Field Set
* `patchFormFieldSetsId` - Update Form Field Set
* `postFormFieldSets` - Create Form Field Set

### groupUsers

* `deleteGroupUsersId` - Delete Group User
* `getGroupUsers` - List Group Users
* `patchGroupUsersId` - Update Group User
* `postGroupUsers` - Create Group User

### groups

* `deleteGroupsGroupIdMembershipsUserId` - Delete Group User
* `deleteGroupsId` - Delete Group
* `getGroups` - List Groups
* `getGroupsGroupIdPermissions` - List Permissions
* `getGroupsGroupIdUsers` - List Group Users
* `getGroupsId` - Show Group
* `patchGroupsGroupIdMembershipsUserId` - Update Group User
* `patchGroupsId` - Update Group
* `postGroups` - Create Group
* `postGroupsGroupIdUsers` - Create User

### history

* `historyList` - List site full action history.
* `historyListForFile` - List history for specific file.
* `historyListForFolder` - List history for specific folder.
* `historyListForUser` - List history for specific user.
* `historyListLogins` - List site login history.

### historyExportResults

* `getHistoryExportResults` - List History Export Results

### historyExports

* `getHistoryExportsId` - Show History Export
* `postHistoryExports` - Create History Export

### inboxRecipients

* `getInboxRecipients` - List Inbox Recipients
* `postInboxRecipients` - Create Inbox Recipient

### inboxRegistrations

* `getInboxRegistrations` - List Inbox Registrations

### inboxUploads

* `getInboxUploads` - List Inbox Uploads

### invoices

* `getInvoices` - List Invoices
* `getInvoicesId` - Show Invoice

### ipAddresses

* `getIpAddresses` - List IP Addresses associated with the current site
* `getIpAddressesExavaultReserved` - List all possible public ExaVault IP addresses
* `getIpAddressesReserved` - List all possible public IP addresses

### locks

* `deleteLocksPath` - Delete Lock
* `lockListForPath` - List Locks by path
* `postLocksPath` - Create Lock

### messageCommentReactions

* `deleteMessageCommentReactionsId` - Delete Message Comment Reaction
* `getMessageCommentReactions` - List Message Comment Reactions
* `getMessageCommentReactionsId` - Show Message Comment Reaction
* `postMessageCommentReactions` - Create Message Comment Reaction

### messageComments

* `deleteMessageCommentsId` - Delete Message Comment
* `getMessageComments` - List Message Comments
* `getMessageCommentsId` - Show Message Comment
* `patchMessageCommentsId` - Update Message Comment
* `postMessageComments` - Create Message Comment

### messageReactions

* `deleteMessageReactionsId` - Delete Message Reaction
* `getMessageReactions` - List Message Reactions
* `getMessageReactionsId` - Show Message Reaction
* `postMessageReactions` - Create Message Reaction

### messages

* `deleteMessagesId` - Delete Message
* `getMessages` - List Messages
* `getMessagesId` - Show Message
* `patchMessagesId` - Update Message
* `postMessages` - Create Message

### notifications

* `deleteNotificationsId` - Delete Notification
* `getNotifications` - List Notifications
* `getNotificationsId` - Show Notification
* `patchNotificationsId` - Update Notification
* `postNotifications` - Create Notification

### payments

* `getPayments` - List Payments
* `getPaymentsId` - Show Payment

### permissions

* `deletePermissionsId` - Delete Permission
* `getPermissions` - List Permissions
* `postPermissions` - Create Permission

### priorities

* `getPriorities` - List Priorities

### projects

* `deleteProjectsId` - Delete Project
* `getProjects` - List Projects
* `getProjectsId` - Show Project
* `patchProjectsId` - Update Project
* `postProjects` - Create Project

### publicKeys

* `deletePublicKeysId` - Delete Public Key
* `getPublicKeys` - List Public Keys
* `getPublicKeysId` - Show Public Key
* `patchPublicKeysId` - Update Public Key
* `postPublicKeys` - Create Public Key

### remoteBandwidthSnapshots

* `getRemoteBandwidthSnapshots` - List Remote Bandwidth Snapshots

### remoteServers

* `deleteRemoteServersId` - Delete Remote Server
* `getRemoteServers` - List Remote Servers
* `getRemoteServersId` - Show Remote Server
* `getRemoteServersIdConfigurationFile` - Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)
* `patchRemoteServersId` - Update Remote Server
* `postRemoteServers` - Create Remote Server
* `postRemoteServersIdConfigurationFile` - Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

### requests

* `deleteRequestsId` - Delete Request
* `getRequests` - List Requests
* `getRequestsFoldersPath` - List Requests
* `postRequests` - Create Request

### sessions

* `deleteSessions` - Delete user session (log out)
* `postSessions` - Create user session (log in)

### settingsChanges

* `getSettingsChanges` - List Settings Changes

### sftpHostKeys

* `deleteSftpHostKeysId` - Delete Sftp Host Key
* `getSftpHostKeys` - List Sftp Host Keys
* `getSftpHostKeysId` - Show Sftp Host Key
* `patchSftpHostKeysId` - Update Sftp Host Key
* `postSftpHostKeys` - Create Sftp Host Key

### site

* `getSite` - Show site settings
* `getSiteApiKeys` - List Api Keys
* `getSiteDnsRecords` - Show site DNS configuration.
* `getSiteIpAddresses` - List IP Addresses associated with the current site
* `getSiteUsage` - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
* `patchSite` - Update site settings.
* `postSiteApiKeys` - Create Api Key
* `postSiteTestWebhook` - Test webhook.

### ssoStrategies

* `getSsoStrategies` - List Sso Strategies
* `getSsoStrategiesId` - Show Sso Strategy
* `postSsoStrategiesIdSync` - Synchronize provisioning data with the SSO remote server.

### styles

* `deleteStylesPath` - Delete Style
* `getStylesPath` - Show Style
* `patchStylesPath` - Update Style

### usageDailySnapshots

* `getUsageDailySnapshots` - List Usage Daily Snapshots

### usageSnapshots

* `getUsageSnapshots` - List Usage Snapshots

### user

* `getUserApiKeys` - List Api Keys
* `getUserGroups` - List Group Users
* `getUserPublicKeys` - List Public Keys
* `patchUser` - Update User
* `postUserApiKeys` - Create Api Key
* `postUserPublicKeys` - Create Public Key

### userCipherUses

* `getUserCipherUses` - List User Cipher Uses

### userRequests

* `deleteUserRequestsId` - Delete User Request
* `getUserRequests` - List User Requests
* `getUserRequestsId` - Show User Request
* `postUserRequests` - Create User Request

### users

* `deleteUsersId` - Delete User
* `getUsers` - List Users
* `getUsersId` - Show User
* `getUsersUserIdApiKeys` - List Api Keys
* `getUsersUserIdCipherUses` - List User Cipher Uses
* `getUsersUserIdGroups` - List Group Users
* `getUsersUserIdPermissions` - List Permissions
* `getUsersUserIdPublicKeys` - List Public Keys
* `patchUsersId` - Update User
* `postUsers` - Create User
* `postUsersId2faReset` - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
* `postUsersIdResendWelcomeEmail` - Resend user welcome email
* `postUsersIdUnlock` - Unlock user who has been locked out due to failed logins.
* `postUsersUserIdApiKeys` - Create Api Key
* `postUsersUserIdPublicKeys` - Create Public Key

### webhookTests

* `postWebhookTests` - Create Webhook Test
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

