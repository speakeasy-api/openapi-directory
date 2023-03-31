<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateHomeRegionControlXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateHomeRegionControlHeaders;
import org.openapis.openapi.models.operations.CreateHomeRegionControlRequest;
import org.openapis.openapi.models.operations.CreateHomeRegionControlResponse;
import org.openapis.openapi.models.shared.CreateHomeRegionControlRequest;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateHomeRegionControlRequest req = new CreateHomeRegionControlRequest() {{
                headers = new CreateHomeRegionControlHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSMigrationHubMultiAccountService.CreateHomeRegionControl";
                }};
                request = new CreateHomeRegionControlRequest() {{
                    dryRun = false;
                    homeRegion = "illum";
                    target = new Target() {{
                        id = "vel";
                        type = "ACCOUNT";
                    }};
                }};
            }};            

            CreateHomeRegionControlResponse res = sdk.createHomeRegionControl(req);

            if (res.createHomeRegionControlResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->