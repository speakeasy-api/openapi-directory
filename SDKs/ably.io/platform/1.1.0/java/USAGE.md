<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            RequestAccessTokenRequest req = new RequestAccessTokenRequest() {{
                pathParams = new RequestAccessTokenPathParams() {{
                    keyName = "sit";
                }};
                queryParams = new RequestAccessTokenQueryParams() {{
                    format = "msgpack";
                }};
                headers = new RequestAccessTokenHeaders() {{
                    xAblyVersion = "culpa";
                }};
                request = "expedita";
            }};

            RequestAccessTokenResponse res = sdk.authentication.requestAccessToken(req);

            if (res.tokenDetails.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->