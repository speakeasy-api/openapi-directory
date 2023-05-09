<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHomeRegionControlRequest;
import org.openapis.openapi.models.operations.CreateHomeRegionControlResponse;
import org.openapis.openapi.models.operations.CreateHomeRegionControlXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateHomeRegionControlRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHomeRegionControlRequest req = new CreateHomeRegionControlRequest(                new CreateHomeRegionControlRequest("provident",                 new Target(TargetTypeEnum.ACCOUNT) {{
                                                id = "bd9d8d69-a674-4e0f-867c-c8796ed151a0";
                                            }};) {{
                                dryRun = false;
                            }};, CreateHomeRegionControlXAmzTargetEnum.AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_CREATE_HOME_REGION_CONTROL) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            CreateHomeRegionControlResponse res = sdk.createHomeRegionControl(req);

            if (res.createHomeRegionControlResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->