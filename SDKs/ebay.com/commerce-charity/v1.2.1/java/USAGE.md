<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCharityOrgSecurity;
import org.openapis.openapi.models.operations.GetCharityOrgPathParams;
import org.openapis.openapi.models.operations.GetCharityOrgHeaders;
import org.openapis.openapi.models.operations.GetCharityOrgRequest;
import org.openapis.openapi.models.operations.GetCharityOrgResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCharityOrgRequest req = new GetCharityOrgRequest() {{
                security = new GetCharityOrgSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetCharityOrgPathParams() {{
                    charityOrgId = "corrupti";
                }};
                headers = new GetCharityOrgHeaders() {{
                    xEbayCMarketplaceId = "provident";
                }};
            }};            

            GetCharityOrgResponse res = sdk.charityOrg.getCharityOrg(req);

            if (res.charityOrg.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->