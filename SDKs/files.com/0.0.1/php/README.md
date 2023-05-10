# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetActionNotificationExportResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionNotificationExportResultsRequest();
    $request->actionNotificationExportId = 548814;
    $request->cursor = 'provident';
    $request->perPage = 715190;
    $request->userId = 844266;

    $response = $sdk->actionNotificationExportResults->getActionNotificationExportResults($request);

    if ($response->actionNotificationExportResultEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [actionNotificationExportResults](docs/actionnotificationexportresults/README.md)

* [getActionNotificationExportResults](docs/actionnotificationexportresults/README.md#getactionnotificationexportresults) - List Action Notification Export Results

### [actionNotificationExports](docs/actionnotificationexports/README.md)

* [getActionNotificationExportsId](docs/actionnotificationexports/README.md#getactionnotificationexportsid) - Show Action Notification Export
* [postActionNotificationExports](docs/actionnotificationexports/README.md#postactionnotificationexports) - Create Action Notification Export

### [actionWebhookFailures](docs/actionwebhookfailures/README.md)

* [postActionWebhookFailuresIdRetry](docs/actionwebhookfailures/README.md#postactionwebhookfailuresidretry) - retry Action Webhook Failure

### [apiKey](docs/apikey/README.md)

* [apiKeyDeleteCurrent](docs/apikey/README.md#apikeydeletecurrent) - Delete current API key.  (Requires current API connection to be using an API key.)
* [apiKeyFindCurrent](docs/apikey/README.md#apikeyfindcurrent) - Show information about current API key.  (Requires current API connection to be using an API key.)
* [apiKeyUpdateCurrent](docs/apikey/README.md#apikeyupdatecurrent) - Update current API key.  (Requires current API connection to be using an API key.)

### [apiKeys](docs/apikeys/README.md)

* [deleteApiKeysId](docs/apikeys/README.md#deleteapikeysid) - Delete Api Key
* [getApiKeys](docs/apikeys/README.md#getapikeys) - List Api Keys
* [getApiKeysId](docs/apikeys/README.md#getapikeysid) - Show Api Key
* [patchApiKeysId](docs/apikeys/README.md#patchapikeysid) - Update Api Key
* [postApiKeys](docs/apikeys/README.md#postapikeys) - Create Api Key

### [apps](docs/apps/README.md)

* [getApps](docs/apps/README.md#getapps) - List Apps

### [as2IncomingMessages](docs/as2incomingmessages/README.md)

* [getAs2IncomingMessages](docs/as2incomingmessages/README.md#getas2incomingmessages) - List As2 Incoming Messages

### [as2OutgoingMessages](docs/as2outgoingmessages/README.md)

* [getAs2OutgoingMessages](docs/as2outgoingmessages/README.md#getas2outgoingmessages) - List As2 Outgoing Messages

### [as2Partners](docs/as2partners/README.md)

* [deleteAs2PartnersId](docs/as2partners/README.md#deleteas2partnersid) - Delete As2 Partner
* [getAs2Partners](docs/as2partners/README.md#getas2partners) - List As2 Partners
* [getAs2PartnersId](docs/as2partners/README.md#getas2partnersid) - Show As2 Partner
* [patchAs2PartnersId](docs/as2partners/README.md#patchas2partnersid) - Update As2 Partner
* [postAs2Partners](docs/as2partners/README.md#postas2partners) - Create As2 Partner

### [as2Stations](docs/as2stations/README.md)

* [deleteAs2StationsId](docs/as2stations/README.md#deleteas2stationsid) - Delete As2 Station
* [getAs2Stations](docs/as2stations/README.md#getas2stations) - List As2 Stations
* [getAs2StationsId](docs/as2stations/README.md#getas2stationsid) - Show As2 Station
* [patchAs2StationsId](docs/as2stations/README.md#patchas2stationsid) - Update As2 Station
* [postAs2Stations](docs/as2stations/README.md#postas2stations) - Create As2 Station

### [automationRuns](docs/automationruns/README.md)

* [getAutomationRuns](docs/automationruns/README.md#getautomationruns) - List Automation Runs
* [getAutomationRunsId](docs/automationruns/README.md#getautomationrunsid) - Show Automation Run

### [automations](docs/automations/README.md)

* [deleteAutomationsId](docs/automations/README.md#deleteautomationsid) - Delete Automation
* [getAutomations](docs/automations/README.md#getautomations) - List Automations
* [getAutomationsId](docs/automations/README.md#getautomationsid) - Show Automation
* [patchAutomationsId](docs/automations/README.md#patchautomationsid) - Update Automation
* [postAutomations](docs/automations/README.md#postautomations) - Create Automation

### [bandwidthSnapshots](docs/bandwidthsnapshots/README.md)

* [getBandwidthSnapshots](docs/bandwidthsnapshots/README.md#getbandwidthsnapshots) - List Bandwidth Snapshots

### [behaviors](docs/behaviors/README.md)

* [behaviorListForPath](docs/behaviors/README.md#behaviorlistforpath) - List Behaviors by path
* [deleteBehaviorsId](docs/behaviors/README.md#deletebehaviorsid) - Delete Behavior
* [getBehaviors](docs/behaviors/README.md#getbehaviors) - List Behaviors
* [getBehaviorsId](docs/behaviors/README.md#getbehaviorsid) - Show Behavior
* [patchBehaviorsId](docs/behaviors/README.md#patchbehaviorsid) - Update Behavior
* [postBehaviors](docs/behaviors/README.md#postbehaviors) - Create Behavior
* [postBehaviorsWebhookTest](docs/behaviors/README.md#postbehaviorswebhooktest) - Test webhook.

### [bundleDownloads](docs/bundledownloads/README.md)

* [getBundleDownloads](docs/bundledownloads/README.md#getbundledownloads) - List Bundle Downloads

### [bundleNotifications](docs/bundlenotifications/README.md)

* [deleteBundleNotificationsId](docs/bundlenotifications/README.md#deletebundlenotificationsid) - Delete Bundle Notification
* [getBundleNotifications](docs/bundlenotifications/README.md#getbundlenotifications) - List Bundle Notifications
* [getBundleNotificationsId](docs/bundlenotifications/README.md#getbundlenotificationsid) - Show Bundle Notification
* [patchBundleNotificationsId](docs/bundlenotifications/README.md#patchbundlenotificationsid) - Update Bundle Notification
* [postBundleNotifications](docs/bundlenotifications/README.md#postbundlenotifications) - Create Bundle Notification

### [bundleRecipients](docs/bundlerecipients/README.md)

* [getBundleRecipients](docs/bundlerecipients/README.md#getbundlerecipients) - List Bundle Recipients
* [postBundleRecipients](docs/bundlerecipients/README.md#postbundlerecipients) - Create Bundle Recipient

### [bundleRegistrations](docs/bundleregistrations/README.md)

* [getBundleRegistrations](docs/bundleregistrations/README.md#getbundleregistrations) - List Bundle Registrations

### [bundles](docs/bundles/README.md)

* [deleteBundlesId](docs/bundles/README.md#deletebundlesid) - Delete Bundle
* [getBundles](docs/bundles/README.md#getbundles) - List Bundles
* [getBundlesId](docs/bundles/README.md#getbundlesid) - Show Bundle
* [patchBundlesId](docs/bundles/README.md#patchbundlesid) - Update Bundle
* [postBundles](docs/bundles/README.md#postbundles) - Create Bundle
* [postBundlesIdShare](docs/bundles/README.md#postbundlesidshare) - Send email(s) with a link to bundle

### [clickwraps](docs/clickwraps/README.md)

* [deleteClickwrapsId](docs/clickwraps/README.md#deleteclickwrapsid) - Delete Clickwrap
* [getClickwraps](docs/clickwraps/README.md#getclickwraps) - List Clickwraps
* [getClickwrapsId](docs/clickwraps/README.md#getclickwrapsid) - Show Clickwrap
* [patchClickwrapsId](docs/clickwraps/README.md#patchclickwrapsid) - Update Clickwrap
* [postClickwraps](docs/clickwraps/README.md#postclickwraps) - Create Clickwrap

### [dnsRecords](docs/dnsrecords/README.md)

* [getDnsRecords](docs/dnsrecords/README.md#getdnsrecords) - Show site DNS configuration.

### [externalEvents](docs/externalevents/README.md)

* [getExternalEvents](docs/externalevents/README.md#getexternalevents) - List External Events
* [getExternalEventsId](docs/externalevents/README.md#getexternaleventsid) - Show External Event
* [postExternalEvents](docs/externalevents/README.md#postexternalevents) - Create External Event

### [fileActions](docs/fileactions/README.md)

* [fileActionBeginUpload](docs/fileactions/README.md#fileactionbeginupload) - Begin file upload
* [fileActionCopy](docs/fileactions/README.md#fileactioncopy) - Copy file/folder
* [fileActionFind](docs/fileactions/README.md#fileactionfind) - Find file/folder by path
* [fileActionMove](docs/fileactions/README.md#fileactionmove) - Move file/folder

### [fileCommentReactions](docs/filecommentreactions/README.md)

* [deleteFileCommentReactionsId](docs/filecommentreactions/README.md#deletefilecommentreactionsid) - Delete File Comment Reaction
* [postFileCommentReactions](docs/filecommentreactions/README.md#postfilecommentreactions) - Create File Comment Reaction

### [fileComments](docs/filecomments/README.md)

* [deleteFileCommentsId](docs/filecomments/README.md#deletefilecommentsid) - Delete File Comment
* [fileCommentListForPath](docs/filecomments/README.md#filecommentlistforpath) - List File Comments by path
* [patchFileCommentsId](docs/filecomments/README.md#patchfilecommentsid) - Update File Comment
* [postFileComments](docs/filecomments/README.md#postfilecomments) - Create File Comment

### [fileMigrations](docs/filemigrations/README.md)

* [getFileMigrationsId](docs/filemigrations/README.md#getfilemigrationsid) - Show File Migration

### [files](docs/files/README.md)

* [deleteFilesPath](docs/files/README.md#deletefilespath) - Delete file/folder
* [fileDownload](docs/files/README.md#filedownload) - Download file
* [patchFilesPath](docs/files/README.md#patchfilespath) - Update file/folder metadata
* [postFilesPath](docs/files/README.md#postfilespath) - Upload file

### [folders](docs/folders/README.md)

* [folderListForPath](docs/folders/README.md#folderlistforpath) - List Folders by path
* [postFoldersPath](docs/folders/README.md#postfolderspath) - Create folder

### [formFieldSets](docs/formfieldsets/README.md)

* [deleteFormFieldSetsId](docs/formfieldsets/README.md#deleteformfieldsetsid) - Delete Form Field Set
* [getFormFieldSets](docs/formfieldsets/README.md#getformfieldsets) - List Form Field Sets
* [getFormFieldSetsId](docs/formfieldsets/README.md#getformfieldsetsid) - Show Form Field Set
* [patchFormFieldSetsId](docs/formfieldsets/README.md#patchformfieldsetsid) - Update Form Field Set
* [postFormFieldSets](docs/formfieldsets/README.md#postformfieldsets) - Create Form Field Set

### [groupUsers](docs/groupusers/README.md)

* [deleteGroupUsersId](docs/groupusers/README.md#deletegroupusersid) - Delete Group User
* [getGroupUsers](docs/groupusers/README.md#getgroupusers) - List Group Users
* [patchGroupUsersId](docs/groupusers/README.md#patchgroupusersid) - Update Group User
* [postGroupUsers](docs/groupusers/README.md#postgroupusers) - Create Group User

### [groups](docs/groups/README.md)

* [deleteGroupsGroupIdMembershipsUserId](docs/groups/README.md#deletegroupsgroupidmembershipsuserid) - Delete Group User
* [deleteGroupsId](docs/groups/README.md#deletegroupsid) - Delete Group
* [getGroups](docs/groups/README.md#getgroups) - List Groups
* [getGroupsGroupIdPermissions](docs/groups/README.md#getgroupsgroupidpermissions) - List Permissions
* [getGroupsGroupIdUsers](docs/groups/README.md#getgroupsgroupidusers) - List Group Users
* [getGroupsId](docs/groups/README.md#getgroupsid) - Show Group
* [patchGroupsGroupIdMembershipsUserId](docs/groups/README.md#patchgroupsgroupidmembershipsuserid) - Update Group User
* [patchGroupsId](docs/groups/README.md#patchgroupsid) - Update Group
* [postGroups](docs/groups/README.md#postgroups) - Create Group
* [postGroupsGroupIdUsers](docs/groups/README.md#postgroupsgroupidusers) - Create User

### [history](docs/history/README.md)

* [historyList](docs/history/README.md#historylist) - List site full action history.
* [historyListForFile](docs/history/README.md#historylistforfile) - List history for specific file.
* [historyListForFolder](docs/history/README.md#historylistforfolder) - List history for specific folder.
* [historyListForUser](docs/history/README.md#historylistforuser) - List history for specific user.
* [historyListLogins](docs/history/README.md#historylistlogins) - List site login history.

### [historyExportResults](docs/historyexportresults/README.md)

* [getHistoryExportResults](docs/historyexportresults/README.md#gethistoryexportresults) - List History Export Results

### [historyExports](docs/historyexports/README.md)

* [getHistoryExportsId](docs/historyexports/README.md#gethistoryexportsid) - Show History Export
* [postHistoryExports](docs/historyexports/README.md#posthistoryexports) - Create History Export

### [inboxRecipients](docs/inboxrecipients/README.md)

* [getInboxRecipients](docs/inboxrecipients/README.md#getinboxrecipients) - List Inbox Recipients
* [postInboxRecipients](docs/inboxrecipients/README.md#postinboxrecipients) - Create Inbox Recipient

### [inboxRegistrations](docs/inboxregistrations/README.md)

* [getInboxRegistrations](docs/inboxregistrations/README.md#getinboxregistrations) - List Inbox Registrations

### [inboxUploads](docs/inboxuploads/README.md)

* [getInboxUploads](docs/inboxuploads/README.md#getinboxuploads) - List Inbox Uploads

### [invoices](docs/invoices/README.md)

* [getInvoices](docs/invoices/README.md#getinvoices) - List Invoices
* [getInvoicesId](docs/invoices/README.md#getinvoicesid) - Show Invoice

### [ipAddresses](docs/ipaddresses/README.md)

* [getIpAddresses](docs/ipaddresses/README.md#getipaddresses) - List IP Addresses associated with the current site
* [getIpAddressesExavaultReserved](docs/ipaddresses/README.md#getipaddressesexavaultreserved) - List all possible public ExaVault IP addresses
* [getIpAddressesReserved](docs/ipaddresses/README.md#getipaddressesreserved) - List all possible public IP addresses

### [locks](docs/locks/README.md)

* [deleteLocksPath](docs/locks/README.md#deletelockspath) - Delete Lock
* [lockListForPath](docs/locks/README.md#locklistforpath) - List Locks by path
* [postLocksPath](docs/locks/README.md#postlockspath) - Create Lock

### [messageCommentReactions](docs/messagecommentreactions/README.md)

* [deleteMessageCommentReactionsId](docs/messagecommentreactions/README.md#deletemessagecommentreactionsid) - Delete Message Comment Reaction
* [getMessageCommentReactions](docs/messagecommentreactions/README.md#getmessagecommentreactions) - List Message Comment Reactions
* [getMessageCommentReactionsId](docs/messagecommentreactions/README.md#getmessagecommentreactionsid) - Show Message Comment Reaction
* [postMessageCommentReactions](docs/messagecommentreactions/README.md#postmessagecommentreactions) - Create Message Comment Reaction

### [messageComments](docs/messagecomments/README.md)

* [deleteMessageCommentsId](docs/messagecomments/README.md#deletemessagecommentsid) - Delete Message Comment
* [getMessageComments](docs/messagecomments/README.md#getmessagecomments) - List Message Comments
* [getMessageCommentsId](docs/messagecomments/README.md#getmessagecommentsid) - Show Message Comment
* [patchMessageCommentsId](docs/messagecomments/README.md#patchmessagecommentsid) - Update Message Comment
* [postMessageComments](docs/messagecomments/README.md#postmessagecomments) - Create Message Comment

### [messageReactions](docs/messagereactions/README.md)

* [deleteMessageReactionsId](docs/messagereactions/README.md#deletemessagereactionsid) - Delete Message Reaction
* [getMessageReactions](docs/messagereactions/README.md#getmessagereactions) - List Message Reactions
* [getMessageReactionsId](docs/messagereactions/README.md#getmessagereactionsid) - Show Message Reaction
* [postMessageReactions](docs/messagereactions/README.md#postmessagereactions) - Create Message Reaction

### [messages](docs/messages/README.md)

* [deleteMessagesId](docs/messages/README.md#deletemessagesid) - Delete Message
* [getMessages](docs/messages/README.md#getmessages) - List Messages
* [getMessagesId](docs/messages/README.md#getmessagesid) - Show Message
* [patchMessagesId](docs/messages/README.md#patchmessagesid) - Update Message
* [postMessages](docs/messages/README.md#postmessages) - Create Message

### [notifications](docs/notifications/README.md)

* [deleteNotificationsId](docs/notifications/README.md#deletenotificationsid) - Delete Notification
* [getNotifications](docs/notifications/README.md#getnotifications) - List Notifications
* [getNotificationsId](docs/notifications/README.md#getnotificationsid) - Show Notification
* [patchNotificationsId](docs/notifications/README.md#patchnotificationsid) - Update Notification
* [postNotifications](docs/notifications/README.md#postnotifications) - Create Notification

### [payments](docs/payments/README.md)

* [getPayments](docs/payments/README.md#getpayments) - List Payments
* [getPaymentsId](docs/payments/README.md#getpaymentsid) - Show Payment

### [permissions](docs/permissions/README.md)

* [deletePermissionsId](docs/permissions/README.md#deletepermissionsid) - Delete Permission
* [getPermissions](docs/permissions/README.md#getpermissions) - List Permissions
* [postPermissions](docs/permissions/README.md#postpermissions) - Create Permission

### [priorities](docs/priorities/README.md)

* [getPriorities](docs/priorities/README.md#getpriorities) - List Priorities

### [projects](docs/projects/README.md)

* [deleteProjectsId](docs/projects/README.md#deleteprojectsid) - Delete Project
* [getProjects](docs/projects/README.md#getprojects) - List Projects
* [getProjectsId](docs/projects/README.md#getprojectsid) - Show Project
* [patchProjectsId](docs/projects/README.md#patchprojectsid) - Update Project
* [postProjects](docs/projects/README.md#postprojects) - Create Project

### [publicKeys](docs/publickeys/README.md)

* [deletePublicKeysId](docs/publickeys/README.md#deletepublickeysid) - Delete Public Key
* [getPublicKeys](docs/publickeys/README.md#getpublickeys) - List Public Keys
* [getPublicKeysId](docs/publickeys/README.md#getpublickeysid) - Show Public Key
* [patchPublicKeysId](docs/publickeys/README.md#patchpublickeysid) - Update Public Key
* [postPublicKeys](docs/publickeys/README.md#postpublickeys) - Create Public Key

### [remoteBandwidthSnapshots](docs/remotebandwidthsnapshots/README.md)

* [getRemoteBandwidthSnapshots](docs/remotebandwidthsnapshots/README.md#getremotebandwidthsnapshots) - List Remote Bandwidth Snapshots

### [remoteServers](docs/remoteservers/README.md)

* [deleteRemoteServersId](docs/remoteservers/README.md#deleteremoteserversid) - Delete Remote Server
* [getRemoteServers](docs/remoteservers/README.md#getremoteservers) - List Remote Servers
* [getRemoteServersId](docs/remoteservers/README.md#getremoteserversid) - Show Remote Server
* [getRemoteServersIdConfigurationFile](docs/remoteservers/README.md#getremoteserversidconfigurationfile) - Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)
* [patchRemoteServersId](docs/remoteservers/README.md#patchremoteserversid) - Update Remote Server
* [postRemoteServers](docs/remoteservers/README.md#postremoteservers) - Create Remote Server
* [postRemoteServersIdConfigurationFile](docs/remoteservers/README.md#postremoteserversidconfigurationfile) - Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

### [requests](docs/requests/README.md)

* [deleteRequestsId](docs/requests/README.md#deleterequestsid) - Delete Request
* [getRequests](docs/requests/README.md#getrequests) - List Requests
* [getRequestsFoldersPath](docs/requests/README.md#getrequestsfolderspath) - List Requests
* [postRequests](docs/requests/README.md#postrequests) - Create Request

### [sessions](docs/sessions/README.md)

* [deleteSessions](docs/sessions/README.md#deletesessions) - Delete user session (log out)
* [postSessions](docs/sessions/README.md#postsessions) - Create user session (log in)

### [settingsChanges](docs/settingschanges/README.md)

* [getSettingsChanges](docs/settingschanges/README.md#getsettingschanges) - List Settings Changes

### [sftpHostKeys](docs/sftphostkeys/README.md)

* [deleteSftpHostKeysId](docs/sftphostkeys/README.md#deletesftphostkeysid) - Delete Sftp Host Key
* [getSftpHostKeys](docs/sftphostkeys/README.md#getsftphostkeys) - List Sftp Host Keys
* [getSftpHostKeysId](docs/sftphostkeys/README.md#getsftphostkeysid) - Show Sftp Host Key
* [patchSftpHostKeysId](docs/sftphostkeys/README.md#patchsftphostkeysid) - Update Sftp Host Key
* [postSftpHostKeys](docs/sftphostkeys/README.md#postsftphostkeys) - Create Sftp Host Key

### [site](docs/site/README.md)

* [getSite](docs/site/README.md#getsite) - Show site settings
* [getSiteApiKeys](docs/site/README.md#getsiteapikeys) - List Api Keys
* [getSiteDnsRecords](docs/site/README.md#getsitednsrecords) - Show site DNS configuration.
* [getSiteIpAddresses](docs/site/README.md#getsiteipaddresses) - List IP Addresses associated with the current site
* [getSiteUsage](docs/site/README.md#getsiteusage) - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
* [patchSite](docs/site/README.md#patchsite) - Update site settings.
* [postSiteApiKeys](docs/site/README.md#postsiteapikeys) - Create Api Key
* [postSiteTestWebhook](docs/site/README.md#postsitetestwebhook) - Test webhook.

### [ssoStrategies](docs/ssostrategies/README.md)

* [getSsoStrategies](docs/ssostrategies/README.md#getssostrategies) - List Sso Strategies
* [getSsoStrategiesId](docs/ssostrategies/README.md#getssostrategiesid) - Show Sso Strategy
* [postSsoStrategiesIdSync](docs/ssostrategies/README.md#postssostrategiesidsync) - Synchronize provisioning data with the SSO remote server.

### [styles](docs/styles/README.md)

* [deleteStylesPath](docs/styles/README.md#deletestylespath) - Delete Style
* [getStylesPath](docs/styles/README.md#getstylespath) - Show Style
* [patchStylesPath](docs/styles/README.md#patchstylespath) - Update Style

### [usageDailySnapshots](docs/usagedailysnapshots/README.md)

* [getUsageDailySnapshots](docs/usagedailysnapshots/README.md#getusagedailysnapshots) - List Usage Daily Snapshots

### [usageSnapshots](docs/usagesnapshots/README.md)

* [getUsageSnapshots](docs/usagesnapshots/README.md#getusagesnapshots) - List Usage Snapshots

### [user](docs/user/README.md)

* [getUserApiKeys](docs/user/README.md#getuserapikeys) - List Api Keys
* [getUserGroups](docs/user/README.md#getusergroups) - List Group Users
* [getUserPublicKeys](docs/user/README.md#getuserpublickeys) - List Public Keys
* [patchUser](docs/user/README.md#patchuser) - Update User
* [postUserApiKeys](docs/user/README.md#postuserapikeys) - Create Api Key
* [postUserPublicKeys](docs/user/README.md#postuserpublickeys) - Create Public Key

### [userCipherUses](docs/usercipheruses/README.md)

* [getUserCipherUses](docs/usercipheruses/README.md#getusercipheruses) - List User Cipher Uses

### [userRequests](docs/userrequests/README.md)

* [deleteUserRequestsId](docs/userrequests/README.md#deleteuserrequestsid) - Delete User Request
* [getUserRequests](docs/userrequests/README.md#getuserrequests) - List User Requests
* [getUserRequestsId](docs/userrequests/README.md#getuserrequestsid) - Show User Request
* [postUserRequests](docs/userrequests/README.md#postuserrequests) - Create User Request

### [users](docs/users/README.md)

* [deleteUsersId](docs/users/README.md#deleteusersid) - Delete User
* [getUsers](docs/users/README.md#getusers) - List Users
* [getUsersId](docs/users/README.md#getusersid) - Show User
* [getUsersUserIdApiKeys](docs/users/README.md#getusersuseridapikeys) - List Api Keys
* [getUsersUserIdCipherUses](docs/users/README.md#getusersuseridcipheruses) - List User Cipher Uses
* [getUsersUserIdGroups](docs/users/README.md#getusersuseridgroups) - List Group Users
* [getUsersUserIdPermissions](docs/users/README.md#getusersuseridpermissions) - List Permissions
* [getUsersUserIdPublicKeys](docs/users/README.md#getusersuseridpublickeys) - List Public Keys
* [patchUsersId](docs/users/README.md#patchusersid) - Update User
* [postUsers](docs/users/README.md#postusers) - Create User
* [postUsersId2faReset](docs/users/README.md#postusersid2fareset) - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
* [postUsersIdResendWelcomeEmail](docs/users/README.md#postusersidresendwelcomeemail) - Resend user welcome email
* [postUsersIdUnlock](docs/users/README.md#postusersidunlock) - Unlock user who has been locked out due to failed logins.
* [postUsersUserIdApiKeys](docs/users/README.md#postusersuseridapikeys) - Create Api Key
* [postUsersUserIdPublicKeys](docs/users/README.md#postusersuseridpublickeys) - Create Public Key

### [webhookTests](docs/webhooktests/README.md)

* [postWebhookTests](docs/webhooktests/README.md#postwebhooktests) - Create Webhook Test
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
