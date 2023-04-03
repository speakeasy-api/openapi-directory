<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssignInstanceXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssignInstanceRequest;
import org.openapis.openapi.models.operations.AssignInstanceResponse;
import org.openapis.openapi.models.shared.AssignInstanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssignInstanceRequest req = new AssignInstanceRequest() {{
                assignInstanceRequest = new AssignInstanceRequest() {{
                    instanceId = "corrupti";
                    layerIds = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                }};
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
                xAmzTarget = "OpsWorks_20130218.AssignInstance";
            }}            

            AssignInstanceResponse res = sdk.assignInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->