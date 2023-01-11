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
                    sourceIdentifier = "ad";
                    subscriptionName = "ut";
                    version = "2013-01-10";
                }};
                headers = new GetAddSourceIdentifierToSubscriptionHeaders() {{
                    xAmzAlgorithm = "qui";
                    xAmzContentSha256 = "in";
                    xAmzCredential = "ea";
                    xAmzDate = "voluptate";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "consequatur";
                    xAmzSignedHeaders = "aliquam";
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