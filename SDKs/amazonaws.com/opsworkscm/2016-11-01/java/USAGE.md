<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateNodeXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateNodeRequest;
import org.openapis.openapi.models.operations.AssociateNodeResponse;
import org.openapis.openapi.models.shared.AssociateNodeRequest;
import org.openapis.openapi.models.shared.EngineAttribute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateNodeRequest req = new AssociateNodeRequest() {{
                associateNodeRequest = new AssociateNodeRequest() {{
                    engineAttributes = new org.openapis.openapi.models.shared.EngineAttribute[]{{
                        add(new EngineAttribute() {{
                            name = "provident";
                            value = "distinctio";
                        }}),
                        add(new EngineAttribute() {{
                            name = "quibusdam";
                            value = "unde";
                        }}),
                        add(new EngineAttribute() {{
                            name = "nulla";
                            value = "corrupti";
                        }}),
                    }};
                    nodeName = "illum";
                    serverName = "vel";
                }};
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
                xAmzTarget = "OpsWorksCM_V2016_11_01.AssociateNode";
            }}            

            AssociateNodeResponse res = sdk.associateNode(req);

            if (res.associateNodeResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->