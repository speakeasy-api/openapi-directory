<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddNotificationChannelRequestBodyConfig;
import org.openapis.openapi.models.operations.AddNotificationChannelRequestBody;
import org.openapis.openapi.models.operations.AddNotificationChannelRequest;
import org.openapis.openapi.models.operations.AddNotificationChannelResponse;
import org.openapis.openapi.models.shared.SnsChannelConfig;
import org.openapis.openapi.models.shared.NotificationFilterConfig;
import org.openapis.openapi.models.shared.InsightSeverityEnum;
import org.openapis.openapi.models.shared.NotificationMessageTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddNotificationChannelRequest req = new AddNotificationChannelRequest() {{
                requestBody = new AddNotificationChannelRequestBody() {{
                    config = new AddNotificationChannelRequestBodyConfig() {{
                        filters = new NotificationFilterConfig() {{
                            messageTypes = new org.openapis.openapi.models.shared.NotificationMessageTypeEnum[]{{
                                add("NEW_ASSOCIATION"),
                                add("SEVERITY_UPGRADED"),
                                add("NEW_RECOMMENDATION"),
                            }};
                            severities = new org.openapis.openapi.models.shared.InsightSeverityEnum[]{{
                                add("HIGH"),
                                add("MEDIUM"),
                                add("HIGH"),
                            }};
                        }};
                        sns = new SnsChannelConfig() {{
                            topicArn = "vel";
                        }};
                    }};
                }};
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
            }}            

            AddNotificationChannelResponse res = sdk.addNotificationChannel(req);

            if (res.addNotificationChannelResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->