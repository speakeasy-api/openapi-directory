# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/appwrite.io/client/0.9.3/go
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
    res, err := s.Account.AccountCreate(ctx, operations.AccountCreateRequestBody{
        Email: "Larue_Rau85@yahoo.com",
        Name: sdk.String("Dallas Kassulke"),
        Password: "suscipit",
    }, operations.AccountCreateSecurity{
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Account](docs/account/README.md)

* [AccountCreate](docs/account/README.md#accountcreate) - Create Account
* [AccountCreateAnonymousSession](docs/account/README.md#accountcreateanonymoussession) - Create Anonymous Session
* [AccountCreateJWT](docs/account/README.md#accountcreatejwt) - Create Account JWT
* [AccountCreateOAuth2Session](docs/account/README.md#accountcreateoauth2session) - Create Account Session with OAuth2
* [AccountCreateRecovery](docs/account/README.md#accountcreaterecovery) - Create Password Recovery
* [AccountCreateSession](docs/account/README.md#accountcreatesession) - Create Account Session
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

* [DatabaseCreateDocument](docs/database/README.md#databasecreatedocument) - Create Document
* [DatabaseDeleteDocument](docs/database/README.md#databasedeletedocument) - Delete Document
* [DatabaseGetDocument](docs/database/README.md#databasegetdocument) - Get Document
* [DatabaseListDocuments](docs/database/README.md#databaselistdocuments) - List Documents
* [DatabaseUpdateDocument](docs/database/README.md#databaseupdatedocument) - Update Document

### [Functions](docs/functions/README.md)

* [FunctionsCreateExecution](docs/functions/README.md#functionscreateexecution) - Create Execution
* [FunctionsGetExecution](docs/functions/README.md#functionsgetexecution) - Get Execution
* [FunctionsListExecutions](docs/functions/README.md#functionslistexecutions) - List Executions

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
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
