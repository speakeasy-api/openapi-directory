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
import org.openapis.openapi.models.operations.PostUsers2FALoginResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Users2FALoginRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hubAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Users2FALoginRequest req = new Users2FALoginRequest("123456", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");            

            PostUsers2FALoginResponse res = sdk.authentication.postUsers2FALogin(req);

            if (res.postUsersLoginSuccessResponse != null) {
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


### [authentication](docs/authentication/README.md)

* [postUsers2FALogin](docs/authentication/README.md#postusers2falogin) - Second factor authentication.
* [postUsersLogin](docs/authentication/README.md#postuserslogin) - Create an authentication token

### [discovery](docs/discovery/README.md)

* [getNamespace](docs/discovery/README.md#getnamespace) - Get namespace
* [getNamespaces](docs/discovery/README.md#getnamespaces) - Get namespaces and repos

### [namespaces](docs/namespaces/README.md)

* [getNamespaceDataByTimespan](docs/namespaces/README.md#getnamespacedatabytimespan) - Get namespace data for timespan
* [getNamespaceTimespanMetadata](docs/namespaces/README.md#getnamespacetimespanmetadata) - Get namespace metadata for timespan
* [getNamespaceTimespans](docs/namespaces/README.md#getnamespacetimespans) - Get timespans with data
* [getNamespaceYears](docs/namespaces/README.md#getnamespaceyears) - Get years with data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
