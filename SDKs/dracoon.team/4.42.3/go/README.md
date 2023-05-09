# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/dracoon.team/4.42.3/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.CompleteOpenIDLogin(ctx, operations.CompleteOpenIDLoginRequest{
        Code: "corrupti",
        IDToken: sdk.String("provident"),
        State: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Auth](docs/auth/README.md)

* [~~CompleteOpenIDLogin~~](docs/auth/README.md#completeopenidlogin) - Complete OpenID Connect authentication :warning: **Deprecated**
* [~~InitiateOpenIDLogin~~](docs/auth/README.md#initiateopenidlogin) - Initiate OpenID Connect authentication :warning: **Deprecated**
* [~~Login~~](docs/auth/README.md#login) - Authenticate user (Login) :warning: **Deprecated**
* [Ping](docs/auth/README.md#ping) - Ping
* [RecoverUserName](docs/auth/README.md#recoverusername) - Recover username
* [RequestPasswordReset](docs/auth/README.md#requestpasswordreset) - Request password reset
* [ResetPassword](docs/auth/README.md#resetpassword) - Reset password
* [ValidateResetPasswordToken](docs/auth/README.md#validateresetpasswordtoken) - Validate information for password reset

### [Config](docs/config/README.md)

* [RequestAlgorithms](docs/config/README.md#requestalgorithms) - Request algorithms
* [RequestClassificationPoliciesConfigInfo](docs/config/README.md#requestclassificationpoliciesconfiginfo) - Request classification policies
* [RequestCurrentProductPackages](docs/config/README.md#requestcurrentproductpackages) - Request list of currently enabled product packages
* [RequestGeneralSettingsInfo](docs/config/README.md#requestgeneralsettingsinfo) - Request general settings
* [RequestGuestUsersPoliciesConfigInfo](docs/config/README.md#requestguestuserspoliciesconfiginfo) - Request guest users policies
* [RequestInfrastructurePropertiesInfo](docs/config/README.md#requestinfrastructurepropertiesinfo) - Request infrastructure properties
* [RequestNotificationChannelsInfo](docs/config/README.md#requestnotificationchannelsinfo) - Request list of notification channels
* [RequestPasswordPoliciesConfigInfo](docs/config/README.md#requestpasswordpoliciesconfiginfo) - Request password policies
* [RequestProductPackages](docs/config/README.md#requestproductpackages) - Request list of product packages
* [RequestS3TagsInfo](docs/config/README.md#requests3tagsinfo) - Request list of configured S3 tags
* [RequestSystemDefaultsInfo](docs/config/README.md#requestsystemdefaultsinfo) - Request default values
* [~~RequestSystemSettings~~](docs/config/README.md#requestsystemsettings) - Request system settings :warning: **Deprecated**
* [~~UpdateSystemSettings~~](docs/config/README.md#updatesystemsettings) - Update system settings :warning: **Deprecated**

### [Downloads](docs/downloads/README.md)

* [DownloadAvatar](docs/downloads/README.md#downloadavatar) - Download avatar
* [DownloadFileViaToken](docs/downloads/README.md#downloadfileviatoken) - Download file
* [DownloadFileViaToken1](docs/downloads/README.md#downloadfileviatoken1) - Download file
* [DownloadZipArchiveViaToken](docs/downloads/README.md#downloadziparchiveviatoken) - Download ZIP archive

### [Eventlog](docs/eventlog/README.md)

* [RequestAuditNodeInfo](docs/eventlog/README.md#requestauditnodeinfo) - Request nodes
* [~~RequestAuditNodeUserData~~](docs/eventlog/README.md#requestauditnodeuserdata) - Request node assigned users with permissions :warning: **Deprecated**
* [RequestLogEventsAsJSON](docs/eventlog/README.md#requestlogeventsasjson) - Request system events
* [RequestLogOperations](docs/eventlog/README.md#requestlogoperations) - Request allowed Log Operations

### [Groups](docs/groups/README.md)

* [AddGroupMembers](docs/groups/README.md#addgroupmembers) - Add group members
* [CreateGroup](docs/groups/README.md#creategroup) - Create new user group
* [RemoveGroup](docs/groups/README.md#removegroup) - Remove user group
* [RemoveGroupMembers](docs/groups/README.md#removegroupmembers) - Remove group members
* [RequestGroup](docs/groups/README.md#requestgroup) - Request user group
* [RequestGroupMembers](docs/groups/README.md#requestgroupmembers) - Request group member users or / and users who can become a member
* [RequestGroupRoles](docs/groups/README.md#requestgrouproles) - Request list of roles assigned to the group
* [~~RequestGroupRooms~~](docs/groups/README.md#requestgrouprooms) - Request rooms granted to the group or / and rooms that can be granted :warning: **Deprecated**
* [RequestGroups](docs/groups/README.md#requestgroups) - Request list of user groups
* [RequestLastAdminRoomsGroups](docs/groups/README.md#requestlastadminroomsgroups) - Request rooms where the group is defined as last admin group
* [UpdateGroup](docs/groups/README.md#updategroup) - Update user group's metadata

### [Internal](docs/internal/README.md)

* [InternalRequestSubscriptionPlan](docs/internal/README.md#internalrequestsubscriptionplan) - Request subscription plan
* [InternalSetSubscriptionPlan](docs/internal/README.md#internalsetsubscriptionplan) - Set subscription plan

### [Nodes](docs/nodes/README.md)

* [AddFavorite](docs/nodes/README.md#addfavorite) - Mark a node (room, folder or file) as favorite
* [AddRoomGuestUsers](docs/nodes/README.md#addroomguestusers) - Add guest users to a room
* [CancelFileUpload](docs/nodes/README.md#cancelfileupload) - Cancel file upload
* [ChangePendingAssignments](docs/nodes/README.md#changependingassignments) - Handle user-room assignments per group
* [~~CompleteFileUpload~~](docs/nodes/README.md#completefileupload) - Complete file upload :warning: **Deprecated**
* [CompleteS3FileUpload](docs/nodes/README.md#completes3fileupload) - Complete S3 file upload
* [ConfigureRoom](docs/nodes/README.md#configureroom) - Configure room
* [CopyNodes](docs/nodes/README.md#copynodes) - Copy node(s)
* [CreateAndPreserveRoomRescueKeyPair](docs/nodes/README.md#createandpreserveroomrescuekeypair) - Create key pair and preserve copy of old private key
* [CreateFileUploadChannel](docs/nodes/README.md#createfileuploadchannel) - Create new file upload channel
* [CreateFolder](docs/nodes/README.md#createfolder) - Create new folder
* [CreateNodeComment](docs/nodes/README.md#createnodecomment) - Create node comment
* [CreateRoom](docs/nodes/README.md#createroom) - Create new room
* [DownloadZipArchive](docs/nodes/README.md#downloadziparchive) - Download files / folders as ZIP archive
* [EmptyDeletedNodes](docs/nodes/README.md#emptydeletednodes) - Empty recycle bin
* [EncryptRoom](docs/nodes/README.md#encryptroom) - Encrypt room
* [GenerateDownloadURL](docs/nodes/README.md#generatedownloadurl) - Generate download URL
* [GenerateDownloadURLForZipArchive](docs/nodes/README.md#generatedownloadurlforziparchive) - Generate download URL for ZIP download
* [GeneratePresignedUrlsFiles](docs/nodes/README.md#generatepresignedurlsfiles) - Generate presigned URLs for S3 file upload
* [HandleRoomWebhookAssignments](docs/nodes/README.md#handleroomwebhookassignments) - Assign or unassign webhooks to room
* [MoveNodes](docs/nodes/README.md#movenodes) - Move node(s)
* [RemoveDeletedNodes](docs/nodes/README.md#removedeletednodes) - Remove nodes from recycle bin
* [RemoveFavorite](docs/nodes/README.md#removefavorite) - Unmark a node (room, folder or file) as favorite
* [RemoveNode](docs/nodes/README.md#removenode) - Remove node
* [RemoveNodeComment](docs/nodes/README.md#removenodecomment) - Remove node comment
* [RemoveNodes](docs/nodes/README.md#removenodes) - Remove nodes
* [RemoveRoomRescueKeyPair](docs/nodes/README.md#removeroomrescuekeypair) - Remove rooms's rescue key pair
* [RequestDeletedNode](docs/nodes/README.md#requestdeletednode) - Request deleted node
* [RequestDeletedNodeVersions](docs/nodes/README.md#requestdeletednodeversions) - Request deleted versions of nodes
* [RequestDeletedNodesSummary](docs/nodes/README.md#requestdeletednodessummary) - Request list of deleted nodes
* [RequestFileVersionList](docs/nodes/README.md#requestfileversionlist) - Request list of file versions
* [RequestListOfWebhooksForRoom](docs/nodes/README.md#requestlistofwebhooksforroom) - Request list of webhooks that are assigned or can be assigned to this room
* [RequestMissingFileKeys](docs/nodes/README.md#requestmissingfilekeys) - Request files without user's file key
* [RequestNode](docs/nodes/README.md#requestnode) - Request node
* [RequestNodeComments](docs/nodes/README.md#requestnodecomments) - Request list of node comments
* [RequestNodeParents](docs/nodes/README.md#requestnodeparents) - Request list of parent nodes
* [RequestNodes](docs/nodes/README.md#requestnodes) - Request list of nodes
* [RequestPendingAssignments](docs/nodes/README.md#requestpendingassignments) - Request user-room assignments per group
* [RequestRoomActivitiesLogAsJSON](docs/nodes/README.md#requestroomactivitieslogasjson) - Request events of a room
* [RequestRoomGroups](docs/nodes/README.md#requestroomgroups) - Request room granted group(s) or / and group(s) that can be granted
* [RequestRoomPolicies](docs/nodes/README.md#requestroompolicies) - Request Room Policies
* [~~RequestRoomRescueKey~~](docs/nodes/README.md#requestroomrescuekey) - Request room rescue key :warning: **Deprecated**
* [RequestRoomRescueKeyPair](docs/nodes/README.md#requestroomrescuekeypair) - Request room rescue key
* [RequestRoomRescueKeyPairs](docs/nodes/README.md#requestroomrescuekeypairs) - Request all room rescue key pairs
* [RequestRoomS3Tags](docs/nodes/README.md#requestrooms3tags) - Request list of all assigned S3 tags to the room
* [RequestRoomUsers](docs/nodes/README.md#requestroomusers) - Request room granted user(s) or / and user(s) that can be granted
* [~~RequestSystemRescueKey~~](docs/nodes/README.md#requestsystemrescuekey) - Request system rescue key :warning: **Deprecated**
* [RequestUploadStatusFiles](docs/nodes/README.md#requestuploadstatusfiles) - Request status of S3 file upload
* [RequestUserFileKey](docs/nodes/README.md#requestuserfilekey) - Request user's file key
* [RestoreNodes](docs/nodes/README.md#restorenodes) - Restore deleted nodes
* [RevokeRoomGroups](docs/nodes/README.md#revokeroomgroups) - Revoke granted group(s) from room
* [RevokeRoomUsers](docs/nodes/README.md#revokeroomusers) - Revoke granted user(s) from room
* [SearchNodes](docs/nodes/README.md#searchnodes) - Search nodes
* [SetRoomPolicies](docs/nodes/README.md#setroompolicies) - Set room policies
* [SetRoomRescueKeyPair](docs/nodes/README.md#setroomrescuekeypair) - Set room's rescue key pair
* [SetRoomS3Tags](docs/nodes/README.md#setrooms3tags) - Set S3 tags for a room
* [SetUserFileKeys](docs/nodes/README.md#setuserfilekeys) - Set file keys for a list of users and files
* [UpdateFavorites](docs/nodes/README.md#updatefavorites) - Mark or unmark a list of nodes (room, folder or file) as favorite
* [UpdateFile](docs/nodes/README.md#updatefile) - Updates a file’s metadata
* [UpdateFiles](docs/nodes/README.md#updatefiles) - Updates a list of  file’s metadata
* [UpdateFolder](docs/nodes/README.md#updatefolder) - Updates folder’s metadata
* [UpdateNodeComment](docs/nodes/README.md#updatenodecomment) - Edit node comment
* [UpdateRoom](docs/nodes/README.md#updateroom) - Updates room’s metadata
* [UpdateRoomGroups](docs/nodes/README.md#updateroomgroups) - Add or change room granted group(s)
* [UpdateRoomUsers](docs/nodes/README.md#updateroomusers) - Add or change room granted user(s)
* [~~UploadFileAsMultipart~~](docs/nodes/README.md#uploadfileasmultipart) - Upload file :warning: **Deprecated**

### [Provisioning](docs/provisioning/README.md)

* [CreateCustomer](docs/provisioning/README.md#createcustomer) - Create customer
* [CreateTenantWebhook](docs/provisioning/README.md#createtenantwebhook) - Create tenant webhook
* [RemoveCustomer](docs/provisioning/README.md#removecustomer) - Remove customer
* [RemoveCustomerAttribute](docs/provisioning/README.md#removecustomerattribute) - Remove customer attribute
* [RemoveTenantWebhook](docs/provisioning/README.md#removetenantwebhook) - Remove tenant webhook
* [RequestCustomer](docs/provisioning/README.md#requestcustomer) - Get customer
* [RequestCustomerAttributes](docs/provisioning/README.md#requestcustomerattributes) - Request customer attributes
* [RequestCustomerUsers](docs/provisioning/README.md#requestcustomerusers) - Request list of customer users
* [RequestCustomers](docs/provisioning/README.md#requestcustomers) - Request list of customers
* [RequestListOfEventTypesForTenant](docs/provisioning/README.md#requestlistofeventtypesfortenant) - Request list of event types
* [RequestListOfTenantWebhooks](docs/provisioning/README.md#requestlistoftenantwebhooks) - Request list of tenant webhooks
* [RequestTenantWebhook](docs/provisioning/README.md#requesttenantwebhook) - Request tenant webhook
* [ResetTenantWebhookLifetime](docs/provisioning/README.md#resettenantwebhooklifetime) - Reset tenant webhook lifetime
* [~~SetCustomerAttributes~~](docs/provisioning/README.md#setcustomerattributes) - Set customer attributes :warning: **Deprecated**
* [UpdateCustomer](docs/provisioning/README.md#updatecustomer) - Update customer
* [UpdateCustomerAttributes](docs/provisioning/README.md#updatecustomerattributes) - Add or edit customer attributes
* [UpdateTenantWebhook](docs/provisioning/README.md#updatetenantwebhook) - Update tenant webhook

### [Public](docs/public/README.md)

* [CancelFileUploadViaShare](docs/public/README.md#cancelfileuploadviashare) - Cancel file upload
* [CheckPublicDownloadSharePassword](docs/public/README.md#checkpublicdownloadsharepassword) - Check public Download Share password
* [CompleteFileUploadViaShare](docs/public/README.md#completefileuploadviashare) - Complete file upload
* [CompleteS3FileUploadViaShare](docs/public/README.md#completes3fileuploadviashare) - Complete S3 file upload
* [CreateShareUploadChannel](docs/public/README.md#createshareuploadchannel) - Create new file upload channel
* [DownloadFileViaTokenPublic](docs/public/README.md#downloadfileviatokenpublic) - Download file with token
* [DownloadFileViaTokenPublic1](docs/public/README.md#downloadfileviatokenpublic1) - Download file with token
* [GenerateDownloadURLPublic](docs/public/README.md#generatedownloadurlpublic) - Generate download URL
* [GeneratePresignedUrlsPublic](docs/public/README.md#generatepresignedurlspublic) - Generate presigned URLs for S3 file upload
* [RequestActiveDirectoryAuthInfo](docs/public/README.md#requestactivedirectoryauthinfo) - Request Active Directory authentication information
* [RequestOpenIDAuthInfo](docs/public/README.md#requestopenidauthinfo) - Request OpenID Connect provider authentication information
* [RequestPublicDownloadShareInfo](docs/public/README.md#requestpublicdownloadshareinfo) - Request public Download Share information
* [RequestPublicUploadShareInfo](docs/public/README.md#requestpublicuploadshareinfo) - Request public Upload Share information
* [RequestSoftwareVersion](docs/public/README.md#requestsoftwareversion) - Request software version information
* [RequestSystemInfo](docs/public/README.md#requestsysteminfo) - Request system information
* [RequestSystemTime](docs/public/README.md#requestsystemtime) - Request system time
* [RequestThirdPartyDependencies](docs/public/README.md#requestthirdpartydependencies) - Request third-party software dependencies
* [RequestUploadStatusPublic](docs/public/README.md#requestuploadstatuspublic) - Request status of S3 file upload
* [UploadFileAsMultipartPublic1](docs/public/README.md#uploadfileasmultipartpublic1) - Upload file

### [Resources](docs/resources/README.md)

* [RequestSubscriptionScopes](docs/resources/README.md#requestsubscriptionscopes) - Request list of subscription scopes
* [RequestUserAvatar](docs/resources/README.md#requestuseravatar) - Request user avatar

### [Roles](docs/roles/README.md)

* [AddRoleGroups](docs/roles/README.md#addrolegroups) - Assign group(s) to the role
* [AddRoleUsers](docs/roles/README.md#addroleusers) - Assign user(s) to the role
* [RequestRoleGroups](docs/roles/README.md#requestrolegroups) - Request groups with specific role
* [RequestRoleUsers](docs/roles/README.md#requestroleusers) - Request users with specific role
* [RequestRoles](docs/roles/README.md#requestroles) - Request all roles with assigned rights
* [RevokeRoleGroups](docs/roles/README.md#revokerolegroups) - Revoke granted role from group(s)
* [RevokeRoleUsers](docs/roles/README.md#revokeroleusers) - Revoke granted role from user(s)

### [Settings](docs/settings/README.md)

* [CreateAndPreserveKeyPair](docs/settings/README.md#createandpreservekeypair) - Create system rescue key pair and preserve copy of old private key
* [CreateWebhook](docs/settings/README.md#createwebhook) - Create webhook
* [RemoveSystemRescueKeyPair](docs/settings/README.md#removesystemrescuekeypair) - Remove system rescue key pair
* [RemoveWebhook](docs/settings/README.md#removewebhook) - Remove webhook
* [RequestAllSystemRescueKeyPairs](docs/settings/README.md#requestallsystemrescuekeypairs) - Request all system rescue key pairs
* [RequestListOfEventTypesForConfigManager](docs/settings/README.md#requestlistofeventtypesforconfigmanager) - Request list of event types
* [RequestListOfWebhooks](docs/settings/README.md#requestlistofwebhooks) - Request list of webhooks
* [RequestNotificationChannels](docs/settings/README.md#requestnotificationchannels) - Request list of notification channels
* [RequestSettings](docs/settings/README.md#requestsettings) - Request customer settings
* [RequestSystemRescueKeyPair](docs/settings/README.md#requestsystemrescuekeypair) - Request system rescue key pair
* [RequestWebhook](docs/settings/README.md#requestwebhook) - Request webhook
* [ResetWebhookLifetime](docs/settings/README.md#resetwebhooklifetime) - Reset webhook lifetime
* [SetSettings](docs/settings/README.md#setsettings) - Set customer settings
* [SetSystemRescueKeyPair](docs/settings/README.md#setsystemrescuekeypair) - Activate client-side encryption for customer
* [ToggleNotificationChannels](docs/settings/README.md#togglenotificationchannels) - Toggle notification channels
* [UpdateWebhook](docs/settings/README.md#updatewebhook) - Update webhook

### [Shares](docs/shares/README.md)

* [CreateDownloadShare](docs/shares/README.md#createdownloadshare) - Create new Download Share
* [CreateUploadShare](docs/shares/README.md#createuploadshare) - Create new Upload Share
* [DeleteDownloadShares](docs/shares/README.md#deletedownloadshares) - Remove Download Shares
* [DeleteUploadShares](docs/shares/README.md#deleteuploadshares) - Remove Upload Shares
* [RemoveDownloadShare](docs/shares/README.md#removedownloadshare) - Remove Download Share
* [RemoveUploadShare](docs/shares/README.md#removeuploadshare) - Remove Upload Share
* [RequestDownloadShare](docs/shares/README.md#requestdownloadshare) - Request Download Share
* [RequestDownloadShareQr](docs/shares/README.md#requestdownloadshareqr) - Request Download Share via QR Code
* [RequestDownloadShares](docs/shares/README.md#requestdownloadshares) - Request list of Download Shares
* [RequestUploadShare](docs/shares/README.md#requestuploadshare) - Request Upload Share
* [RequestUploadShareQr](docs/shares/README.md#requestuploadshareqr) - Request Upload Share via QR Code
* [RequestUploadShares](docs/shares/README.md#requestuploadshares) - Request list of Upload Shares
* [SendDownloadShareLinkViaEmail](docs/shares/README.md#senddownloadsharelinkviaemail) - Send an existing Download Share link via email
* [SendUploadShareLinkViaEmail](docs/shares/README.md#senduploadsharelinkviaemail) - Send an existing Upload Share link via email
* [UpdateDownloadShare](docs/shares/README.md#updatedownloadshare) - Update Download Share
* [UpdateDownloadShares](docs/shares/README.md#updatedownloadshares) - Update a list of Download Shares
* [UpdateUploadShare](docs/shares/README.md#updateuploadshare) - Update Upload Share
* [UpdateUploadShares](docs/shares/README.md#updateuploadshares) - Update List of Upload Shares

### [SystemAuthConfig](docs/systemauthconfig/README.md)

* [CreateAdConfig](docs/systemauthconfig/README.md#createadconfig) - Create Active Directory configuration
* [CreateOAuthClient](docs/systemauthconfig/README.md#createoauthclient) - Create OAuth client
* [CreateOpenIDIdpConfig](docs/systemauthconfig/README.md#createopenididpconfig) - Create OpenID Connect IDP configuration
* [CreateRadiusConfig](docs/systemauthconfig/README.md#createradiusconfig) - Create RADIUS configuration
* [RemoveAdConfig](docs/systemauthconfig/README.md#removeadconfig) - Remove Active Directory configuration
* [RemoveOAuthClient](docs/systemauthconfig/README.md#removeoauthclient) - Remove OAuth client
* [RemoveOpenIDIdpConfig](docs/systemauthconfig/README.md#removeopenididpconfig) - Remove OpenID Connect IDP configuration
* [RemoveRadiusConfig](docs/systemauthconfig/README.md#removeradiusconfig) - Remove RADIUS configuration
* [RequestAdConfig](docs/systemauthconfig/README.md#requestadconfig) - Request Active Directory configuration
* [RequestAdConfigs](docs/systemauthconfig/README.md#requestadconfigs) - Request list of Active Directory configurations
* [RequestOAuthClient](docs/systemauthconfig/README.md#requestoauthclient) - Request OAuth client
* [RequestOAuthClients](docs/systemauthconfig/README.md#requestoauthclients) - Request list of OAuth clients
* [RequestOpenIDIdpConfig](docs/systemauthconfig/README.md#requestopenididpconfig) - Request OpenID Connect IDP configuration
* [RequestOpenIDIdpConfigs](docs/systemauthconfig/README.md#requestopenididpconfigs) - Request list of OpenID Connect IDP configurations
* [RequestRadiusConfig](docs/systemauthconfig/README.md#requestradiusconfig) - Request RADIUS configuration
* [TestAdConfig](docs/systemauthconfig/README.md#testadconfig) - Test Active Directory configuration
* [TestRadiusConfig](docs/systemauthconfig/README.md#testradiusconfig) - Test RADIUS server availability
* [UpdateAdConfig](docs/systemauthconfig/README.md#updateadconfig) - Update Active Directory configuration
* [UpdateOAuthClient](docs/systemauthconfig/README.md#updateoauthclient) - Update OAuth client
* [UpdateOpenIDIdpConfig](docs/systemauthconfig/README.md#updateopenididpconfig) - Update OpenID Connect IDP configuration
* [UpdateRadiusConfig](docs/systemauthconfig/README.md#updateradiusconfig) - Update RADIUS configuration

### [SystemPoliciesConfig](docs/systempoliciesconfig/README.md)

* [ChangeClassificationPoliciesConfig](docs/systempoliciesconfig/README.md#changeclassificationpoliciesconfig) - Change classification policies
* [ChangeGuestUsersPoliciesConfig](docs/systempoliciesconfig/README.md#changeguestuserspoliciesconfig) - Change guest user policies
* [ChangeMfaPoliciesConfig](docs/systempoliciesconfig/README.md#changemfapoliciesconfig) - Change MFA policies
* [ChangePasswordPoliciesConfig](docs/systempoliciesconfig/README.md#changepasswordpoliciesconfig) - Change password policies
* [EnforceLoginPasswordChange](docs/systempoliciesconfig/README.md#enforceloginpasswordchange) - Enforce login password change for all users
* [RequestClassificationPoliciesConfig](docs/systempoliciesconfig/README.md#requestclassificationpoliciesconfig) - Request classification policies
* [RequestGuestUsersPoliciesConfig](docs/systempoliciesconfig/README.md#requestguestuserspoliciesconfig) - Request guest user policies
* [RequestMfaPoliciesConfig](docs/systempoliciesconfig/README.md#requestmfapoliciesconfig) - Request MFA policies
* [RequestPasswordPoliciesConfig](docs/systempoliciesconfig/README.md#requestpasswordpoliciesconfig) - Request password policies
* [RequestPasswordPoliciesForPasswordType](docs/systempoliciesconfig/README.md#requestpasswordpoliciesforpasswordtype) - Request password policies for a certain password type

### [SystemSettingsConfig](docs/systemsettingsconfig/README.md)

* [RequestAuthConfig](docs/systemsettingsconfig/README.md#requestauthconfig) - Request authentication settings
* [RequestEventlogConfig](docs/systemsettingsconfig/README.md#requesteventlogconfig) - Request eventlog settings
* [RequestGeneralSettings](docs/systemsettingsconfig/README.md#requestgeneralsettings) - Request general settings
* [RequestInfrastructureProperties](docs/systemsettingsconfig/README.md#requestinfrastructureproperties) - Request infrastructure properties
* [RequestSyslogConfig](docs/systemsettingsconfig/README.md#requestsyslogconfig) - Request syslog settings
* [RequestSystemDefaults](docs/systemsettingsconfig/README.md#requestsystemdefaults) - Request system defaults
* [UpdateAuthConfig](docs/systemsettingsconfig/README.md#updateauthconfig) - Update authentication settings
* [UpdateEventlogConfig](docs/systemsettingsconfig/README.md#updateeventlogconfig) - Update eventlog settings
* [UpdateGeneralSettings](docs/systemsettingsconfig/README.md#updategeneralsettings) - Update general settings
* [UpdateSyslogConfig](docs/systemsettingsconfig/README.md#updatesyslogconfig) - Update syslog settings
* [UpdateSystemDefaults](docs/systemsettingsconfig/README.md#updatesystemdefaults) - Update system defaults

### [SystemStorageConfig](docs/systemstorageconfig/README.md)

* [CreateS3Config](docs/systemstorageconfig/README.md#creates3config) - Create S3 storage configuration
* [CreateS3Tag](docs/systemstorageconfig/README.md#creates3tag) - Create S3 tag
* [RemoveS3Tag](docs/systemstorageconfig/README.md#removes3tag) - Remove S3 tag
* [Request3Config](docs/systemstorageconfig/README.md#request3config) - Request S3 storage configuration
* [RequestS3Tag](docs/systemstorageconfig/README.md#requests3tag) - Request S3 tag
* [RequestS3TagList](docs/systemstorageconfig/README.md#requests3taglist) - Request list of configured S3 tags
* [UpdateS3Config](docs/systemstorageconfig/README.md#updates3config) - Update S3 storage configuration

### [Uploads](docs/uploads/README.md)

* [CancelFileUploadByToken](docs/uploads/README.md#cancelfileuploadbytoken) - Cancel file upload
* [CompleteFileUploadByToken](docs/uploads/README.md#completefileuploadbytoken) - Complete file upload
* [UploadFileByTokenAsMultipart1](docs/uploads/README.md#uploadfilebytokenasmultipart1) - Upload file

### [User](docs/user/README.md)

* [ChangeUserPassword](docs/user/README.md#changeuserpassword) - Change user's password
* [ConfirmTotpSetup](docs/user/README.md#confirmtotpsetup) - Confirm second factor TOTP setup with a generated OTP
* [CreateAndPreserveUserKeyPair](docs/user/README.md#createandpreserveuserkeypair) - Create key pair and preserve copy of old private key
* [DeleteMfaTotpSetup](docs/user/README.md#deletemfatotpsetup) - Disable a MFA TOTP setup with generated OTP
* [~~EnableCustomerEncryption~~](docs/user/README.md#enablecustomerencryption) - Activate client-side encryption for customer :warning: **Deprecated**
* [GetMfaStatusForUser](docs/user/README.md#getmfastatusforuser) - Request information about the user's mfa status
* [GetTotpSetupInformation](docs/user/README.md#gettotpsetupinformation) - Request information to setup TOTP as second authentication factor
* [ListDownloadShareSubscriptions](docs/user/README.md#listdownloadsharesubscriptions) - List Download Share subscriptions
* [ListNodeSubscriptions](docs/user/README.md#listnodesubscriptions) - List node subscriptions
* [ListUploadShareSubscriptions](docs/user/README.md#listuploadsharesubscriptions) - List Upload Share subscriptions
* [~~Logout~~](docs/user/README.md#logout) - Invalidate authentication token :warning: **Deprecated**
* [PingUser](docs/user/README.md#pinguser) - (authenticated) Ping
* [RemoveOAuthApproval](docs/user/README.md#removeoauthapproval) - Remove OAuth client approval
* [RemoveOAuthAuthorization](docs/user/README.md#removeoauthauthorization) - Remove a OAuth authorization
* [RemoveOAuthAuthorizations](docs/user/README.md#removeoauthauthorizations) - Remove all OAuth authorizations of a client
* [RemoveProfileAttribute](docs/user/README.md#removeprofileattribute) - Remove user profile attribute
* [RemoveUserKeyPair](docs/user/README.md#removeuserkeypair) - Remove user's key pair
* [RequestAvatar](docs/user/README.md#requestavatar) - Request avatar
* [RequestCustomerInfo](docs/user/README.md#requestcustomerinfo) - Request customer information for user
* [~~RequestCustomerKeyPair~~](docs/user/README.md#requestcustomerkeypair) - Request customer's key pair :warning: **Deprecated**
* [RequestListOfNotificationConfigs](docs/user/README.md#requestlistofnotificationconfigs) - Request list of notification configurations
* [RequestOAuthApprovals](docs/user/README.md#requestoauthapprovals) - Request list of OAuth client approvals
* [RequestOAuthAuthorizations](docs/user/README.md#requestoauthauthorizations) - Request list of OAuth client authorizations
* [RequestProfileAttributes](docs/user/README.md#requestprofileattributes) - Request user profile attributes
* [RequestUserInfo](docs/user/README.md#requestuserinfo) - Request user account information
* [RequestUserKeyPair](docs/user/README.md#requestuserkeypair) - Request user's key pair
* [RequestUserKeyPairs](docs/user/README.md#requestuserkeypairs) - Request all user key pairs
* [ResetAvatar](docs/user/README.md#resetavatar) - Reset avatar
* [~~SetProfileAttributes~~](docs/user/README.md#setprofileattributes) - Set user profile attributes :warning: **Deprecated**
* [SetUserKeyPair](docs/user/README.md#setuserkeypair) - Set user's key pair
* [SubscribeDownloadShare](docs/user/README.md#subscribedownloadshare) - Subscribe Download Share for notifications
* [SubscribeDownloadShares](docs/user/README.md#subscribedownloadshares) - Subscribe or Unsubscribe a List of Download Shares for notifications
* [SubscribeNode](docs/user/README.md#subscribenode) - Subscribe node for notifications
* [SubscribeUploadShare](docs/user/README.md#subscribeuploadshare) - Subscribe Upload Share for notifications
* [SubscribeUploadShares](docs/user/README.md#subscribeuploadshares) - Subscribe or Unsubscribe a List of Upload Shares for notifications
* [UnsubscribeDownloadShare](docs/user/README.md#unsubscribedownloadshare) - Unsubscribe Download Share from notifications
* [UnsubscribeNode](docs/user/README.md#unsubscribenode) - Unsubscribe node from notifications
* [UnsubscribeUploadShare](docs/user/README.md#unsubscribeuploadshare) - Unsubscribe Upload Share from notifications
* [UpdateNodeSubscriptions](docs/user/README.md#updatenodesubscriptions) - Subscribe or Unsubscribe a List of nodes for notifications
* [UpdateNotificationConfig](docs/user/README.md#updatenotificationconfig) - Update notification configuration
* [UpdateProfileAttributes](docs/user/README.md#updateprofileattributes) - Add or edit user profile attributes
* [UpdateUserAccount](docs/user/README.md#updateuseraccount) - Update user account
* [UploadAvatarAsMultipart](docs/user/README.md#uploadavatarasmultipart) - Change avatar
* [UseEmergencyCode](docs/user/README.md#useemergencycode) - Using emergency-code

### [Users](docs/users/README.md)

* [CreateUser](docs/users/README.md#createuser) - Create new user
* [RemoveUser](docs/users/README.md#removeuser) - Remove user
* [RemoveUserAttribute](docs/users/README.md#removeuserattribute) - Remove custom user attribute
* [RequestEmergencyMfaCode](docs/users/README.md#requestemergencymfacode) - Request emergency MFA code
* [RequestLastAdminRoomsUsers](docs/users/README.md#requestlastadminroomsusers) - Request rooms where the user is last admin
* [RequestUser](docs/users/README.md#requestuser) - Request user
* [RequestUserAttributes](docs/users/README.md#requestuserattributes) - Request custom user attributes
* [RequestUserGroups](docs/users/README.md#requestusergroups) - Request groups that user is a member of or / and can become a member
* [RequestUserRoles](docs/users/README.md#requestuserroles) - Request user's granted roles
* [RequestUsers](docs/users/README.md#requestusers) - Request users
* [~~RequestUsersRooms~~](docs/users/README.md#requestusersrooms) - Request rooms granted to the user or / and rooms that can be granted :warning: **Deprecated**
* [~~SetUserAttributes~~](docs/users/README.md#setuserattributes) - Set custom user attributes :warning: **Deprecated**
* [UpdateUser](docs/users/README.md#updateuser) - Update user's metadata
* [UpdateUserAttributes](docs/users/README.md#updateuserattributes) - Add or edit custom user attributes
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
