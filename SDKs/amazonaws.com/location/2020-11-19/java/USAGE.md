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
                    trackerName = "omnis";
                }};
                headers = new AssociateTrackerConsumerHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "dolores";
                    xAmzCredential = "voluptatem";
                    xAmzDate = "consectetur";
                    xAmzSecurityToken = "est";
                    xAmzSignature = "ducimus";
                    xAmzSignedHeaders = "adipisci";
                }};
                request = new AssociateTrackerConsumerRequestBody() {{
                    consumerArn = "ut";
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