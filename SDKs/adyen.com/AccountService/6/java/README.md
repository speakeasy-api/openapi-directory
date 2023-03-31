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

import org.openapis.openapi.models.operations.PostCloseAccountHolderSecurity;
import org.openapis.openapi.models.operations.PostCloseAccountHolderRequest;
import org.openapis.openapi.models.operations.PostCloseAccountHolderResponse;
import org.openapis.openapi.models.shared.CloseAccountHolderRequest;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCloseAccountHolderRequest req = new PostCloseAccountHolderRequest() {{
                security = new PostCloseAccountHolderSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new CloseAccountHolderRequest() {{
                    accountHolderCode = "corrupti";
                }};
            }};            

            PostCloseAccountHolderResponse res = sdk.accountHolders.postCloseAccountHolder(req);

            if (res.closeAccountHolderResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accountHolders

* `postCloseAccountHolder` - Close an account holder
* `postCloseStores` - Close stores
* `postCreateAccountHolder` - Create an account holder
* `postGetAccountHolder` - Get an account holder
* `postGetTaxForm` - Get a tax form
* `postSuspendAccountHolder` - Suspend an account holder
* `postUnSuspendAccountHolder` - Unsuspend an account holder
* `postUpdateAccountHolder` - Update an account holder
* `postUpdateAccountHolderState` - Update payout or processing state

### accounts

* `postCloseAccount` - Close an account
* `postCreateAccount` - Create an account
* `postUpdateAccount` - Update an account

### verification

* `postCheckAccountHolder` - Trigger verification
* `postDeleteBankAccounts` - Delete bank accounts
* `postDeleteLegalArrangements` - Delete legal arrangements
* `postDeletePayoutMethods` - Delete payout methods
* `postDeleteShareholders` - Delete shareholders
* `postDeleteSignatories` - Delete signatories
* `postGetUploadedDocuments` - Get documents
* `postUploadDocument` - Upload a document
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
