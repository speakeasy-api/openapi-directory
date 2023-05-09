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
import org.openapis.openapi.models.operations.PostCloseAccountHolderResponse;
import org.openapis.openapi.models.operations.PostCloseAccountHolderSecurity;
import org.openapis.openapi.models.shared.CloseAccountHolderRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CloseAccountHolderRequest req = new CloseAccountHolderRequest("corrupti");            

            PostCloseAccountHolderResponse res = sdk.accountHolders.postCloseAccountHolder(req, new PostCloseAccountHolderSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.closeAccountHolderResponse != null) {
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


### [accountHolders](docs/accountholders/README.md)

* [postCloseAccountHolder](docs/accountholders/README.md#postcloseaccountholder) - Close an account holder
* [postCloseStores](docs/accountholders/README.md#postclosestores) - Close stores
* [postCreateAccountHolder](docs/accountholders/README.md#postcreateaccountholder) - Create an account holder
* [postGetAccountHolder](docs/accountholders/README.md#postgetaccountholder) - Get an account holder
* [postGetTaxForm](docs/accountholders/README.md#postgettaxform) - Get a tax form
* [postSuspendAccountHolder](docs/accountholders/README.md#postsuspendaccountholder) - Suspend an account holder
* [postUnSuspendAccountHolder](docs/accountholders/README.md#postunsuspendaccountholder) - Unsuspend an account holder
* [postUpdateAccountHolder](docs/accountholders/README.md#postupdateaccountholder) - Update an account holder
* [postUpdateAccountHolderState](docs/accountholders/README.md#postupdateaccountholderstate) - Update payout or processing state

### [accounts](docs/accounts/README.md)

* [postCloseAccount](docs/accounts/README.md#postcloseaccount) - Close an account
* [postCreateAccount](docs/accounts/README.md#postcreateaccount) - Create an account
* [postUpdateAccount](docs/accounts/README.md#postupdateaccount) - Update an account

### [verification](docs/verification/README.md)

* [postCheckAccountHolder](docs/verification/README.md#postcheckaccountholder) - Trigger verification
* [postDeleteBankAccounts](docs/verification/README.md#postdeletebankaccounts) - Delete bank accounts
* [postDeleteLegalArrangements](docs/verification/README.md#postdeletelegalarrangements) - Delete legal arrangements
* [postDeletePayoutMethods](docs/verification/README.md#postdeletepayoutmethods) - Delete payout methods
* [postDeleteShareholders](docs/verification/README.md#postdeleteshareholders) - Delete shareholders
* [postDeleteSignatories](docs/verification/README.md#postdeletesignatories) - Delete signatories
* [postGetUploadedDocuments](docs/verification/README.md#postgetuploadeddocuments) - Get documents
* [postUploadDocument](docs/verification/README.md#postuploaddocument) - Upload a document
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
