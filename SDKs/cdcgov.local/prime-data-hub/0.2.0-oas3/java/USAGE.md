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

            DeleteSettingsOrganizationsOrganizationNameRequest req = new DeleteSettingsOrganizationsOrganizationNameRequest() {{
                security = new DeleteSettingsOrganizationsOrganizationNameSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DeleteSettingsOrganizationsOrganizationNamePathParams() {{
                    organizationName = "sit";
                }};
            }};

            DeleteSettingsOrganizationsOrganizationNameResponse res = sdk.deleteSettingsOrganizationsOrganizationName(req);

            if (res.organization.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->