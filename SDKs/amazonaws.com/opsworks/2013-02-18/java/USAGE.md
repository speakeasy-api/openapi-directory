<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignInstanceRequest;
import org.openapis.openapi.models.operations.AssignInstanceResponse;
import org.openapis.openapi.models.operations.AssignInstanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssignInstanceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssignInstanceRequest req = new AssignInstanceRequest(                new AssignInstanceRequest("provident",                 new String[]{{
                                                add("quibusdam"),
                                                add("unde"),
                                                add("nulla"),
                                            }});, AssignInstanceXAmzTargetEnum.OPS_WORKS20130218_ASSIGN_INSTANCE) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            AssignInstanceResponse res = sdk.assignInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->