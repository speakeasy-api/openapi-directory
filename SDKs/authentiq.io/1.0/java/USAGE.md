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