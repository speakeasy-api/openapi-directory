<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateEntityToThingRequest;
import org.openapis.openapi.models.operations.AssociateEntityToThingResponse;
import org.openapis.openapi.models.operations.AssociateEntityToThingXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateEntityToThingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateEntityToThingRequest req = new AssociateEntityToThingRequest(                new AssociateEntityToThingRequest("provident", "distinctio") {{
                                namespaceVersion = 844266L;
                            }};, AssociateEntityToThingXAmzTargetEnum.IOT_THINGS_GRAPH_FRONT_END_SERVICE_ASSOCIATE_ENTITY_TO_THING) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            AssociateEntityToThingResponse res = sdk.associateEntityToThing(req);

            if (res.associateEntityToThingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->