<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETAttachInstancesActionEnum;
import org.openapis.openapi.models.operations.GETAttachInstancesVersionEnum;
import org.openapis.openapi.models.operations.GETAttachInstancesRequest;
import org.openapis.openapi.models.operations.GETAttachInstancesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAttachInstancesRequest req = new GETAttachInstancesRequest() {{
                action = "AttachInstances";
                autoScalingGroupName = "corrupti";
                instanceIds = new String[]{{
                    add("distinctio"),
                    add("quibusdam"),
                    add("unde"),
                }};
                version = "2011-01-01";
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }}            

            GETAttachInstancesResponse res = sdk.getAttachInstances(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->