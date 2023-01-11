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

            AddNotificationChannelRequest req = new AddNotificationChannelRequest() {{
                headers = new AddNotificationChannelHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new AddNotificationChannelRequestBody() {{
                    config = new AddNotificationChannelRequestBodyConfig() {{
                        sns = new SnsChannelConfig() {{
                            topicArn = "voluptas";
                        }};
                    }};
                }};
            }};

            AddNotificationChannelResponse res = sdk.addNotificationChannel(req);

            if (res.addNotificationChannelResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->