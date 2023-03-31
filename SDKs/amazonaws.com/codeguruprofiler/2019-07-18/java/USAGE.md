<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddNotificationChannelsPathParams;
import org.openapis.openapi.models.operations.AddNotificationChannelsHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddNotificationChannelsRequest req = new AddNotificationChannelsRequest() {{
                pathParams = new AddNotificationChannelsPathParams() {{
                    profilingGroupName = "corrupti";
                }};
                headers = new AddNotificationChannelsHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new AddNotificationChannelsRequestBody() {{
                    channels = new org.openapis.openapi.models.shared.Channel[]{{
                        add(new Channel() {{
                            eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                add("AnomalyDetection"),
                                add("AnomalyDetection"),
                                add("AnomalyDetection"),
                            }};
                            id = "deserunt";
                            uri = "http://innocent-effect.org";
                        }}),
                        add(new Channel() {{
                            eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                add("AnomalyDetection"),
                            }};
                            id = "delectus";
                            uri = "http://hideous-jam.net";
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