<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddNotificationChannelsRequestBody;
import org.openapis.openapi.models.operations.AddNotificationChannelsRequest;
import org.openapis.openapi.models.operations.AddNotificationChannelsResponse;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.EventPublisherEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddNotificationChannelsRequest req = new AddNotificationChannelsRequest() {{
                requestBody = new AddNotificationChannelsRequestBody() {{
                    channels = new org.openapis.openapi.models.shared.Channel[]{{
                        add(new Channel() {{
                            eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                add("AnomalyDetection"),
                                add("AnomalyDetection"),
                                add("AnomalyDetection"),
                            }};
                            id = "distinctio";
                            uri = "https://outstanding-strait.name";
                        }}),
                        add(new Channel() {{
                            eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                add("AnomalyDetection"),
                                add("AnomalyDetection"),
                                add("AnomalyDetection"),
                                add("AnomalyDetection"),
                            }};
                            id = "vel";
                            uri = "https://present-giggle.info";
                        }}),
                        add(new Channel() {{
                            eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                add("AnomalyDetection"),
                                add("AnomalyDetection"),
                            }};
                            id = "debitis";
                            uri = "http://whirlwind-diver.info";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
                profilingGroupName = "recusandae";
            }}            

            AddNotificationChannelsResponse res = sdk.addNotificationChannels(req);

            if (res.addNotificationChannelsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->