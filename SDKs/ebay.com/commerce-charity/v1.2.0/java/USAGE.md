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

            GetCharityOrgRequest req = new GetCharityOrgRequest() {{
                security = new GetCharityOrgSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetCharityOrgPathParams() {{
                    charityOrgId = "debitis";
                }};
                headers = new GetCharityOrgHeaders() {{
                    xEBAYCMARKETPLACEID = "voluptatum";
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