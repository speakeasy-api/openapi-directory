<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AccountDeleteDomainWhitelistPathParams;
import org.openapis.openapi.models.operations.AccountDeleteDomainWhitelistRequest;
import org.openapis.openapi.models.operations.AccountDeleteDomainWhitelistResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AccountDeleteDomainWhitelistRequest req = new AccountDeleteDomainWhitelistRequest() {{
                pathParams = new AccountDeleteDomainWhitelistPathParams() {{
                    whitelistId = "corrupti";
                }};
            }};            

            AccountDeleteDomainWhitelistResponse res = sdk.account.accountDeleteDomainWhitelist(req);

            if (res.apiCoreDtoAccountingDomainWhitelistEntry.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->