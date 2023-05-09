<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddNotificationChannelRequest;
import org.openapis.openapi.models.operations.AddNotificationChannelRequestBody;
import org.openapis.openapi.models.operations.AddNotificationChannelRequestBodyConfig;
import org.openapis.openapi.models.operations.AddNotificationChannelResponse;
import org.openapis.openapi.models.shared.InsightSeverityEnum;
import org.openapis.openapi.models.shared.NotificationFilterConfig;
import org.openapis.openapi.models.shared.NotificationMessageTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnsChannelConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddNotificationChannelRequest req = new AddNotificationChannelRequest(                new AddNotificationChannelRequestBody(                new AddNotificationChannelRequestBodyConfig() {{
                                                filters = new NotificationFilterConfig() {{
                                                    messageTypes = new org.openapis.openapi.models.shared.NotificationMessageTypeEnum[]{{
                                                        add(NotificationMessageTypeEnum.SEVERITY_UPGRADED),
                                                        add(NotificationMessageTypeEnum.NEW_RECOMMENDATION),
                                                        add(NotificationMessageTypeEnum.SEVERITY_UPGRADED),
                                                    }};
                                                    severities = new org.openapis.openapi.models.shared.InsightSeverityEnum[]{{
                                                        add(InsightSeverityEnum.MEDIUM),
                                                        add(InsightSeverityEnum.HIGH),
                                                        add(InsightSeverityEnum.MEDIUM),
                                                        add(InsightSeverityEnum.MEDIUM),
                                                    }};
                                                }};;
                                                sns = new SnsChannelConfig() {{
                                                    topicArn = "deserunt";
                                                }};;
                                            }};);) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AddNotificationChannelResponse res = sdk.addNotificationChannel(req);

            if (res.addNotificationChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->