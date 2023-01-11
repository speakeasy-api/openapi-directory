<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DriveGroupsAddRequest req = new DriveGroupsAddRequest() {{
                security = new DriveGroupsAddSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new DriveGroupsAddQueryParams() {{
                    raw = true;
                }};
                headers = new DriveGroupsAddHeaders() {{
                    xApideckAppId = "deleniti";
                    xApideckConsumerId = "ut";
                    xApideckServiceId = "corporis";
                }};
                request = new DriveGroupInput() {{
                    description = "enim";
                    displayName = "quia";
                    name = "autem";
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