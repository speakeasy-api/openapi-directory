<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateEntityToThingXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateEntityToThingHeaders;
import org.openapis.openapi.models.operations.AssociateEntityToThingRequest;
import org.openapis.openapi.models.operations.AssociateEntityToThingResponse;
import org.openapis.openapi.models.shared.AssociateEntityToThingRequest;

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

            AssociateEntityToThingRequest req = new AssociateEntityToThingRequest() {{
                headers = new AssociateEntityToThingHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "IotThingsGraphFrontEndService.AssociateEntityToThing";
                }};
                request = new AssociateEntityToThingRequest() {{
                    entityId = "illum";
                    namespaceVersion = 423655;
                    thingName = "error";
                }};
            }};            

            AssociateEntityToThingResponse res = sdk.associateEntityToThing(req);

            if (res.associateEntityToThingResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->