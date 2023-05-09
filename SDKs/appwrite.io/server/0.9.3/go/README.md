# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/appwrite.io/server/0.9.3/go
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
    res, err := s.Account.AccountCreateRecovery(ctx, operations.AccountCreateRecoveryRequestBody{
        Email: "Larue_Rau85@yahoo.com",
        URL: "corrupti",
    }, operations.AccountCreateRecoverySecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Account](docs/account/README.md)

* [AccountCreateRecovery](docs/account/README.md#accountcreaterecovery) - Create Password Recovery
* [AccountCreateVerification](docs/account/README.md#accountcreateverification) - Create Email Verification
* [AccountDelete](docs/account/README.md#accountdelete) - Delete Account
* [AccountDeleteSession](docs/account/README.md#accountdeletesession) - Delete Account Session
* [AccountDeleteSessions](docs/account/README.md#accountdeletesessions) - Delete All Account Sessions
* [AccountGet](docs/account/README.md#accountget) - Get Account
* [AccountGetLogs](docs/account/README.md#accountgetlogs) - Get Account Logs
* [AccountGetPrefs](docs/account/README.md#accountgetprefs) - Get Account Preferences
* [AccountGetSession](docs/account/README.md#accountgetsession) - Get Session By ID
* [AccountGetSessions](docs/account/README.md#accountgetsessions) - Get Account Sessions
* [AccountUpdateEmail](docs/account/README.md#accountupdateemail) - Update Account Email
* [AccountUpdateName](docs/account/README.md#accountupdatename) - Update Account Name
* [AccountUpdatePassword](docs/account/README.md#accountupdatepassword) - Update Account Password
* [AccountUpdatePrefs](docs/account/README.md#accountupdateprefs) - Update Account Preferences
* [AccountUpdateRecovery](docs/account/README.md#accountupdaterecovery) - Complete Password Recovery
* [AccountUpdateVerification](docs/account/README.md#accountupdateverification) - Complete Email Verification

### [Avatars](docs/avatars/README.md)

* [AvatarsGetBrowser](docs/avatars/README.md#avatarsgetbrowser) - Get Browser Icon
* [AvatarsGetCreditCard](docs/avatars/README.md#avatarsgetcreditcard) - Get Credit Card Icon
* [AvatarsGetFavicon](docs/avatars/README.md#avatarsgetfavicon) - Get Favicon
* [AvatarsGetFlag](docs/avatars/README.md#avatarsgetflag) - Get Country Flag
* [AvatarsGetImage](docs/avatars/README.md#avatarsgetimage) - Get Image from URL
* [AvatarsGetInitials](docs/avatars/README.md#avatarsgetinitials) - Get User Initials
* [AvatarsGetQR](docs/avatars/README.md#avatarsgetqr) - Get QR Code

### [Database](docs/database/README.md)

* [DatabaseCreateCollection](docs/database/README.md#databasecreatecollection) - Create Collection
* [DatabaseCreateDocument](docs/database/README.md#databasecreatedocument) - Create Document
* [DatabaseDeleteCollection](docs/database/README.md#databasedeletecollection) - Delete Collection
* [DatabaseDeleteDocument](docs/database/README.md#databasedeletedocument) - Delete Document
* [DatabaseGetCollection](docs/database/README.md#databasegetcollection) - Get Collection
* [DatabaseGetDocument](docs/database/README.md#databasegetdocument) - Get Document
* [DatabaseListCollections](docs/database/README.md#databaselistcollections) - List Collections
* [DatabaseListDocuments](docs/database/README.md#databaselistdocuments) - List Documents
* [DatabaseUpdateCollection](docs/database/README.md#databaseupdatecollection) - Update Collection
* [DatabaseUpdateDocument](docs/database/README.md#databaseupdatedocument) - Update Document

### [Functions](docs/functions/README.md)

* [FunctionsCreate](docs/functions/README.md#functionscreate) - Create Function
* [FunctionsCreateExecution](docs/functions/README.md#functionscreateexecution) - Create Execution
* [FunctionsCreateTag](docs/functions/README.md#functionscreatetag) - Create Tag
* [FunctionsDelete](docs/functions/README.md#functionsdelete) - Delete Function
* [FunctionsDeleteTag](docs/functions/README.md#functionsdeletetag) - Delete Tag
* [FunctionsGet](docs/functions/README.md#functionsget) - Get Function
* [FunctionsGetExecution](docs/functions/README.md#functionsgetexecution) - Get Execution
* [FunctionsGetTag](docs/functions/README.md#functionsgettag) - Get Tag
* [FunctionsList](docs/functions/README.md#functionslist) - List Functions
* [FunctionsListExecutions](docs/functions/README.md#functionslistexecutions) - List Executions
* [FunctionsListTags](docs/functions/README.md#functionslisttags) - List Tags
* [FunctionsUpdate](docs/functions/README.md#functionsupdate) - Update Function
* [FunctionsUpdateTag](docs/functions/README.md#functionsupdatetag) - Update Function Tag

### [Health](docs/health/README.md)

* [HealthGet](docs/health/README.md#healthget) - Get HTTP
* [HealthGetAntiVirus](docs/health/README.md#healthgetantivirus) - Get Anti virus
* [HealthGetCache](docs/health/README.md#healthgetcache) - Get Cache
* [HealthGetDB](docs/health/README.md#healthgetdb) - Get DB
* [HealthGetQueueCertificates](docs/health/README.md#healthgetqueuecertificates) - Get Certificate Queue
* [HealthGetQueueFunctions](docs/health/README.md#healthgetqueuefunctions) - Get Functions Queue
* [HealthGetQueueLogs](docs/health/README.md#healthgetqueuelogs) - Get Logs Queue
* [HealthGetQueueTasks](docs/health/README.md#healthgetqueuetasks) - Get Tasks Queue
* [HealthGetQueueUsage](docs/health/README.md#healthgetqueueusage) - Get Usage Queue
* [HealthGetQueueWebhooks](docs/health/README.md#healthgetqueuewebhooks) - Get Webhooks Queue
* [HealthGetStorageLocal](docs/health/README.md#healthgetstoragelocal) - Get Local Storage
* [HealthGetTime](docs/health/README.md#healthgettime) - Get Time

### [Locale](docs/locale/README.md)

* [LocaleGet](docs/locale/README.md#localeget) - Get User Locale
* [LocaleGetContinents](docs/locale/README.md#localegetcontinents) - List Continents
* [LocaleGetCountries](docs/locale/README.md#localegetcountries) - List Countries
* [LocaleGetCountriesEU](docs/locale/README.md#localegetcountrieseu) - List EU Countries
* [LocaleGetCountriesPhones](docs/locale/README.md#localegetcountriesphones) - List Countries Phone Codes
* [LocaleGetCurrencies](docs/locale/README.md#localegetcurrencies) - List Currencies
* [LocaleGetLanguages](docs/locale/README.md#localegetlanguages) - List Languages

### [Storage](docs/storage/README.md)

* [StorageCreateFile](docs/storage/README.md#storagecreatefile) - Create File
* [StorageDeleteFile](docs/storage/README.md#storagedeletefile) - Delete File
* [StorageGetFile](docs/storage/README.md#storagegetfile) - Get File
* [StorageGetFileDownload](docs/storage/README.md#storagegetfiledownload) - Get File for Download
* [StorageGetFilePreview](docs/storage/README.md#storagegetfilepreview) - Get File Preview
* [StorageGetFileView](docs/storage/README.md#storagegetfileview) - Get File for View
* [StorageListFiles](docs/storage/README.md#storagelistfiles) - List Files
* [StorageUpdateFile](docs/storage/README.md#storageupdatefile) - Update File

### [Teams](docs/teams/README.md)

* [TeamsCreate](docs/teams/README.md#teamscreate) - Create Team
* [TeamsCreateMembership](docs/teams/README.md#teamscreatemembership) - Create Team Membership
* [TeamsDelete](docs/teams/README.md#teamsdelete) - Delete Team
* [TeamsDeleteMembership](docs/teams/README.md#teamsdeletemembership) - Delete Team Membership
* [TeamsGet](docs/teams/README.md#teamsget) - Get Team
* [TeamsGetMemberships](docs/teams/README.md#teamsgetmemberships) - Get Team Memberships
* [TeamsList](docs/teams/README.md#teamslist) - List Teams
* [TeamsUpdate](docs/teams/README.md#teamsupdate) - Update Team
* [TeamsUpdateMembershipRoles](docs/teams/README.md#teamsupdatemembershiproles) - Update Membership Roles
* [TeamsUpdateMembershipStatus](docs/teams/README.md#teamsupdatemembershipstatus) - Update Team Membership Status

### [Users](docs/users/README.md)

* [UsersCreate](docs/users/README.md#userscreate) - Create User
* [UsersDelete](docs/users/README.md#usersdelete) - Delete User
* [UsersDeleteSession](docs/users/README.md#usersdeletesession) - Delete User Session
* [UsersDeleteSessions](docs/users/README.md#usersdeletesessions) - Delete User Sessions
* [UsersGet](docs/users/README.md#usersget) - Get User
* [UsersGetLogs](docs/users/README.md#usersgetlogs) - Get User Logs
* [UsersGetPrefs](docs/users/README.md#usersgetprefs) - Get User Preferences
* [UsersGetSessions](docs/users/README.md#usersgetsessions) - Get User Sessions
* [UsersList](docs/users/README.md#userslist) - List Users
* [UsersUpdatePrefs](docs/users/README.md#usersupdateprefs) - Update User Preferences
* [UsersUpdateStatus](docs/users/README.md#usersupdatestatus) - Update User Status
* [UsersUpdateVerification](docs/users/README.md#usersupdateverification) - Update Email Verification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
