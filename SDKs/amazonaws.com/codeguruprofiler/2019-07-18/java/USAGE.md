<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddNotificationChannelsRequest;
import org.openapis.openapi.models.operations.AddNotificationChannelsRequestBody;
import org.openapis.openapi.models.operations.AddNotificationChannelsResponse;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.EventPublisherEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddNotificationChannelsRequest req = new AddNotificationChannelsRequest(                new AddNotificationChannelsRequestBody(                new org.openapis.openapi.models.shared.Channel[]{{
                                                add(new Channel(                new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                }}, "at") {{
                                                    eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                    }};
                                                    id = "d9d8d69a-674e-40f4-a7cc-8796ed151a05";
                                                    uri = "https://well-informed-screamer.com";
                                                }}),
                                                add(new Channel(                new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                }}, "saepe") {{
                                                    eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                    }};
                                                    id = "7cc78ca1-ba92-48fc-8167-42cb73920592";
                                                    uri = "https://ecstatic-original.info";
                                                }}),
                                                add(new Channel(                new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                    add(EventPublisherEnum.ANOMALY_DETECTION),
                                                                }}, "commodi") {{
                                                    eventPublishers = new org.openapis.openapi.models.shared.EventPublisherEnum[]{{
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                        add(EventPublisherEnum.ANOMALY_DETECTION),
                                                    }};
                                                    id = "7596eb10-faaa-4235-ac59-55907aff1a3a";
                                                    uri = "http://young-pew.name";
                                                }}),
                                            }});, "quam") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
            }};            

            AddNotificationChannelsResponse res = sdk.addNotificationChannels(req);

            if (res.addNotificationChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->