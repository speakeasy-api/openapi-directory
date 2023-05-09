# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateRecoveryRequestBody;
import org.openapis.openapi.models.operations.AccountCreateRecoveryResponse;
import org.openapis.openapi.models.operations.AccountCreateRecoverySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateRecoveryRequestBody req = new AccountCreateRecoveryRequestBody("corrupti", "provident");            

            AccountCreateRecoveryResponse res = sdk.account.accountCreateRecovery(req, new AccountCreateRecoverySecurity("distinctio", "quibusdam") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/account/README.md)

* [accountCreateRecovery](docs/account/README.md#accountcreaterecovery) - Create Password Recovery
* [accountCreateVerification](docs/account/README.md#accountcreateverification) - Create Email Verification
* [accountDelete](docs/account/README.md#accountdelete) - Delete Account
* [accountDeleteSession](docs/account/README.md#accountdeletesession) - Delete Account Session
* [accountDeleteSessions](docs/account/README.md#accountdeletesessions) - Delete All Account Sessions
* [accountGet](docs/account/README.md#accountget) - Get Account
* [accountGetLogs](docs/account/README.md#accountgetlogs) - Get Account Logs
* [accountGetPrefs](docs/account/README.md#accountgetprefs) - Get Account Preferences
* [accountGetSession](docs/account/README.md#accountgetsession) - Get Session By ID
* [accountGetSessions](docs/account/README.md#accountgetsessions) - Get Account Sessions
* [accountUpdateEmail](docs/account/README.md#accountupdateemail) - Update Account Email
* [accountUpdateName](docs/account/README.md#accountupdatename) - Update Account Name
* [accountUpdatePassword](docs/account/README.md#accountupdatepassword) - Update Account Password
* [accountUpdatePrefs](docs/account/README.md#accountupdateprefs) - Update Account Preferences
* [accountUpdateRecovery](docs/account/README.md#accountupdaterecovery) - Complete Password Recovery
* [accountUpdateVerification](docs/account/README.md#accountupdateverification) - Complete Email Verification

### [avatars](docs/avatars/README.md)

* [avatarsGetBrowser](docs/avatars/README.md#avatarsgetbrowser) - Get Browser Icon
* [avatarsGetCreditCard](docs/avatars/README.md#avatarsgetcreditcard) - Get Credit Card Icon
* [avatarsGetFavicon](docs/avatars/README.md#avatarsgetfavicon) - Get Favicon
* [avatarsGetFlag](docs/avatars/README.md#avatarsgetflag) - Get Country Flag
* [avatarsGetImage](docs/avatars/README.md#avatarsgetimage) - Get Image from URL
* [avatarsGetInitials](docs/avatars/README.md#avatarsgetinitials) - Get User Initials
* [avatarsGetQR](docs/avatars/README.md#avatarsgetqr) - Get QR Code

### [database](docs/database/README.md)

* [databaseCreateCollection](docs/database/README.md#databasecreatecollection) - Create Collection
* [databaseCreateDocument](docs/database/README.md#databasecreatedocument) - Create Document
* [databaseDeleteCollection](docs/database/README.md#databasedeletecollection) - Delete Collection
* [databaseDeleteDocument](docs/database/README.md#databasedeletedocument) - Delete Document
* [databaseGetCollection](docs/database/README.md#databasegetcollection) - Get Collection
* [databaseGetDocument](docs/database/README.md#databasegetdocument) - Get Document
* [databaseListCollections](docs/database/README.md#databaselistcollections) - List Collections
* [databaseListDocuments](docs/database/README.md#databaselistdocuments) - List Documents
* [databaseUpdateCollection](docs/database/README.md#databaseupdatecollection) - Update Collection
* [databaseUpdateDocument](docs/database/README.md#databaseupdatedocument) - Update Document

### [functions](docs/functions/README.md)

* [functionsCreate](docs/functions/README.md#functionscreate) - Create Function
* [functionsCreateExecution](docs/functions/README.md#functionscreateexecution) - Create Execution
* [functionsCreateTag](docs/functions/README.md#functionscreatetag) - Create Tag
* [functionsDelete](docs/functions/README.md#functionsdelete) - Delete Function
* [functionsDeleteTag](docs/functions/README.md#functionsdeletetag) - Delete Tag
* [functionsGet](docs/functions/README.md#functionsget) - Get Function
* [functionsGetExecution](docs/functions/README.md#functionsgetexecution) - Get Execution
* [functionsGetTag](docs/functions/README.md#functionsgettag) - Get Tag
* [functionsList](docs/functions/README.md#functionslist) - List Functions
* [functionsListExecutions](docs/functions/README.md#functionslistexecutions) - List Executions
* [functionsListTags](docs/functions/README.md#functionslisttags) - List Tags
* [functionsUpdate](docs/functions/README.md#functionsupdate) - Update Function
* [functionsUpdateTag](docs/functions/README.md#functionsupdatetag) - Update Function Tag

### [health](docs/health/README.md)

* [healthGet](docs/health/README.md#healthget) - Get HTTP
* [healthGetAntiVirus](docs/health/README.md#healthgetantivirus) - Get Anti virus
* [healthGetCache](docs/health/README.md#healthgetcache) - Get Cache
* [healthGetDB](docs/health/README.md#healthgetdb) - Get DB
* [healthGetQueueCertificates](docs/health/README.md#healthgetqueuecertificates) - Get Certificate Queue
* [healthGetQueueFunctions](docs/health/README.md#healthgetqueuefunctions) - Get Functions Queue
* [healthGetQueueLogs](docs/health/README.md#healthgetqueuelogs) - Get Logs Queue
* [healthGetQueueTasks](docs/health/README.md#healthgetqueuetasks) - Get Tasks Queue
* [healthGetQueueUsage](docs/health/README.md#healthgetqueueusage) - Get Usage Queue
* [healthGetQueueWebhooks](docs/health/README.md#healthgetqueuewebhooks) - Get Webhooks Queue
* [healthGetStorageLocal](docs/health/README.md#healthgetstoragelocal) - Get Local Storage
* [healthGetTime](docs/health/README.md#healthgettime) - Get Time

### [locale](docs/locale/README.md)

* [localeGet](docs/locale/README.md#localeget) - Get User Locale
* [localeGetContinents](docs/locale/README.md#localegetcontinents) - List Continents
* [localeGetCountries](docs/locale/README.md#localegetcountries) - List Countries
* [localeGetCountriesEU](docs/locale/README.md#localegetcountrieseu) - List EU Countries
* [localeGetCountriesPhones](docs/locale/README.md#localegetcountriesphones) - List Countries Phone Codes
* [localeGetCurrencies](docs/locale/README.md#localegetcurrencies) - List Currencies
* [localeGetLanguages](docs/locale/README.md#localegetlanguages) - List Languages

### [storage](docs/storage/README.md)

* [storageCreateFile](docs/storage/README.md#storagecreatefile) - Create File
* [storageDeleteFile](docs/storage/README.md#storagedeletefile) - Delete File
* [storageGetFile](docs/storage/README.md#storagegetfile) - Get File
* [storageGetFileDownload](docs/storage/README.md#storagegetfiledownload) - Get File for Download
* [storageGetFilePreview](docs/storage/README.md#storagegetfilepreview) - Get File Preview
* [storageGetFileView](docs/storage/README.md#storagegetfileview) - Get File for View
* [storageListFiles](docs/storage/README.md#storagelistfiles) - List Files
* [storageUpdateFile](docs/storage/README.md#storageupdatefile) - Update File

### [teams](docs/teams/README.md)

* [teamsCreate](docs/teams/README.md#teamscreate) - Create Team
* [teamsCreateMembership](docs/teams/README.md#teamscreatemembership) - Create Team Membership
* [teamsDelete](docs/teams/README.md#teamsdelete) - Delete Team
* [teamsDeleteMembership](docs/teams/README.md#teamsdeletemembership) - Delete Team Membership
* [teamsGet](docs/teams/README.md#teamsget) - Get Team
* [teamsGetMemberships](docs/teams/README.md#teamsgetmemberships) - Get Team Memberships
* [teamsList](docs/teams/README.md#teamslist) - List Teams
* [teamsUpdate](docs/teams/README.md#teamsupdate) - Update Team
* [teamsUpdateMembershipRoles](docs/teams/README.md#teamsupdatemembershiproles) - Update Membership Roles
* [teamsUpdateMembershipStatus](docs/teams/README.md#teamsupdatemembershipstatus) - Update Team Membership Status

### [users](docs/users/README.md)

* [usersCreate](docs/users/README.md#userscreate) - Create User
* [usersDelete](docs/users/README.md#usersdelete) - Delete User
* [usersDeleteSession](docs/users/README.md#usersdeletesession) - Delete User Session
* [usersDeleteSessions](docs/users/README.md#usersdeletesessions) - Delete User Sessions
* [usersGet](docs/users/README.md#usersget) - Get User
* [usersGetLogs](docs/users/README.md#usersgetlogs) - Get User Logs
* [usersGetPrefs](docs/users/README.md#usersgetprefs) - Get User Preferences
* [usersGetSessions](docs/users/README.md#usersgetsessions) - Get User Sessions
* [usersList](docs/users/README.md#userslist) - List Users
* [usersUpdatePrefs](docs/users/README.md#usersupdateprefs) - Update User Preferences
* [usersUpdateStatus](docs/users/README.md#usersupdatestatus) - Update User Status
* [usersUpdateVerification](docs/users/README.md#usersupdateverification) - Update Email Verification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
