# general

### Available Operations

* [postCreateNotificationConfiguration](#postcreatenotificationconfiguration) - Subscribe to notifications
* [postDeleteNotificationConfigurations](#postdeletenotificationconfigurations) - Delete a notification subscription configuration
* [postGetNotificationConfiguration](#postgetnotificationconfiguration) - Get a notification subscription configuration
* [postGetNotificationConfigurationList](#postgetnotificationconfigurationlist) - Get a list of notification subscription configurations
* [postTestNotificationConfiguration](#posttestnotificationconfiguration) - Test a notification configuration
* [postUpdateNotificationConfiguration](#postupdatenotificationconfiguration) - Update a notification subscription configuration

## postCreateNotificationConfiguration

Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.

### Example Usage

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
                                apiVersion = 812169;
                                description = "voluptatum";
                                eventConfigs = new org.openapis.openapi.models.shared.NotificationEventConfiguration[]{{
                                    add(new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.TRANSFER_FUNDS, NotificationEventConfigurationIncludeModeEnum.INCLUDE) {{
                                        eventType = NotificationEventConfigurationEventTypeEnum.COMPENSATE_NEGATIVE_BALANCE;
                                        includeMode = NotificationEventConfigurationIncludeModeEnum.EXCLUDE;
                                    }}),
                                    add(new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.ACCOUNT_FUNDS_BELOW_THRESHOLD, NotificationEventConfigurationIncludeModeEnum.INCLUDE) {{
                                        eventType = NotificationEventConfigurationEventTypeEnum.ACCOUNT_CREATED;
                                        includeMode = NotificationEventConfigurationIncludeModeEnum.EXCLUDE;
                                    }}),
                                }};
                                hmacSignatureKey = "perferendis";
                                notificationId = 368241L;
                                notifyPassword = "repellendus";
                                notifyURL = "sapiente";
                                notifyUsername = "quo";
                                sslProtocol = NotificationConfigurationDetailsSslProtocolEnum.TL_SV12;
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

## postDeleteNotificationConfigurations

Deletes an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL defined in the subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDeleteNotificationConfigurationsResponse;
import org.openapis.openapi.models.operations.PostDeleteNotificationConfigurationsSecurity;
import org.openapis.openapi.models.shared.DeleteNotificationConfigurationRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DeleteNotificationConfigurationRequest req = new DeleteNotificationConfigurationRequest(                new Long[]{{
                                add(870088L),
                                add(978619L),
                                add(473608L),
                                add(799159L),
                            }});            

            PostDeleteNotificationConfigurationsResponse res = sdk.general.postDeleteNotificationConfigurations(req, new PostDeleteNotificationConfigurationsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.genericResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetNotificationConfiguration

Returns the details of the configuration of a notification subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetNotificationConfigurationResponse;
import org.openapis.openapi.models.operations.PostGetNotificationConfigurationSecurity;
import org.openapis.openapi.models.shared.GetNotificationConfigurationRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GetNotificationConfigurationRequest req = new GetNotificationConfigurationRequest(800911L);            

            PostGetNotificationConfigurationResponse res = sdk.general.postGetNotificationConfiguration(req, new PostGetNotificationConfigurationSecurity() {{
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

## postGetNotificationConfigurationList

Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetNotificationConfigurationListResponse;
import org.openapis.openapi.models.operations.PostGetNotificationConfigurationListSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("totam", "porro");
                put("dolorum", "dicta");
            }}            

            PostGetNotificationConfigurationListResponse res = sdk.general.postGetNotificationConfigurationList(req, new PostGetNotificationConfigurationListSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getNotificationConfigurationListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTestNotificationConfiguration

Tests an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTestNotificationConfigurationResponse;
import org.openapis.openapi.models.operations.PostTestNotificationConfigurationSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TestNotificationConfigurationRequest;
import org.openapis.openapi.models.shared.TestNotificationConfigurationRequestEventTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TestNotificationConfigurationRequest req = new TestNotificationConfigurationRequest(720633L) {{
                eventTypes = new org.openapis.openapi.models.shared.TestNotificationConfigurationRequestEventTypesEnum[]{{
                    add(TestNotificationConfigurationRequestEventTypesEnum.COMPENSATE_NEGATIVE_BALANCE),
                    add(TestNotificationConfigurationRequestEventTypesEnum.ACCOUNT_HOLDER_CREATED),
                    add(TestNotificationConfigurationRequestEventTypesEnum.BENEFICIARY_SETUP),
                }};
            }};            

            PostTestNotificationConfigurationResponse res = sdk.general.postTestNotificationConfiguration(req, new PostTestNotificationConfigurationSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.testNotificationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateNotificationConfiguration

Updates an existing notification subscription configuration. If you are updating the event types, you must provide all event types, otherwise the previous event type configuration will be overwritten.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUpdateNotificationConfigurationResponse;
import org.openapis.openapi.models.operations.PostUpdateNotificationConfigurationSecurity;
import org.openapis.openapi.models.shared.NotificationConfigurationDetails;
import org.openapis.openapi.models.shared.NotificationConfigurationDetailsSslProtocolEnum;
import org.openapis.openapi.models.shared.NotificationEventConfiguration;
import org.openapis.openapi.models.shared.NotificationEventConfigurationEventTypeEnum;
import org.openapis.openapi.models.shared.NotificationEventConfigurationIncludeModeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UpdateNotificationConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UpdateNotificationConfigurationRequest req = new UpdateNotificationConfigurationRequest(                new NotificationConfigurationDetails() {{
                                active = false;
                                apiVersion = 944669;
                                description = "optio";
                                eventConfigs = new org.openapis.openapi.models.shared.NotificationEventConfiguration[]{{
                                    add(new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.ACCOUNT_HOLDER_VERIFICATION, NotificationEventConfigurationIncludeModeEnum.EXCLUDE) {{
                                        eventType = NotificationEventConfigurationEventTypeEnum.ACCOUNT_FUNDS_BELOW_THRESHOLD;
                                        includeMode = NotificationEventConfigurationIncludeModeEnum.EXCLUDE;
                                    }}),
                                    add(new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.PENDING_CREDIT, NotificationEventConfigurationIncludeModeEnum.EXCLUDE) {{
                                        eventType = NotificationEventConfigurationEventTypeEnum.ACCOUNT_HOLDER_LIMIT_REACHED;
                                        includeMode = NotificationEventConfigurationIncludeModeEnum.INCLUDE;
                                    }}),
                                    add(new NotificationEventConfiguration(NotificationEventConfigurationEventTypeEnum.ACCOUNT_HOLDER_CREATED, NotificationEventConfigurationIncludeModeEnum.EXCLUDE) {{
                                        eventType = NotificationEventConfigurationEventTypeEnum.ACCOUNT_HOLDER_MIGRATED;
                                        includeMode = NotificationEventConfigurationIncludeModeEnum.INCLUDE;
                                    }}),
                                }};
                                hmacSignatureKey = "ad";
                                notificationId = 617636L;
                                notifyPassword = "sed";
                                notifyURL = "iste";
                                notifyUsername = "dolor";
                                sslProtocol = NotificationConfigurationDetailsSslProtocolEnum.TL_SV13;
                            }};);            

            PostUpdateNotificationConfigurationResponse res = sdk.general.postUpdateNotificationConfiguration(req, new PostUpdateNotificationConfigurationSecurity() {{
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
