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