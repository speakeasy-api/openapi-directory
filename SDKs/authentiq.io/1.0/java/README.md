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

import org.openapis.openapi.models.operations.AuthorizeQueryParams;
import org.openapis.openapi.models.operations.AuthorizeRequest;
import org.openapis.openapi.models.operations.AuthorizeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizeRequest req = new AuthorizeRequest() {{
                queryParams = new AuthorizeQueryParams() {{
                    clientId = "corrupti";
                    display = "provident";
                    maxAge = 715190;
                    nonce = "quibusdam";
                    prompt = "unde";
                    redirectUri = "nulla";
                    responseMode = "corrupti";
                    responseType = "illum";
                    scope = "vel";
                    state = "error";
                    uiLocales = "deserunt";
                }};
            }};            

            AuthorizeResponse res = sdk.authentication.authorize(req);

            if (res.statusCode == 200) {
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

* `authorize` - Authenticate a user
* `token` - Obtain an ID Token
* `userInfo` - Retrieve a user profile

### clientManagement

* `client` - List clients
* `clientClientId` - Delete a client
* `createClient` - Register a client
* `getClient` - View a client
* `updateClient` - Update a client

### sessionManagement

* `authorizeIframe` - Include a session iframe
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
