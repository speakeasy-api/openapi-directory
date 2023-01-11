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

            AddNotificationChannelsRequest req = new AddNotificationChannelsRequest() {{
                pathParams = new AddNotificationChannelsPathParams() {{
                    profilingGroupName = "sit";
                }};
                headers = new AddNotificationChannelsHeaders() {{
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "culpa";
                    xAmzCredential = "expedita";
                    xAmzDate = "consequuntur";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "expedita";
                    xAmzSignedHeaders = "voluptas";
                }};
                request = new AddNotificationChannelsRequestBody() {{
                    channels = new openapisdk.models.shared.Channel[]() {{
                        add(new Channel() {{
                            eventPublishers = new openapisdk.models.shared.EventPublisherEnum[]() {{
                                add("AnomalyDetection"),
                            }};
                            id = "rerum";
                            uri = "dicta";
                        }}),
                    }};
                }};
            }};

            AddNotificationChannelsResponse res = sdk.addNotificationChannels(req);

            if (res.addNotificationChannelsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->