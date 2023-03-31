<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameSecurity;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNamePathParams;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameRequest;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameResponse;
import org.openapis.openapi.models.shared.SchemeOAuth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSettingsOrganizationsOrganizationNameRequest req = new DeleteSettingsOrganizationsOrganizationNameRequest() {{
                security = new DeleteSettingsOrganizationsOrganizationNameSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DeleteSettingsOrganizationsOrganizationNamePathParams() {{
                    organizationName = "corrupti";
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