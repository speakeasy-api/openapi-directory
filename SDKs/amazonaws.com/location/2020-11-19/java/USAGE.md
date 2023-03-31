<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerPathParams;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerHeaders;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerRequestBody;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerRequest;
import org.openapis.openapi.models.operations.AssociateTrackerConsumerResponse;

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

            AssociateTrackerConsumerRequest req = new AssociateTrackerConsumerRequest() {{
                pathParams = new AssociateTrackerConsumerPathParams() {{
                    trackerName = "corrupti";
                }};
                headers = new AssociateTrackerConsumerHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new AssociateTrackerConsumerRequestBody() {{
                    consumerArn = "vel";
                }};
            }};            

            AssociateTrackerConsumerResponse res = sdk.associateTrackerConsumer(req);

            if (res.associateTrackerConsumerResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->