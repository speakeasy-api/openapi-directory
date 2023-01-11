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
                    raw = false;
                }};
                headers = new DriveGroupsAddHeaders() {{
                    xApideckAppId = "voluptas";
                    xApideckConsumerId = "culpa";
                    xApideckServiceId = "expedita";
                }};
                request = new DriveGroupInput() {{
                    description = "consequuntur";
                    displayName = "dolor";
                    name = "expedita";
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