<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateByteMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateByteMatchSetRequest;
import org.openapis.openapi.models.operations.CreateByteMatchSetResponse;
import org.openapis.openapi.models.shared.CreateByteMatchSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateByteMatchSetRequest req = new CreateByteMatchSetRequest() {{
                createByteMatchSetRequest = new CreateByteMatchSetRequest() {{
                    changeToken = "corrupti";
                    name = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                xAmzTarget = "AWSWAF_20150824.CreateByteMatchSet";
            }}            

            CreateByteMatchSetResponse res = sdk.createByteMatchSet(req);

            if (res.createByteMatchSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->