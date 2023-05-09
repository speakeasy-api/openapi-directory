<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAttachInstancesActionEnum;
import org.openapis.openapi.models.operations.GETAttachInstancesRequest;
import org.openapis.openapi.models.operations.GETAttachInstancesResponse;
import org.openapis.openapi.models.operations.GETAttachInstancesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAttachInstancesRequest req = new GETAttachInstancesRequest(GETAttachInstancesActionEnum.ATTACH_INSTANCES, "provident", GETAttachInstancesVersionEnum.TWO_THOUSAND_AND_ELEVEN0101) {{
                instanceIds = new String[]{{
                    add("quibusdam"),
                    add("unde"),
                    add("nulla"),
                }};
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            GETAttachInstancesResponse res = sdk.getAttachInstances(req);

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