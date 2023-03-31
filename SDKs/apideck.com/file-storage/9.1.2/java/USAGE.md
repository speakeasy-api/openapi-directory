<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DriveGroupsAddSecurity;
import org.openapis.openapi.models.operations.DriveGroupsAddQueryParams;
import org.openapis.openapi.models.operations.DriveGroupsAddHeaders;
import org.openapis.openapi.models.operations.DriveGroupsAddRequest;
import org.openapis.openapi.models.operations.DriveGroupsAddResponse;
import org.openapis.openapi.models.shared.DriveGroupInput;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveGroupsAddRequest req = new DriveGroupsAddRequest() {{
                security = new DriveGroupsAddSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new DriveGroupsAddQueryParams() {{
                    raw = false;
                }};
                headers = new DriveGroupsAddHeaders() {{
                    xApideckAppId = "corrupti";
                    xApideckConsumerId = "provident";
                    xApideckServiceId = "distinctio";
                }};
                request = new DriveGroupInput() {{
                    description = "A description";
                    displayName = "accounting";
                    name = "accounting";
                }};
            }};            

            DriveGroupsAddResponse res = sdk.driveGroups.driveGroupsAdd(req);

            if (res.createDriveGroupResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->