<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameSecurity;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameRequest;
import org.openapis.openapi.models.operations.DeleteSettingsOrganizationsOrganizationNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSettingsOrganizationsOrganizationNameRequest req = new DeleteSettingsOrganizationsOrganizationNameRequest() {{
                organizationName = "corrupti";
            }}            

            DeleteSettingsOrganizationsOrganizationNameResponse res = sdk.deleteSettingsOrganizationsOrganizationName(req, new DeleteSettingsOrganizationsOrganizationNameSecurity() {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.organization.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->