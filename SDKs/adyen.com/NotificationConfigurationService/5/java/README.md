# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCreateNotificationConfigurationResponse;
import org.openapis.openapi.models.operations.PostCreateNotificationConfigurationSecurity;
import org.openapis.openapi.models.shared.CreateNotificationConfigurationRequest;
import org.openapis.openapi.models.shared.NotificationConfigurationDetails;
import org.openapis.openapi.models.shared.NotificationConfigurationDetailsSslProtocolEnum;
import org.openapis.openapi.models.shared.NotificationEventConfiguration;
import org.openapis.openapi.models.shared.NotificationEventConfigurationEventTypeEnum;
import org.openapis.openapi.models.shared.NotificationEventConfigurationIncludeModeEnum;
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
                                eventConfigs = new org.openapis.openapi.models.shared.NotificationEventConfiguration[]{{
                                    add(new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.SCHEDULED_REFUNDS, NotificationEventConfigurationIncludeModeEnum.INCLUDE) {{
                                        eventType = NotificationEventConfigurationEventTypeEnum.SCHEDULED_REFUNDS;
                                        includeMode = NotificationEventConfigurationIncludeModeEnum.INCLUDE;
                                    }}),
                                    add(new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.DIRECT_DEBIT_INITIATED, NotificationEventConfigurationIncludeModeEnum.INCLUDE) {{
                                        eventType = NotificationEventConfigurationEventTypeEnum.SCHEDULED_REFUNDS;
                                        includeMode = NotificationEventConfigurationIncludeModeEnum.EXCLUDE;
                                    }}),
                                    add(new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.ACCOUNT_HOLDER_STATUS_CHANGE, NotificationEventConfigurationIncludeModeEnum.INCLUDE) {{
                                        eventType = NotificationEventConfigurationEventTypeEnum.ACCOUNT_HOLDER_UPCOMING_DEADLINE;
                                        includeMode = NotificationEventConfigurationIncludeModeEnum.EXCLUDE;
                                    }}),
                                }};
                                hmacSignatureKey = "ipsa";
                                notificationId = 963663L;
                                notifyPassword = "tempora";
                                notifyURL = "suscipit";
                                notifyUsername = "molestiae";
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [general](docs/general/README.md)

* [postCreateNotificationConfiguration](docs/general/README.md#postcreatenotificationconfiguration) - Subscribe to notifications
* [postDeleteNotificationConfigurations](docs/general/README.md#postdeletenotificationconfigurations) - Delete a notification subscription configuration
* [postGetNotificationConfiguration](docs/general/README.md#postgetnotificationconfiguration) - Get a notification subscription configuration
* [postGetNotificationConfigurationList](docs/general/README.md#postgetnotificationconfigurationlist) - Get a list of notification subscription configurations
* [postTestNotificationConfiguration](docs/general/README.md#posttestnotificationconfiguration) - Test a notification configuration
* [postUpdateNotificationConfiguration](docs/general/README.md#postupdatenotificationconfiguration) - Update a notification subscription configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
