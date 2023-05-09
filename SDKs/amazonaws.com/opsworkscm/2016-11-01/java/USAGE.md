<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateNodeRequest;
import org.openapis.openapi.models.operations.AssociateNodeResponse;
import org.openapis.openapi.models.operations.AssociateNodeXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateNodeRequest;
import org.openapis.openapi.models.shared.EngineAttribute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateNodeRequest req = new AssociateNodeRequest(                new AssociateNodeRequest(                new org.openapis.openapi.models.shared.EngineAttribute[]{{
                                                add(new EngineAttribute() {{
                                                    name = "Ellis Mitchell";
                                                    value = "illum";
                                                }}),
                                                add(new EngineAttribute() {{
                                                    name = "Sabrina Oberbrunner";
                                                    value = "magnam";
                                                }}),
                                                add(new EngineAttribute() {{
                                                    name = "Larry Windler";
                                                    value = "molestiae";
                                                }}),
                                            }}, "minus", "placeat");, AssociateNodeXAmzTargetEnum.OPS_WORKS_CMV20161101_ASSOCIATE_NODE) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            AssociateNodeResponse res = sdk.associateNode(req);

            if (res.associateNodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->