<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostCreateNotificationConfigurationSecurity;
import org.openapis.openapi.models.operations.PostCreateNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.PostCreateNotificationConfigurationResponse;
import org.openapis.openapi.models.shared.CreateNotificationConfigurationRequest;
import org.openapis.openapi.models.shared.NotificationConfigurationDetailsMessageFormatEnum;
import org.openapis.openapi.models.shared.NotificationConfigurationDetailsSslProtocolEnum;
import org.openapis.openapi.models.shared.NotificationConfigurationDetails;
import org.openapis.openapi.models.shared.NotificationEventConfigurationEventTypeEnum;
import org.openapis.openapi.models.shared.NotificationEventConfigurationIncludeModeEnum;
import org.openapis.openapi.models.shared.NotificationEventConfiguration;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCreateNotificationConfigurationRequest req = new PostCreateNotificationConfigurationRequest() {{
                security = new PostCreateNotificationConfigurationSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new CreateNotificationConfigurationRequest() {{
                    configurationDetails = new NotificationConfigurationDetails() {{
                        active = false;
                        apiVersion = 548814;
                        description = "provident";
                        eventConfigs = new org.openapis.openapi.models.shared.NotificationEventConfiguration[]{{
                            add(new NotificationEventConfiguration() {{
                                eventType = "SCHEDULED_REFUNDS";
                                includeMode = "INCLUDE";
                            }}),
                            add(new NotificationEventConfiguration() {{
                                eventType = "SCHEDULED_REFUNDS";
                                includeMode = "INCLUDE";
                            }}),
                            add(new NotificationEventConfiguration() {{
                                eventType = "SCHEDULED_REFUNDS";
                                includeMode = "EXCLUDE";
                            }}),
                        }};
                        messageFormat = "SOAP";
                        notificationId = 645894;
                        notifyPassword = "suscipit";
                        notifyURL = "iure";
                        notifyUsername = "magnam";
                        sendActionHeader = false;
                        sslProtocol = "TLSv13";
                    }};
                }};
            }};            

            PostCreateNotificationConfigurationResponse res = sdk.general.postCreateNotificationConfiguration(req);

            if (res.getNotificationConfigurationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->