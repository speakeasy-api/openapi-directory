# push

### Available Operations

* [deletePushDeviceDetails](#deletepushdevicedetails) - Delete a registered device's update token
* [getChannelsWithPushSubscribers](#getchannelswithpushsubscribers) - List all channels with at least one subscribed device
* [getPushDeviceDetails](#getpushdevicedetails) - Get a device registration
* [getPushSubscriptionsOnChannels](#getpushsubscriptionsonchannels) - List channel subscriptions
* [getRegisteredPushDevices](#getregisteredpushdevices) - List devices registered for receiving push notifications
* [patchPushDeviceDetailsForm](#patchpushdevicedetailsform) - Update a device registration
* [patchPushDeviceDetailsJson](#patchpushdevicedetailsjson) - Update a device registration
* [patchPushDeviceDetailsRaw](#patchpushdevicedetailsraw) - Update a device registration
* [publishPushNotificationToDevicesForm](#publishpushnotificationtodevicesform) - Publish a push notification to device(s)
* [publishPushNotificationToDevicesJson](#publishpushnotificationtodevicesjson) - Publish a push notification to device(s)
* [publishPushNotificationToDevicesRaw](#publishpushnotificationtodevicesraw) - Publish a push notification to device(s)
* [putPushDeviceDetailsForm](#putpushdevicedetailsform) - Update a device registration
* [putPushDeviceDetailsJson](#putpushdevicedetailsjson) - Update a device registration
* [putPushDeviceDetailsRaw](#putpushdevicedetailsraw) - Update a device registration
* [registerPushDeviceJson](#registerpushdevicejson) - Register a device for receiving push notifications
* [registerPushDeviceRaw](#registerpushdeviceraw) - Register a device for receiving push notifications
* [subscribePushDeviceToChannelForm](#subscribepushdevicetochannelform) - Subscribe a device to a channel
* [subscribePushDeviceToChannelJson](#subscribepushdevicetochanneljson) - Subscribe a device to a channel
* [subscribePushDeviceToChannelRaw](#subscribepushdevicetochannelraw) - Subscribe a device to a channel
* [unregisterAllPushDevices](#unregisterallpushdevices) - Unregister matching devices for push notifications
* [unregisterPushDevice](#unregisterpushdevice) - Unregister a single device for push notifications
* [updatePushDeviceDetails](#updatepushdevicedetails) - Reset a registered device's update token

## deletePushDeviceDetails

Delete a device details object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePushDeviceDetailsRequest;
import org.openapis.openapi.models.operations.DeletePushDeviceDetailsResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("possimus", "aut") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeletePushDeviceDetailsRequest req = new DeletePushDeviceDetailsRequest() {{
                xAblyVersion = "quasi";
                channel = "error";
                clientId = "temporibus";
                deviceId = "laborum";
                format = ResponseFormatEnum.JSON;
            }};            

            DeletePushDeviceDetailsResponse res = sdk.push.deletePushDeviceDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChannelsWithPushSubscribers

Returns a paginated response of channel names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChannelsWithPushSubscribersRequest;
import org.openapis.openapi.models.operations.GetChannelsWithPushSubscribersResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("reiciendis", "voluptatibus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetChannelsWithPushSubscribersRequest req = new GetChannelsWithPushSubscribersRequest() {{
                xAblyVersion = "vero";
                format = ResponseFormatEnum.JSONP;
            }};            

            GetChannelsWithPushSubscribersResponse res = sdk.push.getChannelsWithPushSubscribers(req);

            if (res.getChannelsWithPushSubscribers2XXApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPushDeviceDetails

Get the full details of a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPushDeviceDetailsRequest;
import org.openapis.openapi.models.operations.GetPushDeviceDetailsResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("praesentium", "voluptatibus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetPushDeviceDetailsRequest req = new GetPushDeviceDetailsRequest("ipsa") {{
                xAblyVersion = "omnis";
                format = ResponseFormatEnum.JSONP;
            }};            

            GetPushDeviceDetailsResponse res = sdk.push.getPushDeviceDetails(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPushSubscriptionsOnChannels

Get a list of push notification subscriptions to channels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPushSubscriptionsOnChannelsRequest;
import org.openapis.openapi.models.operations.GetPushSubscriptionsOnChannelsResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("cum", "perferendis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetPushSubscriptionsOnChannelsRequest req = new GetPushSubscriptionsOnChannelsRequest() {{
                xAblyVersion = "doloremque";
                channel = "reprehenderit";
                clientId = "ut";
                deviceId = "maiores";
                format = ResponseFormatEnum.JSON;
                limit = 359444L;
            }};            

            GetPushSubscriptionsOnChannelsResponse res = sdk.push.getPushSubscriptionsOnChannels(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegisteredPushDevices

List of device details of devices registed for push notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegisteredPushDevicesRequest;
import org.openapis.openapi.models.operations.GetRegisteredPushDevicesResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolore", "iusto") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetRegisteredPushDevicesRequest req = new GetRegisteredPushDevicesRequest() {{
                xAblyVersion = "dicta";
                clientId = "harum";
                deviceId = "enim";
                format = ResponseFormatEnum.HTML;
                limit = 414263L;
            }};            

            GetRegisteredPushDevicesResponse res = sdk.push.getRegisteredPushDevices(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchPushDeviceDetailsForm

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchPushDeviceDetailsFormRequest;
import org.openapis.openapi.models.operations.PatchPushDeviceDetailsFormResponse;
import org.openapis.openapi.models.shared.DeviceDetailsFormFactorEnum;
import org.openapis.openapi.models.shared.DeviceDetailsInput;
import org.openapis.openapi.models.shared.DeviceDetailsPlatformEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("repudiandae", "quae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PatchPushDeviceDetailsFormRequest req = new PatchPushDeviceDetailsFormRequest("ipsum") {{
                deviceDetailsInput = new DeviceDetailsInput() {{
                    clientId = "quidem";
                    deviceSecret = "molestias";
                    formFactor = DeviceDetailsFormFactorEnum.TV;
                    id = "d488e1e9-1e45-40ad-aabd-44269802d502";
                    metadata = new java.util.HashMap<String, Object>() {{
                        put("excepturi", "tempora");
                        put("facilis", "tempore");
                        put("labore", "delectus");
                    }};
                    platform = DeviceDetailsPlatformEnum.IOS;
                    pushRecipient = new Recipient() {{
                        clientId = "non";
                        deviceId = "eligendi";
                        deviceToken = "sint";
                        registrationToken = "aliquid";
                        transportType = RecipientTransportTypeEnum.FCM;
                    }};;
                }};;
                xAblyVersion = "necessitatibus";
                format = ResponseFormatEnum.MSGPACK;
            }};            

            PatchPushDeviceDetailsFormResponse res = sdk.push.patchPushDeviceDetailsForm(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchPushDeviceDetailsJson

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchPushDeviceDetailsJsonRequest;
import org.openapis.openapi.models.operations.PatchPushDeviceDetailsJsonResponse;
import org.openapis.openapi.models.shared.DeviceDetailsFormFactorEnum;
import org.openapis.openapi.models.shared.DeviceDetailsInput;
import org.openapis.openapi.models.shared.DeviceDetailsPlatformEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("officia", "dolor") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PatchPushDeviceDetailsJsonRequest req = new PatchPushDeviceDetailsJsonRequest("debitis") {{
                deviceDetailsInput = new DeviceDetailsInput() {{
                    clientId = "a";
                    deviceSecret = "dolorum";
                    formFactor = DeviceDetailsFormFactorEnum.TV;
                    id = "7dfb14cd-66ae-4395-afb9-ba88f3a66997";
                    metadata = new java.util.HashMap<String, Object>() {{
                        put("nihil", "magnam");
                    }};
                    platform = DeviceDetailsPlatformEnum.ANDROID;
                    pushRecipient = new Recipient() {{
                        clientId = "id";
                        deviceId = "labore";
                        deviceToken = "labore";
                        registrationToken = "suscipit";
                        transportType = RecipientTransportTypeEnum.FCM;
                    }};;
                }};;
                xAblyVersion = "nobis";
                format = ResponseFormatEnum.JSONP;
            }};            

            PatchPushDeviceDetailsJsonResponse res = sdk.push.patchPushDeviceDetailsJson(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchPushDeviceDetailsRaw

Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchPushDeviceDetailsRawRequest;
import org.openapis.openapi.models.operations.PatchPushDeviceDetailsRawResponse;
import org.openapis.openapi.models.shared.DeviceDetailsFormFactorEnum;
import org.openapis.openapi.models.shared.DeviceDetailsInput;
import org.openapis.openapi.models.shared.DeviceDetailsPlatformEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("vero", "aspernatur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PatchPushDeviceDetailsRawRequest req = new PatchPushDeviceDetailsRawRequest("architecto") {{
                requestBody = "magnam".getBytes();
                xAblyVersion = "et";
                format = ResponseFormatEnum.MSGPACK;
            }};            

            PatchPushDeviceDetailsRawResponse res = sdk.push.patchPushDeviceDetailsRaw(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishPushNotificationToDevicesForm

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded;
import org.openapis.openapi.models.operations.PublishPushNotificationToDevicesFormRequest;
import org.openapis.openapi.models.operations.PublishPushNotificationToDevicesFormResponse;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Push;
import org.openapis.openapi.models.shared.PushApns;
import org.openapis.openapi.models.shared.PushFcm;
import org.openapis.openapi.models.shared.PushWeb;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ullam", "provident") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PublishPushNotificationToDevicesFormRequest req = new PublishPushNotificationToDevicesFormRequest() {{
                requestBody = new PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded(                new Recipient() {{
                                    clientId = "quos";
                                    deviceId = "sint";
                                    deviceToken = "accusantium";
                                    registrationToken = "mollitia";
                                    transportType = RecipientTransportTypeEnum.GCM;
                                }};) {{
                    push = new Push() {{
                        apns = new PushApns() {{
                            notification = new Notification() {{
                                body = "mollitia";
                                collapseKey = "ad";
                                icon = "eum";
                                sound = "dolor";
                                title = "Dr.";
                            }};;
                        }};;
                        data = "odit";
                        fcm = new PushFcm() {{
                            notification = new Notification() {{
                                body = "nemo";
                                collapseKey = "quasi";
                                icon = "iure";
                                sound = "doloribus";
                                title = "Dr.";
                            }};;
                        }};;
                        notification = new Notification() {{
                            body = "eius";
                            collapseKey = "maxime";
                            icon = "deleniti";
                            sound = "facilis";
                            title = "Ms.";
                        }};;
                        web = new PushWeb() {{
                            notification = new Notification() {{
                                body = "architecto";
                                collapseKey = "architecto";
                                icon = "repudiandae";
                                sound = "ullam";
                                title = "Miss";
                            }};;
                        }};;
                    }};;
                }};;
                xAblyVersion = "nihil";
                format = ResponseFormatEnum.HTML;
            }};            

            PublishPushNotificationToDevicesFormResponse res = sdk.push.publishPushNotificationToDevicesForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishPushNotificationToDevicesJson

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishPushNotificationToDevicesApplicationJSON;
import org.openapis.openapi.models.operations.PublishPushNotificationToDevicesJsonRequest;
import org.openapis.openapi.models.operations.PublishPushNotificationToDevicesJsonResponse;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Push;
import org.openapis.openapi.models.shared.PushApns;
import org.openapis.openapi.models.shared.PushFcm;
import org.openapis.openapi.models.shared.PushWeb;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quibusdam", "sed") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PublishPushNotificationToDevicesJsonRequest req = new PublishPushNotificationToDevicesJsonRequest() {{
                requestBody = new PublishPushNotificationToDevicesApplicationJSON(                new Recipient() {{
                                    clientId = "saepe";
                                    deviceId = "pariatur";
                                    deviceToken = "accusantium";
                                    registrationToken = "consequuntur";
                                    transportType = RecipientTransportTypeEnum.FCM;
                                }};) {{
                    push = new Push() {{
                        apns = new PushApns() {{
                            notification = new Notification() {{
                                body = "natus";
                                collapseKey = "magni";
                                icon = "sunt";
                                sound = "quo";
                                title = "Dr.";
                            }};;
                        }};;
                        data = "pariatur";
                        fcm = new PushFcm() {{
                            notification = new Notification() {{
                                body = "maxime";
                                collapseKey = "ea";
                                icon = "excepturi";
                                sound = "odit";
                                title = "Ms.";
                            }};;
                        }};;
                        notification = new Notification() {{
                            body = "accusantium";
                            collapseKey = "ab";
                            icon = "maiores";
                            sound = "quidem";
                            title = "Mrs.";
                        }};;
                        web = new PushWeb() {{
                            notification = new Notification() {{
                                body = "voluptate";
                                collapseKey = "autem";
                                icon = "nam";
                                sound = "eaque";
                                title = "Dr.";
                            }};;
                        }};;
                    }};;
                }};;
                xAblyVersion = "nemo";
                format = ResponseFormatEnum.HTML;
            }};            

            PublishPushNotificationToDevicesJsonResponse res = sdk.push.publishPushNotificationToDevicesJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishPushNotificationToDevicesRaw

A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishPushNotificationToDevicesApplicationXMsgpack;
import org.openapis.openapi.models.operations.PublishPushNotificationToDevicesRawRequest;
import org.openapis.openapi.models.operations.PublishPushNotificationToDevicesRawResponse;
import org.openapis.openapi.models.shared.Notification;
import org.openapis.openapi.models.shared.Push;
import org.openapis.openapi.models.shared.PushApns;
import org.openapis.openapi.models.shared.PushFcm;
import org.openapis.openapi.models.shared.PushWeb;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("perferendis", "fugiat") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PublishPushNotificationToDevicesRawRequest req = new PublishPushNotificationToDevicesRawRequest() {{
                requestBody = "amet".getBytes();
                xAblyVersion = "aut";
                format = ResponseFormatEnum.HTML;
            }};            

            PublishPushNotificationToDevicesRawResponse res = sdk.push.publishPushNotificationToDevicesRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPushDeviceDetailsForm

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPushDeviceDetailsFormRequest;
import org.openapis.openapi.models.operations.PutPushDeviceDetailsFormResponse;
import org.openapis.openapi.models.shared.DeviceDetailsFormFactorEnum;
import org.openapis.openapi.models.shared.DeviceDetailsInput;
import org.openapis.openapi.models.shared.DeviceDetailsPlatformEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corporis", "hic") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PutPushDeviceDetailsFormRequest req = new PutPushDeviceDetailsFormRequest("libero") {{
                deviceDetailsInput = new DeviceDetailsInput() {{
                    clientId = "nobis";
                    deviceSecret = "dolores";
                    formFactor = DeviceDetailsFormFactorEnum.DESKTOP;
                    id = "87053202-c73d-45fe-9b90-c28909b3fe49";
                    metadata = new java.util.HashMap<String, Object>() {{
                        put("deleniti", "pariatur");
                        put("provident", "nobis");
                        put("libero", "delectus");
                    }};
                    platform = DeviceDetailsPlatformEnum.IOS;
                    pushRecipient = new Recipient() {{
                        clientId = "quos";
                        deviceId = "aliquid";
                        deviceToken = "dolorem";
                        registrationToken = "dolorem";
                        transportType = RecipientTransportTypeEnum.APNS;
                    }};;
                }};;
                xAblyVersion = "qui";
                format = ResponseFormatEnum.JSON;
            }};            

            PutPushDeviceDetailsFormResponse res = sdk.push.putPushDeviceDetailsForm(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPushDeviceDetailsJson

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPushDeviceDetailsJsonRequest;
import org.openapis.openapi.models.operations.PutPushDeviceDetailsJsonResponse;
import org.openapis.openapi.models.shared.DeviceDetailsFormFactorEnum;
import org.openapis.openapi.models.shared.DeviceDetailsInput;
import org.openapis.openapi.models.shared.DeviceDetailsPlatformEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("hic", "excepturi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PutPushDeviceDetailsJsonRequest req = new PutPushDeviceDetailsJsonRequest("cum") {{
                deviceDetailsInput = new DeviceDetailsInput() {{
                    clientId = "voluptate";
                    deviceSecret = "dignissimos";
                    formFactor = DeviceDetailsFormFactorEnum.EMBEDDED;
                    id = "3a410067-4ebf-4692-80d1-ba77a89ebf73";
                    metadata = new java.util.HashMap<String, Object>() {{
                        put("id", "saepe");
                        put("eius", "aspernatur");
                    }};
                    platform = DeviceDetailsPlatformEnum.IOS;
                    pushRecipient = new Recipient() {{
                        clientId = "amet";
                        deviceId = "optio";
                        deviceToken = "accusamus";
                        registrationToken = "ad";
                        transportType = RecipientTransportTypeEnum.GCM;
                    }};;
                }};;
                xAblyVersion = "suscipit";
                format = ResponseFormatEnum.MSGPACK;
            }};            

            PutPushDeviceDetailsJsonResponse res = sdk.push.putPushDeviceDetailsJson(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPushDeviceDetailsRaw

Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPushDeviceDetailsRawRequest;
import org.openapis.openapi.models.operations.PutPushDeviceDetailsRawResponse;
import org.openapis.openapi.models.shared.DeviceDetailsFormFactorEnum;
import org.openapis.openapi.models.shared.DeviceDetailsInput;
import org.openapis.openapi.models.shared.DeviceDetailsPlatformEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("provident", "minima") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PutPushDeviceDetailsRawRequest req = new PutPushDeviceDetailsRawRequest("repellendus") {{
                requestBody = "totam".getBytes();
                xAblyVersion = "similique";
                format = ResponseFormatEnum.JSON;
            }};            

            PutPushDeviceDetailsRawResponse res = sdk.push.putPushDeviceDetailsRaw(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerPushDeviceJson

Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterPushDeviceJsonRequest;
import org.openapis.openapi.models.operations.RegisterPushDeviceJsonResponse;
import org.openapis.openapi.models.shared.DeviceDetailsFormFactorEnum;
import org.openapis.openapi.models.shared.DeviceDetailsInput;
import org.openapis.openapi.models.shared.DeviceDetailsPlatformEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("at", "quaerat") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RegisterPushDeviceJsonRequest req = new RegisterPushDeviceJsonRequest() {{
                deviceDetailsInput = new DeviceDetailsInput() {{
                    clientId = "tempora";
                    deviceSecret = "vel";
                    formFactor = DeviceDetailsFormFactorEnum.CAR;
                    id = "e2af7a73-cf3b-4e45-bf87-0b326b5a7342";
                    metadata = new java.util.HashMap<String, Object>() {{
                        put("maxime", "pariatur");
                        put("soluta", "dicta");
                        put("laborum", "totam");
                    }};
                    platform = DeviceDetailsPlatformEnum.IOS;
                    pushRecipient = new Recipient() {{
                        clientId = "aspernatur";
                        deviceId = "dolores";
                        deviceToken = "distinctio";
                        registrationToken = "facilis";
                        transportType = RecipientTransportTypeEnum.FCM;
                    }};;
                }};;
                xAblyVersion = "quam";
                format = ResponseFormatEnum.MSGPACK;
            }};            

            RegisterPushDeviceJsonResponse res = sdk.push.registerPushDeviceJson(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerPushDeviceRaw

Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterPushDeviceRawRequest;
import org.openapis.openapi.models.operations.RegisterPushDeviceRawResponse;
import org.openapis.openapi.models.shared.DeviceDetailsFormFactorEnum;
import org.openapis.openapi.models.shared.DeviceDetailsInput;
import org.openapis.openapi.models.shared.DeviceDetailsPlatformEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientTransportTypeEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("temporibus", "qui") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RegisterPushDeviceRawRequest req = new RegisterPushDeviceRawRequest() {{
                requestBody = "neque".getBytes();
                xAblyVersion = "fugit";
                format = ResponseFormatEnum.JSON;
            }};            

            RegisterPushDeviceRawResponse res = sdk.push.registerPushDeviceRaw(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribePushDeviceToChannelForm

Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelFormRequest;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelFormResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("odio", "sunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SubscribePushDeviceToChannelFormRequest req = new SubscribePushDeviceToChannelFormRequest() {{
                requestBody = new SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1() {{
                    channel = "nam";
                    deviceId = "hic";
                }};;
                xAblyVersion = "voluptatem";
                format = ResponseFormatEnum.HTML;
            }};            

            SubscribePushDeviceToChannelFormResponse res = sdk.push.subscribePushDeviceToChannelForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribePushDeviceToChannelJson

Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelApplicationJSON1;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelApplicationJSON2;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelJsonRequest;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelJsonResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("soluta", "nobis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SubscribePushDeviceToChannelJsonRequest req = new SubscribePushDeviceToChannelJsonRequest() {{
                requestBody = new SubscribePushDeviceToChannelApplicationJSON1() {{
                    channel = "saepe";
                    deviceId = "ipsum";
                }};;
                xAblyVersion = "veritatis";
                format = ResponseFormatEnum.MSGPACK;
            }};            

            SubscribePushDeviceToChannelJsonResponse res = sdk.push.subscribePushDeviceToChannelJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribePushDeviceToChannelRaw

Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelApplicationXMsgpack1;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelApplicationXMsgpack2;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelRawRequest;
import org.openapis.openapi.models.operations.SubscribePushDeviceToChannelRawResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quos", "tempore") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SubscribePushDeviceToChannelRawRequest req = new SubscribePushDeviceToChannelRawRequest() {{
                requestBody = "cupiditate".getBytes();
                xAblyVersion = "aperiam";
                format = ResponseFormatEnum.HTML;
            }};            

            SubscribePushDeviceToChannelRawResponse res = sdk.push.subscribePushDeviceToChannelRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unregisterAllPushDevices

Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnregisterAllPushDevicesRequest;
import org.openapis.openapi.models.operations.UnregisterAllPushDevicesResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolorem", "dolore") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UnregisterAllPushDevicesRequest req = new UnregisterAllPushDevicesRequest() {{
                xAblyVersion = "labore";
                clientId = "adipisci";
                deviceId = "dolorum";
                format = ResponseFormatEnum.JSON;
            }};            

            UnregisterAllPushDevicesResponse res = sdk.push.unregisterAllPushDevices(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unregisterPushDevice

Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnregisterPushDeviceRequest;
import org.openapis.openapi.models.operations.UnregisterPushDeviceResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quae", "aut") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UnregisterPushDeviceRequest req = new UnregisterPushDeviceRequest("quas") {{
                xAblyVersion = "itaque";
                format = ResponseFormatEnum.JSON;
            }};            

            UnregisterPushDeviceResponse res = sdk.push.unregisterPushDevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePushDeviceDetails

Gets an updated device details object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePushDeviceDetailsRequest;
import org.openapis.openapi.models.operations.UpdatePushDeviceDetailsResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("est", "repellendus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdatePushDeviceDetailsRequest req = new UpdatePushDeviceDetailsRequest("porro") {{
                xAblyVersion = "doloribus";
                format = ResponseFormatEnum.JSONP;
            }};            

            UpdatePushDeviceDetailsResponse res = sdk.push.updatePushDeviceDetails(req);

            if (res.deviceDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
