<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCreateNotificationConfigurationResponse;
import org.openapis.openapi.models.operations.PostCreateNotificationConfigurationSecurity;
import org.openapis.openapi.models.shared.CreateNotificationConfigurationRequest;
import org.openapis.openapi.models.shared.NotificationConfigurationDetails;
import org.openapis.openapi.models.shared.NotificationConfigurationDetailsMessageFormatEnum;
import org.openapis.openapi.models.shared.NotificationConfigurationDetailsSslProtocolEnum;
import org.openapis.openapi.models.shared.NotificationEventConfiguration;
import org.openapis.openapi.models.shared.NotificationEventConfigurationEventTypeEnum;
import org.openapis.openapi.models.shared.NotificationEventConfigurationIncludeModeEnum;
import org.openapis.openapi.models.shared.NotificationEventConfigurationWrapper;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateNotificationConfigurationRequest req = new CreateNotificationConfigurationRequest(                new NotificationConfigurationDetails() {{
                                active = false;
                                apiVersion = 548814;
                                description = "provident";
                                eventConfigs = new org.openapis.openapi.models.shared.NotificationEventConfigurationWrapper[]{{
                                    add(new NotificationEventConfigurationWrapper() {{
                                        notificationEventConfiguration = new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.SCHEDULED_REFUNDS, NotificationEventConfigurationIncludeModeEnum.INCLUDE) {{
                                            eventType = NotificationEventConfigurationEventTypeEnum.SCHEDULED_REFUNDS;
                                            includeMode = NotificationEventConfigurationIncludeModeEnum.INCLUDE;
                                        }};
                                    }}),
                                    add(new NotificationEventConfigurationWrapper() {{
                                        notificationEventConfiguration = new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.DIRECT_DEBIT_INITIATED, NotificationEventConfigurationIncludeModeEnum.INCLUDE) {{
                                            eventType = NotificationEventConfigurationEventTypeEnum.SCHEDULED_REFUNDS;
                                            includeMode = NotificationEventConfigurationIncludeModeEnum.EXCLUDE;
                                        }};
                                    }}),
                                    add(new NotificationEventConfigurationWrapper() {{
                                        notificationEventConfiguration = new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.ACCOUNT_HOLDER_STATUS_CHANGE, NotificationEventConfigurationIncludeModeEnum.INCLUDE) {{
                                            eventType = NotificationEventConfigurationEventTypeEnum.ACCOUNT_HOLDER_UPCOMING_DEADLINE;
                                            includeMode = NotificationEventConfigurationIncludeModeEnum.EXCLUDE;
                                        }};
                                    }}),
                                }};
                                messageFormat = NotificationConfigurationDetailsMessageFormatEnum.JSON;
                                notificationId = 963663L;
                                notifyPassword = "tempora";
                                notifyURL = "suscipit";
                                notifyUsername = "molestiae";
                                sendActionHeader = false;
                                sslProtocol = NotificationConfigurationDetailsSslProtocolEnum.TL_SV13;
                            }};);            

            PostCreateNotificationConfigurationResponse res = sdk.general.postCreateNotificationConfiguration(req, new PostCreateNotificationConfigurationSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getNotificationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->