<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCharityOrgSecurity;
import org.openapis.openapi.models.operations.GetCharityOrgRequest;
import org.openapis.openapi.models.operations.GetCharityOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCharityOrgRequest req = new GetCharityOrgRequest() {{
                xEbayCMarketplaceId = "corrupti";
                charityOrgId = "provident";
            }}            

            GetCharityOrgResponse res = sdk.charityOrg.getCharityOrg(req, new GetCharityOrgSecurity() {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.charityOrg.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->