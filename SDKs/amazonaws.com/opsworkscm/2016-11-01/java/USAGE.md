<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateNodeXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateNodeHeaders;
import org.openapis.openapi.models.operations.AssociateNodeRequest;
import org.openapis.openapi.models.operations.AssociateNodeResponse;
import org.openapis.openapi.models.shared.AssociateNodeRequest;
import org.openapis.openapi.models.shared.EngineAttribute;

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

            AssociateNodeRequest req = new AssociateNodeRequest() {{
                headers = new AssociateNodeHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "OpsWorksCM_V2016_11_01.AssociateNode";
                }};
                request = new AssociateNodeRequest() {{
                    engineAttributes = new org.openapis.openapi.models.shared.EngineAttribute[]{{
                        add(new EngineAttribute() {{
                            name = "vel";
                            value = "error";
                        }}),
                        add(new EngineAttribute() {{
                            name = "deserunt";
                            value = "suscipit";
                        }}),
                        add(new EngineAttribute() {{
                            name = "iure";
                            value = "magnam";
                        }}),
                        add(new EngineAttribute() {{
                            name = "debitis";
                            value = "ipsa";
                        }}),
                    }};
                    nodeName = "delectus";
                    serverName = "tempora";
                }};
            }};            

            AssociateNodeResponse res = sdk.associateNode(req);

            if (res.associateNodeResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->