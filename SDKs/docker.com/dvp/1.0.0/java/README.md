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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PostUsers2FALoginRequest;
import org.openapis.openapi.models.operations.PostUsers2FALoginResponse;
import org.openapis.openapi.models.shared.Users2FALoginRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hubAuth = new SchemeHubAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            PostUsers2FALoginRequest req = new PostUsers2FALoginRequest() {{
                request = new Users2FALoginRequest() {{
                    code = "123456";
                    login2faToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
                }};
            }};            

            PostUsers2FALoginResponse res = sdk.authentication.postUsers2FALogin(req);

            if (res.postUsersLoginSuccessResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### authentication

* `postUsers2FALogin` - Second factor authentication.
* `postUsersLogin` - Create an authentication token

### discovery

* `getNamespace` - Get namespace
* `getNamespaces` - Get namespaces and repos

### namespaces

* `getNamespaceDataByTimespan` - Get namespace data for timespan
* `getNamespaceTimespanMetadata` - Get namespace metadata for timespan
* `getNamespaceTimespans` - Get timespans with data
* `getNamespaceYears` - Get years with data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
