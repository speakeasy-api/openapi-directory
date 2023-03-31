<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateByteMatchSetXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateByteMatchSetHeaders;
import org.openapis.openapi.models.operations.CreateByteMatchSetRequest;
import org.openapis.openapi.models.operations.CreateByteMatchSetResponse;
import org.openapis.openapi.models.shared.CreateByteMatchSetRequest;

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

            CreateByteMatchSetRequest req = new CreateByteMatchSetRequest() {{
                headers = new CreateByteMatchSetHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSWAF_20150824.CreateByteMatchSet";
                }};
                request = new CreateByteMatchSetRequest() {{
                    changeToken = "illum";
                    name = "vel";
                }};
            }};            

            CreateByteMatchSetResponse res = sdk.createByteMatchSet(req);

            if (res.createByteMatchSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->