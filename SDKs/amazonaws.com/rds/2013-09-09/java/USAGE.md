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

            GetAddSourceIdentifierToSubscriptionRequest req = new GetAddSourceIdentifierToSubscriptionRequest() {{
                queryParams = new GetAddSourceIdentifierToSubscriptionQueryParams() {{
                    action = "AddSourceIdentifierToSubscription";
                    sourceIdentifier = "rerum";
                    subscriptionName = "voluptates";
                    version = "2013-09-09";
                }};
                headers = new GetAddSourceIdentifierToSubscriptionHeaders() {{
                    xAmzAlgorithm = "adipisci";
                    xAmzContentSha256 = "eum";
                    xAmzCredential = "non";
                    xAmzDate = "qui";
                    xAmzSecurityToken = "eum";
                    xAmzSignature = "corporis";
                    xAmzSignedHeaders = "magni";
                }};
            }};

            GetAddSourceIdentifierToSubscriptionResponse res = sdk.getAddSourceIdentifierToSubscription(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->