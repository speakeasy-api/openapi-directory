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

import org.openapis.openapi.models.operations.AccountCreateSecurity;
import org.openapis.openapi.models.operations.AccountCreateRequestBody;
import org.openapis.openapi.models.operations.AccountCreateRequest;
import org.openapis.openapi.models.operations.AccountCreateResponse;
import org.openapis.openapi.models.shared.SchemeProject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateRequest req = new AccountCreateRequest() {{
                security = new AccountCreateSecurity() {{
                    project = new SchemeProject() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AccountCreateRequestBody() {{
                    email = "Larue_Rau85@yahoo.com";
                    name = "corrupti";
                    password = "illum";
                }};
            }};            

            AccountCreateResponse res = sdk.account.accountCreate(req);

            if (res.user.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### account

* `accountCreate` - Create Account
* `accountCreateAnonymousSession` - Create Anonymous Session
* `accountCreateJWT` - Create Account JWT
* `accountCreateOAuth2Session` - Create Account Session with OAuth2
* `accountCreateRecovery` - Create Password Recovery
* `accountCreateSession` - Create Account Session
* `accountCreateVerification` - Create Email Verification
* `accountDelete` - Delete Account
* `accountDeleteSession` - Delete Account Session
* `accountDeleteSessions` - Delete All Account Sessions
* `accountGet` - Get Account
* `accountGetLogs` - Get Account Logs
* `accountGetPrefs` - Get Account Preferences
* `accountGetSession` - Get Session By ID
* `accountGetSessions` - Get Account Sessions
* `accountUpdateEmail` - Update Account Email
* `accountUpdateName` - Update Account Name
* `accountUpdatePassword` - Update Account Password
* `accountUpdatePrefs` - Update Account Preferences
* `accountUpdateRecovery` - Complete Password Recovery
* `accountUpdateVerification` - Complete Email Verification

### avatars

* `avatarsGetBrowser` - Get Browser Icon
* `avatarsGetCreditCard` - Get Credit Card Icon
* `avatarsGetFavicon` - Get Favicon
* `avatarsGetFlag` - Get Country Flag
* `avatarsGetImage` - Get Image from URL
* `avatarsGetInitials` - Get User Initials
* `avatarsGetQR` - Get QR Code

### database

* `databaseCreateDocument` - Create Document
* `databaseDeleteDocument` - Delete Document
* `databaseGetDocument` - Get Document
* `databaseListDocuments` - List Documents
* `databaseUpdateDocument` - Update Document

### functions

* `functionsCreateExecution` - Create Execution
* `functionsGetExecution` - Get Execution
* `functionsListExecutions` - List Executions

### locale

* `localeGet` - Get User Locale
* `localeGetContinents` - List Continents
* `localeGetCountries` - List Countries
* `localeGetCountriesEU` - List EU Countries
* `localeGetCountriesPhones` - List Countries Phone Codes
* `localeGetCurrencies` - List Currencies
* `localeGetLanguages` - List Languages

### storage

* `storageCreateFile` - Create File
* `storageDeleteFile` - Delete File
* `storageGetFile` - Get File
* `storageGetFileDownload` - Get File for Download
* `storageGetFilePreview` - Get File Preview
* `storageGetFileView` - Get File for View
* `storageListFiles` - List Files
* `storageUpdateFile` - Update File

### teams

* `teamsCreate` - Create Team
* `teamsCreateMembership` - Create Team Membership
* `teamsDelete` - Delete Team
* `teamsDeleteMembership` - Delete Team Membership
* `teamsGet` - Get Team
* `teamsGetMemberships` - Get Team Memberships
* `teamsList` - List Teams
* `teamsUpdate` - Update Team
* `teamsUpdateMembershipRoles` - Update Membership Roles
* `teamsUpdateMembershipStatus` - Update Team Membership Status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
