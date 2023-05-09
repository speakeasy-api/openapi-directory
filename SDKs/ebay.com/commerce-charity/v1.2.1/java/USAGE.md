<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCharityOrgRequest;
import org.openapis.openapi.models.operations.GetCharityOrgResponse;
import org.openapis.openapi.models.operations.GetCharityOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCharityOrgRequest req = new GetCharityOrgRequest("corrupti", "provident");            

            GetCharityOrgResponse res = sdk.charityOrg.getCharityOrg(req, new GetCharityOrgSecurity("distinctio") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.charityOrg != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->