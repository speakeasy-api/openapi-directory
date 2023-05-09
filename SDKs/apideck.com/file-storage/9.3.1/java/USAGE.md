<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DriveGroupsAddRequest;
import org.openapis.openapi.models.operations.DriveGroupsAddResponse;
import org.openapis.openapi.models.operations.DriveGroupsAddSecurity;
import org.openapis.openapi.models.shared.DriveGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveGroupsAddRequest req = new DriveGroupsAddRequest(                new DriveGroupInput("accounting") {{
                                description = "A description";
                                displayName = "accounting";
                            }};, "corrupti", "provident") {{
                raw = false;
                xApideckServiceId = "distinctio";
            }};            

            DriveGroupsAddResponse res = sdk.driveGroups.driveGroupsAdd(req, new DriveGroupsAddSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createDriveGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->