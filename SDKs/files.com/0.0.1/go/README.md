# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/files.com/0.0.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetActionNotificationExportResultsRequest{
        QueryParams: operations.GetActionNotificationExportResultsQueryParams{
            ActionNotificationExportID: 548814,
            Cursor: "deserunt",
            PerPage: 715190,
            UserID: 844266,
        },
    }

    ctx := context.Background()
    res, err := s.ActionNotificationExportResults.GetActionNotificationExportResults(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionNotificationExportResultEntities != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### ActionNotificationExportResults

* `GetActionNotificationExportResults` - List Action Notification Export Results

### ActionNotificationExports

* `GetActionNotificationExportsID` - Show Action Notification Export
* `PostActionNotificationExports` - Create Action Notification Export

### ActionWebhookFailures

* `PostActionWebhookFailuresIDRetry` - retry Action Webhook Failure

### APIKey

* `APIKeyDeleteCurrent` - Delete current API key.  (Requires current API connection to be using an API key.)
* `APIKeyFindCurrent` - Show information about current API key.  (Requires current API connection to be using an API key.)
* `APIKeyUpdateCurrent` - Update current API key.  (Requires current API connection to be using an API key.)

### APIKeys

* `DeleteAPIKeysID` - Delete Api Key
* `GetAPIKeys` - List Api Keys
* `GetAPIKeysID` - Show Api Key
* `PatchAPIKeysID` - Update Api Key
* `PostAPIKeys` - Create Api Key

### Apps

* `GetApps` - List Apps

### As2Keys

* `DeleteAs2KeysID` - Delete As2 Key
* `GetAs2Keys` - List As2 Keys
* `GetAs2KeysID` - Show As2 Key
* `PatchAs2KeysID` - Update As2 Key
* `PostAs2Keys` - Create As2 Key

### Automations

* `DeleteAutomationsID` - Delete Automation
* `GetAutomations` - List Automations
* `GetAutomationsID` - Show Automation
* `PatchAutomationsID` - Update Automation
* `PostAutomations` - Create Automation

### BandwidthSnapshots

* `GetBandwidthSnapshots` - List Bandwidth Snapshots

### Behaviors

* `BehaviorListForPath` - List Behaviors by path
* `DeleteBehaviorsID` - Delete Behavior
* `GetBehaviors` - List Behaviors
* `GetBehaviorsID` - Show Behavior
* `PatchBehaviorsID` - Update Behavior
* `PostBehaviors` - Create Behavior
* `PostBehaviorsWebhookTest` - Test webhook.

### BundleDownloads

* `GetBundleDownloads` - List Bundle Downloads

### BundleRecipients

* `GetBundleRecipients` - List Bundle Recipients
* `PostBundleRecipients` - Create Bundle Recipient

### BundleRegistrations

* `GetBundleRegistrations` - List Bundle Registrations

### Bundles

* `DeleteBundlesID` - Delete Bundle
* `GetBundles` - List Bundles
* `GetBundlesID` - Show Bundle
* `PatchBundlesID` - Update Bundle
* `PostBundles` - Create Bundle
* `PostBundlesIDShare` - Send email(s) with a link to bundle

### Clickwraps

* `DeleteClickwrapsID` - Delete Clickwrap
* `GetClickwraps` - List Clickwraps
* `GetClickwrapsID` - Show Clickwrap
* `PatchClickwrapsID` - Update Clickwrap
* `PostClickwraps` - Create Clickwrap

### DNSRecords

* `GetDNSRecords` - Show site DNS configuration.

### ExternalEvents

* `GetExternalEvents` - List External Events
* `GetExternalEventsID` - Show External Event
* `PostExternalEvents` - Create External Event

### FileActions

* `FileActionBeginUpload` - Begin file upload
* `FileActionCopy` - Copy file/folder
* `FileActionMetadata` - Return metadata for file/folder
* `FileActionMove` - Move file/folder

### FileCommentReactions

* `DeleteFileCommentReactionsID` - Delete File Comment Reaction
* `PostFileCommentReactions` - Create File Comment Reaction

### FileComments

* `DeleteFileCommentsID` - Delete File Comment
* `FileCommentListForPath` - List File Comments by path
* `PatchFileCommentsID` - Update File Comment
* `PostFileComments` - Create File Comment

### FileMigrations

* `GetFileMigrationsID` - Show File Migration

### Files

* `DeleteFilesPath` - Delete file/folder
* `FileDownload` - Download file
* `PatchFilesPath` - Update file/folder metadata
* `PostFilesPath` - Upload file

### Folders

* `FolderListForPath` - List Folders by path
* `PostFoldersPath` - Create folder

### FormFieldSets

* `DeleteFormFieldSetsID` - Delete Form Field Set
* `GetFormFieldSets` - List Form Field Sets
* `GetFormFieldSetsID` - Show Form Field Set
* `PatchFormFieldSetsID` - Update Form Field Set
* `PostFormFieldSets` - Create Form Field Set

### GroupUsers

* `DeleteGroupUsersID` - Delete Group User
* `GetGroupUsers` - List Group Users
* `PatchGroupUsersID` - Update Group User
* `PostGroupUsers` - Create Group User

### Groups

* `DeleteGroupsGroupIDMembershipsUserID` - Delete Group User
* `DeleteGroupsID` - Delete Group
* `GetGroups` - List Groups
* `GetGroupsGroupIDPermissions` - List Permissions
* `GetGroupsGroupIDUsers` - List Group Users
* `GetGroupsID` - Show Group
* `PatchGroupsGroupIDMembershipsUserID` - Update Group User
* `PatchGroupsID` - Update Group
* `PostGroups` - Create Group
* `PostGroupsGroupIDUsers` - Create User

### History

* `HistoryList` - List site full action history.
* `HistoryListForFile` - List history for specific file.
* `HistoryListForFolder` - List history for specific folder.
* `HistoryListForUser` - List history for specific user.
* `HistoryListLogins` - List site login history.

### HistoryExportResults

* `GetHistoryExportResults` - List History Export Results

### HistoryExports

* `GetHistoryExportsID` - Show History Export
* `PostHistoryExports` - Create History Export

### InboxRecipients

* `GetInboxRecipients` - List Inbox Recipients
* `PostInboxRecipients` - Create Inbox Recipient

### InboxRegistrations

* `GetInboxRegistrations` - List Inbox Registrations

### InboxUploads

* `GetInboxUploads` - List Inbox Uploads

### Invoices

* `GetInvoices` - List Invoices
* `GetInvoicesID` - Show Invoice

### IPAddresses

* `GetIPAddresses` - List IP Addresses associated with the current site
* `GetIPAddressesReserved` - List all possible public IP addresses

### Locks

* `DeleteLocksPath` - Delete Lock
* `LockListForPath` - List Locks by path
* `PostLocksPath` - Create Lock

### MessageCommentReactions

* `DeleteMessageCommentReactionsID` - Delete Message Comment Reaction
* `GetMessageCommentReactions` - List Message Comment Reactions
* `GetMessageCommentReactionsID` - Show Message Comment Reaction
* `PostMessageCommentReactions` - Create Message Comment Reaction

### MessageComments

* `DeleteMessageCommentsID` - Delete Message Comment
* `GetMessageComments` - List Message Comments
* `GetMessageCommentsID` - Show Message Comment
* `PatchMessageCommentsID` - Update Message Comment
* `PostMessageComments` - Create Message Comment

### MessageReactions

* `DeleteMessageReactionsID` - Delete Message Reaction
* `GetMessageReactions` - List Message Reactions
* `GetMessageReactionsID` - Show Message Reaction
* `PostMessageReactions` - Create Message Reaction

### Messages

* `DeleteMessagesID` - Delete Message
* `GetMessages` - List Messages
* `GetMessagesID` - Show Message
* `PatchMessagesID` - Update Message
* `PostMessages` - Create Message

### Notifications

* `DeleteNotificationsID` - Delete Notification
* `GetNotifications` - List Notifications
* `GetNotificationsID` - Show Notification
* `PatchNotificationsID` - Update Notification
* `PostNotifications` - Create Notification

### Payments

* `GetPayments` - List Payments
* `GetPaymentsID` - Show Payment

### Permissions

* `DeletePermissionsID` - Delete Permission
* `GetPermissions` - List Permissions
* `PostPermissions` - Create Permission

### Projects

* `DeleteProjectsID` - Delete Project
* `GetProjects` - List Projects
* `GetProjectsID` - Show Project
* `PatchProjectsID` - Update Project
* `PostProjects` - Create Project

### PublicKeys

* `DeletePublicKeysID` - Delete Public Key
* `GetPublicKeys` - List Public Keys
* `GetPublicKeysID` - Show Public Key
* `PatchPublicKeysID` - Update Public Key
* `PostPublicKeys` - Create Public Key

### RemoteServers

* `DeleteRemoteServersID` - Delete Remote Server
* `GetRemoteServers` - List Remote Servers
* `GetRemoteServersID` - Show Remote Server
* `PatchRemoteServersID` - Update Remote Server
* `PostRemoteServers` - Create Remote Server

### Requests

* `DeleteRequestsID` - Delete Request
* `GetRequests` - List Requests
* `GetRequestsFoldersPath` - List Requests
* `PostRequests` - Create Request

### Sessions

* `DeleteSessions` - Delete user session (log out)
* `PostSessions` - Create user session (log in)

### SettingsChanges

* `GetSettingsChanges` - List Settings Changes

### Site

* `GetSite` - Show site settings
* `GetSiteAPIKeys` - List Api Keys
* `GetSiteDNSRecords` - Show site DNS configuration.
* `GetSiteIPAddresses` - List IP Addresses associated with the current site
* `GetSiteUsage` - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
* `PatchSite` - Update site settings.
* `PostSiteAPIKeys` - Create Api Key
* `PostSiteTestWebhook` - Test webhook.

### SsoStrategies

* `GetSsoStrategies` - List Sso Strategies
* `GetSsoStrategiesID` - Show Sso Strategy

### Styles

* `DeleteStylesPath` - Delete Style
* `GetStylesPath` - Show Style
* `PatchStylesPath` - Update Style

### SyncJobs

* `GetSyncJobs` - List Sync Jobs

### UsageDailySnapshots

* `GetUsageDailySnapshots` - List Usage Daily Snapshots

### UsageSnapshots

* `GetUsageSnapshots` - List Usage Snapshots

### User

* `GetUserAPIKeys` - List Api Keys
* `GetUserAs2Keys` - List As2 Keys
* `GetUserGroups` - List Group Users
* `GetUserPublicKeys` - List Public Keys
* `PatchUser` - Update User
* `PostUserAPIKeys` - Create Api Key
* `PostUserAs2Keys` - Create As2 Key
* `PostUserPublicKeys` - Create Public Key

### UserCipherUses

* `GetUserCipherUses` - List User Cipher Uses

### UserRequests

* `DeleteUserRequestsID` - Delete User Request
* `GetUserRequests` - List User Requests
* `GetUserRequestsID` - Show User Request
* `PostUserRequests` - Create User Request

### Users

* `DeleteUsersID` - Delete User
* `GetUsers` - List Users
* `GetUsersID` - Show User
* `GetUsersUserIDAPIKeys` - List Api Keys
* `GetUsersUserIDAs2Keys` - List As2 Keys
* `GetUsersUserIDCipherUses` - List User Cipher Uses
* `GetUsersUserIDGroups` - List Group Users
* `GetUsersUserIDPermissions` - List Permissions
* `GetUsersUserIDPublicKeys` - List Public Keys
* `PatchUsersID` - Update User
* `PostUsers` - Create User
* `PostUsersId2faReset` - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
* `PostUsersIDResendWelcomeEmail` - Resend user welcome email
* `PostUsersIDUnlock` - Unlock user who has been locked out due to failed logins.
* `PostUsersUserIDAPIKeys` - Create Api Key
* `PostUsersUserIDAs2Keys` - Create As2 Key
* `PostUsersUserIDPublicKeys` - Create Public Key

### WebhookTests

* `PostWebhookTests` - Create Webhook Test
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
