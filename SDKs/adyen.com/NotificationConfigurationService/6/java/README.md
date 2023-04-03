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

import org.openapis.openapi.models.operations.PostCreateNotificationConfigurationSecurity;
import org.openapis.openapi.models.operations.PostCreateNotificationConfigurationResponse;
import org.openapis.openapi.models.shared.CreateNotificationConfigurationRequest;
import org.openapis.openapi.models.shared.NotificationConfigurationDetailsSslProtocolEnum;
import org.openapis.openapi.models.shared.NotificationConfigurationDetails;
import org.openapis.openapi.models.shared.NotificationEventConfigurationEventTypeEnum;
import org.openapis.openapi.models.shared.NotificationEventConfigurationIncludeModeEnum;
import org.openapis.openapi.models.shared.NotificationEventConfiguration;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateNotificationConfigurationRequest req = new CreateNotificationConfigurationRequest() {{
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
                    hmacSignatureKey = "error";
                    notificationId = 645894;
                    notifyPassword = "suscipit";
                    notifyURL = "iure";
                    notifyUsername = "magnam";
                    sslProtocol = "TLSv13";
                }};
            }}            

            PostCreateNotificationConfigurationResponse res = sdk.general.postCreateNotificationConfiguration(req, new PostCreateNotificationConfigurationSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getNotificationConfigurationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `postCreateNotificationConfiguration` - Subscribe to notifications
* `postDeleteNotificationConfigurations` - Delete a notification subscription configuration
* `postGetNotificationConfiguration` - Get a notification subscription configuration
* `postGetNotificationConfigurationList` - Get a list of notification subscription configurations
* `postTestNotificationConfiguration` - Test a notification configuration
* `postUpdateNotificationConfiguration` - Update a notification subscription configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
