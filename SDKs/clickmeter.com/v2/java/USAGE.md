<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountDeleteDomainWhitelistRequest;
import org.openapis.openapi.models.operations.AccountDeleteDomainWhitelistResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AccountDeleteDomainWhitelistRequest req = new AccountDeleteDomainWhitelistRequest("provident");            

            AccountDeleteDomainWhitelistResponse res = sdk.account.accountDeleteDomainWhitelist(req);

            if (res.apiCoreDtoAccountingDomainWhitelistEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->