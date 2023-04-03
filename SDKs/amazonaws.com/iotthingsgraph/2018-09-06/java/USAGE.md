<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateEntityToThingXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateEntityToThingRequest;
import org.openapis.openapi.models.operations.AssociateEntityToThingResponse;
import org.openapis.openapi.models.shared.AssociateEntityToThingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateEntityToThingRequest req = new AssociateEntityToThingRequest() {{
                associateEntityToThingRequest = new AssociateEntityToThingRequest() {{
                    entityId = "corrupti";
                    namespaceVersion = 592845;
                    thingName = "distinctio";
                }};
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
                xAmzTarget = "IotThingsGraphFrontEndService.AssociateEntityToThing";
            }}            

            AssociateEntityToThingResponse res = sdk.associateEntityToThing(req);

            if (res.associateEntityToThingResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->