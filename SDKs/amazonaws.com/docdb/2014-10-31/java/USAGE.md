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
                    sourceIdentifier = "aliquam";
                    subscriptionName = "non";
                    version = "2014-10-31";
                }};
                headers = new GetAddSourceIdentifierToSubscriptionHeaders() {{
                    xAmzAlgorithm = "est";
                    xAmzContentSha256 = "velit";
                    xAmzCredential = "totam";
                    xAmzDate = "ab";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "commodi";
                    xAmzSignedHeaders = "fugiat";
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