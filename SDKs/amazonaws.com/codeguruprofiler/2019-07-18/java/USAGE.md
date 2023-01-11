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
                    profilingGroupName = "deleniti";
                }};
                headers = new AddNotificationChannelsHeaders() {{
                    xAmzAlgorithm = "corporis";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "architecto";
                    xAmzDate = "et";
                    xAmzSecurityToken = "eum";
                    xAmzSignature = "vero";
                    xAmzSignedHeaders = "totam";
                }};
                request = new AddNotificationChannelsRequestBody() {{
                    channels = new openapisdk.models.shared.Channel[]() {{
                        add(new Channel() {{
                            eventPublishers = new openapisdk.models.shared.EventPublisherEnum[]() {{
                                add("AnomalyDetection"),
                                add("AnomalyDetection"),
                            }};
                            id = "explicabo";
                            uri = "consequatur";
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