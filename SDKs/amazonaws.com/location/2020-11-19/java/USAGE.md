<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AssociateTrackerConsumerRequest req = new AssociateTrackerConsumerRequest() {{
                pathParams = new AssociateTrackerConsumerPathParams() {{
                    trackerName = "sit";
                }};
                headers = new AssociateTrackerConsumerHeaders() {{
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "culpa";
                    xAmzCredential = "expedita";
                    xAmzDate = "consequuntur";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "expedita";
                    xAmzSignedHeaders = "voluptas";
                }};
                request = new AssociateTrackerConsumerRequestBody() {{
                    consumerArn = "fugit";
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