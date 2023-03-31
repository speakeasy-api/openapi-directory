<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssignInstanceXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssignInstanceHeaders;
import org.openapis.openapi.models.operations.AssignInstanceRequest;
import org.openapis.openapi.models.operations.AssignInstanceResponse;
import org.openapis.openapi.models.shared.AssignInstanceRequest;

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

            AssignInstanceRequest req = new AssignInstanceRequest() {{
                headers = new AssignInstanceHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "OpsWorks_20130218.AssignInstance";
                }};
                request = new AssignInstanceRequest() {{
                    instanceId = "illum";
                    layerIds = new String[]{{
                        add("error"),
                        add("deserunt"),
                    }};
                }};
            }};            

            AssignInstanceResponse res = sdk.assignInstance(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->