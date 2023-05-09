<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountHoldersIdRequest;
import org.openapis.openapi.models.operations.GetAccountHoldersIdResponse;
import org.openapis.openapi.models.operations.GetAccountHoldersIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountHoldersIdRequest req = new GetAccountHoldersIdRequest("corrupti");            

            GetAccountHoldersIdResponse res = sdk.accountHolders.getAccountHoldersId(req, new GetAccountHoldersIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.accountHolder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->