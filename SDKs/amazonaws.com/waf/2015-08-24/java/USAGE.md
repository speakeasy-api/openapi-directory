<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateByteMatchSetRequest;
import org.openapis.openapi.models.operations.CreateByteMatchSetResponse;
import org.openapis.openapi.models.operations.CreateByteMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateByteMatchSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateByteMatchSetRequest req = new CreateByteMatchSetRequest(                new CreateByteMatchSetRequest("provident", "distinctio");, CreateByteMatchSetXAmzTargetEnum.AWSWAF20150824_CREATE_BYTE_MATCH_SET) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            CreateByteMatchSetResponse res = sdk.createByteMatchSet(req);

            if (res.createByteMatchSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->