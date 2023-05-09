<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerRequest;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerRequestBody;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateTrackerConsumerRequest req = new AssociateTrackerConsumerRequest(                new AssociateTrackerConsumerRequestBody("provident");, "distinctio") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateTrackerConsumerResponse res = sdk.associateTrackerConsumer(req);

            if (res.associateTrackerConsumerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->