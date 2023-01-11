<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetAccountHoldersIdRequest req = new GetAccountHoldersIdRequest() {{
                security = new GetAccountHoldersIdSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new GetAccountHoldersIdPathParams() {{
                    id = "dolorem";
                }};
            }};

            GetAccountHoldersIdResponse res = sdk.accountHolders.getAccountHoldersId(req);

            if (res.accountHolder.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->