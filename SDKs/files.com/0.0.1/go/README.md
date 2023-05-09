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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ActionNotificationExportResults.GetActionNotificationExportResults(ctx, operations.GetActionNotificationExportResultsRequest{
        ActionNotificationExportID: 548814,
        Cursor: sdk.String("provident"),
        PerPage: sdk.Int(715190),
        UserID: sdk.Int(844266),
    })
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
## Available Resources and Operations


### [ActionNotificationExportResults](docs/actionnotificationexportresults/README.md)

* [GetActionNotificationExportResults](docs/actionnotificationexportresults/README.md#getactionnotificationexportresults) - List Action Notification Export Results

### [ActionNotificationExports](docs/actionnotificationexports/README.md)

* [GetActionNotificationExportsID](docs/actionnotificationexports/README.md#getactionnotificationexportsid) - Show Action Notification Export
* [PostActionNotificationExports](docs/actionnotificationexports/README.md#postactionnotificationexports) - Create Action Notification Export

### [ActionWebhookFailures](docs/actionwebhookfailures/README.md)

* [PostActionWebhookFailuresIDRetry](docs/actionwebhookfailures/README.md#postactionwebhookfailuresidretry) - retry Action Webhook Failure

### [APIKey](docs/apikey/README.md)

* [APIKeyDeleteCurrent](docs/apikey/README.md#apikeydeletecurrent) - Delete current API key.  (Requires current API connection to be using an API key.)
* [APIKeyFindCurrent](docs/apikey/README.md#apikeyfindcurrent) - Show information about current API key.  (Requires current API connection to be using an API key.)
* [APIKeyUpdateCurrent](docs/apikey/README.md#apikeyupdatecurrent) - Update current API key.  (Requires current API connection to be using an API key.)

### [APIKeys](docs/apikeys/README.md)

* [DeleteAPIKeysID](docs/apikeys/README.md#deleteapikeysid) - Delete Api Key
* [GetAPIKeys](docs/apikeys/README.md#getapikeys) - List Api Keys
* [GetAPIKeysID](docs/apikeys/README.md#getapikeysid) - Show Api Key
* [PatchAPIKeysID](docs/apikeys/README.md#patchapikeysid) - Update Api Key
* [PostAPIKeys](docs/apikeys/README.md#postapikeys) - Create Api Key

### [Apps](docs/apps/README.md)

* [GetApps](docs/apps/README.md#getapps) - List Apps

### [As2IncomingMessages](docs/as2incomingmessages/README.md)

* [GetAs2IncomingMessages](docs/as2incomingmessages/README.md#getas2incomingmessages) - List As2 Incoming Messages

### [As2OutgoingMessages](docs/as2outgoingmessages/README.md)

* [GetAs2OutgoingMessages](docs/as2outgoingmessages/README.md#getas2outgoingmessages) - List As2 Outgoing Messages

### [As2Partners](docs/as2partners/README.md)

* [DeleteAs2PartnersID](docs/as2partners/README.md#deleteas2partnersid) - Delete As2 Partner
* [GetAs2Partners](docs/as2partners/README.md#getas2partners) - List As2 Partners
* [GetAs2PartnersID](docs/as2partners/README.md#getas2partnersid) - Show As2 Partner
* [PatchAs2PartnersID](docs/as2partners/README.md#patchas2partnersid) - Update As2 Partner
* [PostAs2Partners](docs/as2partners/README.md#postas2partners) - Create As2 Partner

### [As2Stations](docs/as2stations/README.md)

* [DeleteAs2StationsID](docs/as2stations/README.md#deleteas2stationsid) - Delete As2 Station
* [GetAs2Stations](docs/as2stations/README.md#getas2stations) - List As2 Stations
* [GetAs2StationsID](docs/as2stations/README.md#getas2stationsid) - Show As2 Station
* [PatchAs2StationsID](docs/as2stations/README.md#patchas2stationsid) - Update As2 Station
* [PostAs2Stations](docs/as2stations/README.md#postas2stations) - Create As2 Station

### [AutomationRuns](docs/automationruns/README.md)

* [GetAutomationRuns](docs/automationruns/README.md#getautomationruns) - List Automation Runs
* [GetAutomationRunsID](docs/automationruns/README.md#getautomationrunsid) - Show Automation Run

### [Automations](docs/automations/README.md)

* [DeleteAutomationsID](docs/automations/README.md#deleteautomationsid) - Delete Automation
* [GetAutomations](docs/automations/README.md#getautomations) - List Automations
* [GetAutomationsID](docs/automations/README.md#getautomationsid) - Show Automation
* [PatchAutomationsID](docs/automations/README.md#patchautomationsid) - Update Automation
* [PostAutomations](docs/automations/README.md#postautomations) - Create Automation

### [BandwidthSnapshots](docs/bandwidthsnapshots/README.md)

* [GetBandwidthSnapshots](docs/bandwidthsnapshots/README.md#getbandwidthsnapshots) - List Bandwidth Snapshots

### [Behaviors](docs/behaviors/README.md)

* [BehaviorListForPath](docs/behaviors/README.md#behaviorlistforpath) - List Behaviors by path
* [DeleteBehaviorsID](docs/behaviors/README.md#deletebehaviorsid) - Delete Behavior
* [GetBehaviors](docs/behaviors/README.md#getbehaviors) - List Behaviors
* [GetBehaviorsID](docs/behaviors/README.md#getbehaviorsid) - Show Behavior
* [PatchBehaviorsID](docs/behaviors/README.md#patchbehaviorsid) - Update Behavior
* [PostBehaviors](docs/behaviors/README.md#postbehaviors) - Create Behavior
* [PostBehaviorsWebhookTest](docs/behaviors/README.md#postbehaviorswebhooktest) - Test webhook.

### [BundleDownloads](docs/bundledownloads/README.md)

* [GetBundleDownloads](docs/bundledownloads/README.md#getbundledownloads) - List Bundle Downloads

### [BundleNotifications](docs/bundlenotifications/README.md)

* [DeleteBundleNotificationsID](docs/bundlenotifications/README.md#deletebundlenotificationsid) - Delete Bundle Notification
* [GetBundleNotifications](docs/bundlenotifications/README.md#getbundlenotifications) - List Bundle Notifications
* [GetBundleNotificationsID](docs/bundlenotifications/README.md#getbundlenotificationsid) - Show Bundle Notification
* [PatchBundleNotificationsID](docs/bundlenotifications/README.md#patchbundlenotificationsid) - Update Bundle Notification
* [PostBundleNotifications](docs/bundlenotifications/README.md#postbundlenotifications) - Create Bundle Notification

### [BundleRecipients](docs/bundlerecipients/README.md)

* [GetBundleRecipients](docs/bundlerecipients/README.md#getbundlerecipients) - List Bundle Recipients
* [PostBundleRecipients](docs/bundlerecipients/README.md#postbundlerecipients) - Create Bundle Recipient

### [BundleRegistrations](docs/bundleregistrations/README.md)

* [GetBundleRegistrations](docs/bundleregistrations/README.md#getbundleregistrations) - List Bundle Registrations

### [Bundles](docs/bundles/README.md)

* [DeleteBundlesID](docs/bundles/README.md#deletebundlesid) - Delete Bundle
* [GetBundles](docs/bundles/README.md#getbundles) - List Bundles
* [GetBundlesID](docs/bundles/README.md#getbundlesid) - Show Bundle
* [PatchBundlesID](docs/bundles/README.md#patchbundlesid) - Update Bundle
* [PostBundles](docs/bundles/README.md#postbundles) - Create Bundle
* [PostBundlesIDShare](docs/bundles/README.md#postbundlesidshare) - Send email(s) with a link to bundle

### [Clickwraps](docs/clickwraps/README.md)

* [DeleteClickwrapsID](docs/clickwraps/README.md#deleteclickwrapsid) - Delete Clickwrap
* [GetClickwraps](docs/clickwraps/README.md#getclickwraps) - List Clickwraps
* [GetClickwrapsID](docs/clickwraps/README.md#getclickwrapsid) - Show Clickwrap
* [PatchClickwrapsID](docs/clickwraps/README.md#patchclickwrapsid) - Update Clickwrap
* [PostClickwraps](docs/clickwraps/README.md#postclickwraps) - Create Clickwrap

### [DNSRecords](docs/dnsrecords/README.md)

* [GetDNSRecords](docs/dnsrecords/README.md#getdnsrecords) - Show site DNS configuration.

### [ExternalEvents](docs/externalevents/README.md)

* [GetExternalEvents](docs/externalevents/README.md#getexternalevents) - List External Events
* [GetExternalEventsID](docs/externalevents/README.md#getexternaleventsid) - Show External Event
* [PostExternalEvents](docs/externalevents/README.md#postexternalevents) - Create External Event

### [FileActions](docs/fileactions/README.md)

* [FileActionBeginUpload](docs/fileactions/README.md#fileactionbeginupload) - Begin file upload
* [FileActionCopy](docs/fileactions/README.md#fileactioncopy) - Copy file/folder
* [FileActionFind](docs/fileactions/README.md#fileactionfind) - Find file/folder by path
* [FileActionMove](docs/fileactions/README.md#fileactionmove) - Move file/folder

### [FileCommentReactions](docs/filecommentreactions/README.md)

* [DeleteFileCommentReactionsID](docs/filecommentreactions/README.md#deletefilecommentreactionsid) - Delete File Comment Reaction
* [PostFileCommentReactions](docs/filecommentreactions/README.md#postfilecommentreactions) - Create File Comment Reaction

### [FileComments](docs/filecomments/README.md)

* [DeleteFileCommentsID](docs/filecomments/README.md#deletefilecommentsid) - Delete File Comment
* [FileCommentListForPath](docs/filecomments/README.md#filecommentlistforpath) - List File Comments by path
* [PatchFileCommentsID](docs/filecomments/README.md#patchfilecommentsid) - Update File Comment
* [PostFileComments](docs/filecomments/README.md#postfilecomments) - Create File Comment

### [FileMigrations](docs/filemigrations/README.md)

* [GetFileMigrationsID](docs/filemigrations/README.md#getfilemigrationsid) - Show File Migration

### [Files](docs/files/README.md)

* [DeleteFilesPath](docs/files/README.md#deletefilespath) - Delete file/folder
* [FileDownload](docs/files/README.md#filedownload) - Download file
* [PatchFilesPath](docs/files/README.md#patchfilespath) - Update file/folder metadata
* [PostFilesPath](docs/files/README.md#postfilespath) - Upload file

### [Folders](docs/folders/README.md)

* [FolderListForPath](docs/folders/README.md#folderlistforpath) - List Folders by path
* [PostFoldersPath](docs/folders/README.md#postfolderspath) - Create folder

### [FormFieldSets](docs/formfieldsets/README.md)

* [DeleteFormFieldSetsID](docs/formfieldsets/README.md#deleteformfieldsetsid) - Delete Form Field Set
* [GetFormFieldSets](docs/formfieldsets/README.md#getformfieldsets) - List Form Field Sets
* [GetFormFieldSetsID](docs/formfieldsets/README.md#getformfieldsetsid) - Show Form Field Set
* [PatchFormFieldSetsID](docs/formfieldsets/README.md#patchformfieldsetsid) - Update Form Field Set
* [PostFormFieldSets](docs/formfieldsets/README.md#postformfieldsets) - Create Form Field Set

### [GroupUsers](docs/groupusers/README.md)

* [DeleteGroupUsersID](docs/groupusers/README.md#deletegroupusersid) - Delete Group User
* [GetGroupUsers](docs/groupusers/README.md#getgroupusers) - List Group Users
* [PatchGroupUsersID](docs/groupusers/README.md#patchgroupusersid) - Update Group User
* [PostGroupUsers](docs/groupusers/README.md#postgroupusers) - Create Group User

### [Groups](docs/groups/README.md)

* [DeleteGroupsGroupIDMembershipsUserID](docs/groups/README.md#deletegroupsgroupidmembershipsuserid) - Delete Group User
* [DeleteGroupsID](docs/groups/README.md#deletegroupsid) - Delete Group
* [GetGroups](docs/groups/README.md#getgroups) - List Groups
* [GetGroupsGroupIDPermissions](docs/groups/README.md#getgroupsgroupidpermissions) - List Permissions
* [GetGroupsGroupIDUsers](docs/groups/README.md#getgroupsgroupidusers) - List Group Users
* [GetGroupsID](docs/groups/README.md#getgroupsid) - Show Group
* [PatchGroupsGroupIDMembershipsUserID](docs/groups/README.md#patchgroupsgroupidmembershipsuserid) - Update Group User
* [PatchGroupsID](docs/groups/README.md#patchgroupsid) - Update Group
* [PostGroups](docs/groups/README.md#postgroups) - Create Group
* [PostGroupsGroupIDUsers](docs/groups/README.md#postgroupsgroupidusers) - Create User

### [History](docs/history/README.md)

* [HistoryList](docs/history/README.md#historylist) - List site full action history.
* [HistoryListForFile](docs/history/README.md#historylistforfile) - List history for specific file.
* [HistoryListForFolder](docs/history/README.md#historylistforfolder) - List history for specific folder.
* [HistoryListForUser](docs/history/README.md#historylistforuser) - List history for specific user.
* [HistoryListLogins](docs/history/README.md#historylistlogins) - List site login history.

### [HistoryExportResults](docs/historyexportresults/README.md)

* [GetHistoryExportResults](docs/historyexportresults/README.md#gethistoryexportresults) - List History Export Results

### [HistoryExports](docs/historyexports/README.md)

* [GetHistoryExportsID](docs/historyexports/README.md#gethistoryexportsid) - Show History Export
* [PostHistoryExports](docs/historyexports/README.md#posthistoryexports) - Create History Export

### [InboxRecipients](docs/inboxrecipients/README.md)

* [GetInboxRecipients](docs/inboxrecipients/README.md#getinboxrecipients) - List Inbox Recipients
* [PostInboxRecipients](docs/inboxrecipients/README.md#postinboxrecipients) - Create Inbox Recipient

### [InboxRegistrations](docs/inboxregistrations/README.md)

* [GetInboxRegistrations](docs/inboxregistrations/README.md#getinboxregistrations) - List Inbox Registrations

### [InboxUploads](docs/inboxuploads/README.md)

* [GetInboxUploads](docs/inboxuploads/README.md#getinboxuploads) - List Inbox Uploads

### [Invoices](docs/invoices/README.md)

* [GetInvoices](docs/invoices/README.md#getinvoices) - List Invoices
* [GetInvoicesID](docs/invoices/README.md#getinvoicesid) - Show Invoice

### [IPAddresses](docs/ipaddresses/README.md)

* [GetIPAddresses](docs/ipaddresses/README.md#getipaddresses) - List IP Addresses associated with the current site
* [GetIPAddressesExavaultReserved](docs/ipaddresses/README.md#getipaddressesexavaultreserved) - List all possible public ExaVault IP addresses
* [GetIPAddressesReserved](docs/ipaddresses/README.md#getipaddressesreserved) - List all possible public IP addresses

### [Locks](docs/locks/README.md)

* [DeleteLocksPath](docs/locks/README.md#deletelockspath) - Delete Lock
* [LockListForPath](docs/locks/README.md#locklistforpath) - List Locks by path
* [PostLocksPath](docs/locks/README.md#postlockspath) - Create Lock

### [MessageCommentReactions](docs/messagecommentreactions/README.md)

* [DeleteMessageCommentReactionsID](docs/messagecommentreactions/README.md#deletemessagecommentreactionsid) - Delete Message Comment Reaction
* [GetMessageCommentReactions](docs/messagecommentreactions/README.md#getmessagecommentreactions) - List Message Comment Reactions
* [GetMessageCommentReactionsID](docs/messagecommentreactions/README.md#getmessagecommentreactionsid) - Show Message Comment Reaction
* [PostMessageCommentReactions](docs/messagecommentreactions/README.md#postmessagecommentreactions) - Create Message Comment Reaction

### [MessageComments](docs/messagecomments/README.md)

* [DeleteMessageCommentsID](docs/messagecomments/README.md#deletemessagecommentsid) - Delete Message Comment
* [GetMessageComments](docs/messagecomments/README.md#getmessagecomments) - List Message Comments
* [GetMessageCommentsID](docs/messagecomments/README.md#getmessagecommentsid) - Show Message Comment
* [PatchMessageCommentsID](docs/messagecomments/README.md#patchmessagecommentsid) - Update Message Comment
* [PostMessageComments](docs/messagecomments/README.md#postmessagecomments) - Create Message Comment

### [MessageReactions](docs/messagereactions/README.md)

* [DeleteMessageReactionsID](docs/messagereactions/README.md#deletemessagereactionsid) - Delete Message Reaction
* [GetMessageReactions](docs/messagereactions/README.md#getmessagereactions) - List Message Reactions
* [GetMessageReactionsID](docs/messagereactions/README.md#getmessagereactionsid) - Show Message Reaction
* [PostMessageReactions](docs/messagereactions/README.md#postmessagereactions) - Create Message Reaction

### [Messages](docs/messages/README.md)

* [DeleteMessagesID](docs/messages/README.md#deletemessagesid) - Delete Message
* [GetMessages](docs/messages/README.md#getmessages) - List Messages
* [GetMessagesID](docs/messages/README.md#getmessagesid) - Show Message
* [PatchMessagesID](docs/messages/README.md#patchmessagesid) - Update Message
* [PostMessages](docs/messages/README.md#postmessages) - Create Message

### [Notifications](docs/notifications/README.md)

* [DeleteNotificationsID](docs/notifications/README.md#deletenotificationsid) - Delete Notification
* [GetNotifications](docs/notifications/README.md#getnotifications) - List Notifications
* [GetNotificationsID](docs/notifications/README.md#getnotificationsid) - Show Notification
* [PatchNotificationsID](docs/notifications/README.md#patchnotificationsid) - Update Notification
* [PostNotifications](docs/notifications/README.md#postnotifications) - Create Notification

### [Payments](docs/payments/README.md)

* [GetPayments](docs/payments/README.md#getpayments) - List Payments
* [GetPaymentsID](docs/payments/README.md#getpaymentsid) - Show Payment

### [Permissions](docs/permissions/README.md)

* [DeletePermissionsID](docs/permissions/README.md#deletepermissionsid) - Delete Permission
* [GetPermissions](docs/permissions/README.md#getpermissions) - List Permissions
* [PostPermissions](docs/permissions/README.md#postpermissions) - Create Permission

### [Priorities](docs/priorities/README.md)

* [GetPriorities](docs/priorities/README.md#getpriorities) - List Priorities

### [Projects](docs/projects/README.md)

* [DeleteProjectsID](docs/projects/README.md#deleteprojectsid) - Delete Project
* [GetProjects](docs/projects/README.md#getprojects) - List Projects
* [GetProjectsID](docs/projects/README.md#getprojectsid) - Show Project
* [PatchProjectsID](docs/projects/README.md#patchprojectsid) - Update Project
* [PostProjects](docs/projects/README.md#postprojects) - Create Project

### [PublicKeys](docs/publickeys/README.md)

* [DeletePublicKeysID](docs/publickeys/README.md#deletepublickeysid) - Delete Public Key
* [GetPublicKeys](docs/publickeys/README.md#getpublickeys) - List Public Keys
* [GetPublicKeysID](docs/publickeys/README.md#getpublickeysid) - Show Public Key
* [PatchPublicKeysID](docs/publickeys/README.md#patchpublickeysid) - Update Public Key
* [PostPublicKeys](docs/publickeys/README.md#postpublickeys) - Create Public Key

### [RemoteBandwidthSnapshots](docs/remotebandwidthsnapshots/README.md)

* [GetRemoteBandwidthSnapshots](docs/remotebandwidthsnapshots/README.md#getremotebandwidthsnapshots) - List Remote Bandwidth Snapshots

### [RemoteServers](docs/remoteservers/README.md)

* [DeleteRemoteServersID](docs/remoteservers/README.md#deleteremoteserversid) - Delete Remote Server
* [GetRemoteServers](docs/remoteservers/README.md#getremoteservers) - List Remote Servers
* [GetRemoteServersID](docs/remoteservers/README.md#getremoteserversid) - Show Remote Server
* [GetRemoteServersIDConfigurationFile](docs/remoteservers/README.md#getremoteserversidconfigurationfile) - Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)
* [PatchRemoteServersID](docs/remoteservers/README.md#patchremoteserversid) - Update Remote Server
* [PostRemoteServers](docs/remoteservers/README.md#postremoteservers) - Create Remote Server
* [PostRemoteServersIDConfigurationFile](docs/remoteservers/README.md#postremoteserversidconfigurationfile) - Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

### [Requests](docs/requests/README.md)

* [DeleteRequestsID](docs/requests/README.md#deleterequestsid) - Delete Request
* [GetRequests](docs/requests/README.md#getrequests) - List Requests
* [GetRequestsFoldersPath](docs/requests/README.md#getrequestsfolderspath) - List Requests
* [PostRequests](docs/requests/README.md#postrequests) - Create Request

### [Sessions](docs/sessions/README.md)

* [DeleteSessions](docs/sessions/README.md#deletesessions) - Delete user session (log out)
* [PostSessions](docs/sessions/README.md#postsessions) - Create user session (log in)

### [SettingsChanges](docs/settingschanges/README.md)

* [GetSettingsChanges](docs/settingschanges/README.md#getsettingschanges) - List Settings Changes

### [SftpHostKeys](docs/sftphostkeys/README.md)

* [DeleteSftpHostKeysID](docs/sftphostkeys/README.md#deletesftphostkeysid) - Delete Sftp Host Key
* [GetSftpHostKeys](docs/sftphostkeys/README.md#getsftphostkeys) - List Sftp Host Keys
* [GetSftpHostKeysID](docs/sftphostkeys/README.md#getsftphostkeysid) - Show Sftp Host Key
* [PatchSftpHostKeysID](docs/sftphostkeys/README.md#patchsftphostkeysid) - Update Sftp Host Key
* [PostSftpHostKeys](docs/sftphostkeys/README.md#postsftphostkeys) - Create Sftp Host Key

### [Site](docs/site/README.md)

* [GetSite](docs/site/README.md#getsite) - Show site settings
* [GetSiteAPIKeys](docs/site/README.md#getsiteapikeys) - List Api Keys
* [GetSiteDNSRecords](docs/site/README.md#getsitednsrecords) - Show site DNS configuration.
* [GetSiteIPAddresses](docs/site/README.md#getsiteipaddresses) - List IP Addresses associated with the current site
* [GetSiteUsage](docs/site/README.md#getsiteusage) - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
* [PatchSite](docs/site/README.md#patchsite) - Update site settings.
* [PostSiteAPIKeys](docs/site/README.md#postsiteapikeys) - Create Api Key
* [PostSiteTestWebhook](docs/site/README.md#postsitetestwebhook) - Test webhook.

### [SsoStrategies](docs/ssostrategies/README.md)

* [GetSsoStrategies](docs/ssostrategies/README.md#getssostrategies) - List Sso Strategies
* [GetSsoStrategiesID](docs/ssostrategies/README.md#getssostrategiesid) - Show Sso Strategy
* [PostSsoStrategiesIDSync](docs/ssostrategies/README.md#postssostrategiesidsync) - Synchronize provisioning data with the SSO remote server.

### [Styles](docs/styles/README.md)

* [DeleteStylesPath](docs/styles/README.md#deletestylespath) - Delete Style
* [GetStylesPath](docs/styles/README.md#getstylespath) - Show Style
* [PatchStylesPath](docs/styles/README.md#patchstylespath) - Update Style

### [UsageDailySnapshots](docs/usagedailysnapshots/README.md)

* [GetUsageDailySnapshots](docs/usagedailysnapshots/README.md#getusagedailysnapshots) - List Usage Daily Snapshots

### [UsageSnapshots](docs/usagesnapshots/README.md)

* [GetUsageSnapshots](docs/usagesnapshots/README.md#getusagesnapshots) - List Usage Snapshots

### [User](docs/user/README.md)

* [GetUserAPIKeys](docs/user/README.md#getuserapikeys) - List Api Keys
* [GetUserGroups](docs/user/README.md#getusergroups) - List Group Users
* [GetUserPublicKeys](docs/user/README.md#getuserpublickeys) - List Public Keys
* [PatchUser](docs/user/README.md#patchuser) - Update User
* [PostUserAPIKeys](docs/user/README.md#postuserapikeys) - Create Api Key
* [PostUserPublicKeys](docs/user/README.md#postuserpublickeys) - Create Public Key

### [UserCipherUses](docs/usercipheruses/README.md)

* [GetUserCipherUses](docs/usercipheruses/README.md#getusercipheruses) - List User Cipher Uses

### [UserRequests](docs/userrequests/README.md)

* [DeleteUserRequestsID](docs/userrequests/README.md#deleteuserrequestsid) - Delete User Request
* [GetUserRequests](docs/userrequests/README.md#getuserrequests) - List User Requests
* [GetUserRequestsID](docs/userrequests/README.md#getuserrequestsid) - Show User Request
* [PostUserRequests](docs/userrequests/README.md#postuserrequests) - Create User Request

### [Users](docs/users/README.md)

* [DeleteUsersID](docs/users/README.md#deleteusersid) - Delete User
* [GetUsers](docs/users/README.md#getusers) - List Users
* [GetUsersID](docs/users/README.md#getusersid) - Show User
* [GetUsersUserIDAPIKeys](docs/users/README.md#getusersuseridapikeys) - List Api Keys
* [GetUsersUserIDCipherUses](docs/users/README.md#getusersuseridcipheruses) - List User Cipher Uses
* [GetUsersUserIDGroups](docs/users/README.md#getusersuseridgroups) - List Group Users
* [GetUsersUserIDPermissions](docs/users/README.md#getusersuseridpermissions) - List Permissions
* [GetUsersUserIDPublicKeys](docs/users/README.md#getusersuseridpublickeys) - List Public Keys
* [PatchUsersID](docs/users/README.md#patchusersid) - Update User
* [PostUsers](docs/users/README.md#postusers) - Create User
* [PostUsersId2faReset](docs/users/README.md#postusersid2fareset) - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
* [PostUsersIDResendWelcomeEmail](docs/users/README.md#postusersidresendwelcomeemail) - Resend user welcome email
* [PostUsersIDUnlock](docs/users/README.md#postusersidunlock) - Unlock user who has been locked out due to failed logins.
* [PostUsersUserIDAPIKeys](docs/users/README.md#postusersuseridapikeys) - Create Api Key
* [PostUsersUserIDPublicKeys](docs/users/README.md#postusersuseridpublickeys) - Create Public Key

### [WebhookTests](docs/webhooktests/README.md)

* [PostWebhookTests](docs/webhooktests/README.md#postwebhooktests) - Create Webhook Test
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
