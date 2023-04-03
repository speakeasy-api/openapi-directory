<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DriveGroupsAddSecurity;
import org.openapis.openapi.models.operations.DriveGroupsAddRequest;
import org.openapis.openapi.models.operations.DriveGroupsAddResponse;
import org.openapis.openapi.models.shared.DriveGroupInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveGroupsAddRequest req = new DriveGroupsAddRequest() {{
                driveGroupInput = new DriveGroupInput() {{
                    description = "A description";
                    displayName = "accounting";
                    name = "accounting";
                }};
                raw = false;
                xApideckAppId = "corrupti";
                xApideckConsumerId = "provident";
                xApideckServiceId = "distinctio";
            }}            

            DriveGroupsAddResponse res = sdk.driveGroups.driveGroupsAdd(req, new DriveGroupsAddSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createDriveGroupResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->