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
import org.openapis.openapi.models.operations.AuthorizeRequest;
import org.openapis.openapi.models.operations.AuthorizeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizeRequest req = new AuthorizeRequest("corrupti", "provident", "distinctio", "quibusdam", "unde") {{
                display = "nulla";
                maxAge = 544883L;
                nonce = "illum";
                prompt = "vel";
                responseMode = "error";
                uiLocales = "deserunt";
            }};            

            AuthorizeResponse res = sdk.authentication.authorize(req);

            if (res.statusCode == 200) {
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

* [authorize](docs/authentication/README.md#authorize) - Authenticate a user
* [token](docs/authentication/README.md#token) - Obtain an ID Token
* [userInfo](docs/authentication/README.md#userinfo) - Retrieve a user profile

### [clientManagement](docs/clientmanagement/README.md)

* [client](docs/clientmanagement/README.md#client) - List clients
* [clientClientId](docs/clientmanagement/README.md#clientclientid) - Delete a client
* [createClient](docs/clientmanagement/README.md#createclient) - Register a client
* [getClient](docs/clientmanagement/README.md#getclient) - View a client
* [updateClient](docs/clientmanagement/README.md#updateclient) - Update a client

### [sessionManagement](docs/sessionmanagement/README.md)

* [authorizeIframe](docs/sessionmanagement/README.md#authorizeiframe) - Include a session iframe
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
