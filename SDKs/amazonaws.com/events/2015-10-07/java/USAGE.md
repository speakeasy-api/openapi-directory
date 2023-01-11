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

            ActivateEventSourceRequest req = new ActivateEventSourceRequest() {{
                headers = new ActivateEventSourceHeaders() {{
                    xAmzAlgorithm = "harum";
                    xAmzContentSha256 = "quisquam";
                    xAmzCredential = "expedita";
                    xAmzDate = "et";
                    xAmzSecurityToken = "voluptate";
                    xAmzSignature = "omnis";
                    xAmzSignedHeaders = "dolores";
                    xAmzTarget = "AWSEvents.ActivateEventSource";
                }};
                request = new ActivateEventSourceRequest() {{
                    name = "vel";
                }};
            }};

            ActivateEventSourceResponse res = sdk.activateEventSource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->