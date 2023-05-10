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
use \OpenAPI\OpenAPI\Models\Operations\AccountCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AccountCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountCreateRequestBody();
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->name = 'Dallas Kassulke';
    $request->password = 'suscipit';

    $requestSecurity = new AccountCreateSecurity();
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->account->accountCreate($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/account/README.md)

* [accountCreate](docs/account/README.md#accountcreate) - Create Account
* [accountCreateAnonymousSession](docs/account/README.md#accountcreateanonymoussession) - Create Anonymous Session
* [accountCreateJWT](docs/account/README.md#accountcreatejwt) - Create Account JWT
* [accountCreateOAuth2Session](docs/account/README.md#accountcreateoauth2session) - Create Account Session with OAuth2
* [accountCreateRecovery](docs/account/README.md#accountcreaterecovery) - Create Password Recovery
* [accountCreateSession](docs/account/README.md#accountcreatesession) - Create Account Session
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

* [databaseCreateDocument](docs/database/README.md#databasecreatedocument) - Create Document
* [databaseDeleteDocument](docs/database/README.md#databasedeletedocument) - Delete Document
* [databaseGetDocument](docs/database/README.md#databasegetdocument) - Get Document
* [databaseListDocuments](docs/database/README.md#databaselistdocuments) - List Documents
* [databaseUpdateDocument](docs/database/README.md#databaseupdatedocument) - Update Document

### [functions](docs/functions/README.md)

* [functionsCreateExecution](docs/functions/README.md#functionscreateexecution) - Create Execution
* [functionsGetExecution](docs/functions/README.md#functionsgetexecution) - Get Execution
* [functionsListExecutions](docs/functions/README.md#functionslistexecutions) - List Executions

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
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
