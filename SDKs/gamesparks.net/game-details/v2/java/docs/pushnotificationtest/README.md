# pushNotificationTest

## Overview

Push Notification Test Controller

### Available Operations

* [testPushAmazonNotificationsUsingPOST](#testpushamazonnotificationsusingpost) - testPushAmazonNotifications
* [testPushAppleDevNotificationsUsingPOST](#testpushappledevnotificationsusingpost) - testPushAppleDevNotifications
* [testPushAppleProdNotificationsUsingPOST](#testpushappleprodnotificationsusingpost) - testPushAppleProdNotifications
* [testPushGoogleNotificationsUsingPOST](#testpushgooglenotificationsusingpost) - testPushGoogleNotifications
* [testViberIntegrationNotificationsUsingPOST](#testviberintegrationnotificationsusingpost) - testViberIntegrationNotifications
* [testViberProductionNotificationsUsingPOST](#testviberproductionnotificationsusingpost) - testViberProductionNotifications
* [testWindows8NotificationsUsingPOST](#testwindows8notificationsusingpost) - testWindows8Notifications
* [testWindowsPhone8NotificationsUsingPOST](#testwindowsphone8notificationsusingpost) - testWindowsPhone8Notifications

## testPushAmazonNotificationsUsingPOST

testPushAmazonNotifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestPushAmazonNotificationsUsingPOSTRequest;
import org.openapis.openapi.models.operations.TestPushAmazonNotificationsUsingPOSTResponse;
import org.openapis.openapi.models.shared.PushNotificationTestModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestPushAmazonNotificationsUsingPOSTRequest req = new TestPushAmazonNotificationsUsingPOSTRequest(                new PushNotificationTestModel() {{
                                customJson = "necessitatibus";
                                messageId = "sint";
                                pushId = "officia";
                                subtitle = "dolor";
                                summary = "debitis";
                                title = "Dr.";
                            }};, "dolorum");            

            TestPushAmazonNotificationsUsingPOSTResponse res = sdk.pushNotificationTest.testPushAmazonNotificationsUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testPushAppleDevNotificationsUsingPOST

testPushAppleDevNotifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestPushAppleDevNotificationsUsingPOSTRequest;
import org.openapis.openapi.models.operations.TestPushAppleDevNotificationsUsingPOSTResponse;
import org.openapis.openapi.models.shared.PushNotificationTestModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestPushAppleDevNotificationsUsingPOSTRequest req = new TestPushAppleDevNotificationsUsingPOSTRequest(                new PushNotificationTestModel() {{
                                customJson = "in";
                                messageId = "in";
                                pushId = "illum";
                                subtitle = "maiores";
                                summary = "rerum";
                                title = "Mr.";
                            }};, "magnam");            

            TestPushAppleDevNotificationsUsingPOSTResponse res = sdk.pushNotificationTest.testPushAppleDevNotificationsUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testPushAppleProdNotificationsUsingPOST

testPushAppleProdNotifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestPushAppleProdNotificationsUsingPOSTRequest;
import org.openapis.openapi.models.operations.TestPushAppleProdNotificationsUsingPOSTResponse;
import org.openapis.openapi.models.shared.PushNotificationTestModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestPushAppleProdNotificationsUsingPOSTRequest req = new TestPushAppleProdNotificationsUsingPOSTRequest(                new PushNotificationTestModel() {{
                                customJson = "cumque";
                                messageId = "facere";
                                pushId = "ea";
                                subtitle = "aliquid";
                                summary = "laborum";
                                title = "Dr.";
                            }};, "non");            

            TestPushAppleProdNotificationsUsingPOSTResponse res = sdk.pushNotificationTest.testPushAppleProdNotificationsUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testPushGoogleNotificationsUsingPOST

testPushGoogleNotifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestPushGoogleNotificationsUsingPOSTRequest;
import org.openapis.openapi.models.operations.TestPushGoogleNotificationsUsingPOSTResponse;
import org.openapis.openapi.models.shared.PushNotificationTestModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestPushGoogleNotificationsUsingPOSTRequest req = new TestPushGoogleNotificationsUsingPOSTRequest(                new PushNotificationTestModel() {{
                                customJson = "occaecati";
                                messageId = "enim";
                                pushId = "accusamus";
                                subtitle = "delectus";
                                summary = "quidem";
                                title = "Ms.";
                            }};, "nam");            

            TestPushGoogleNotificationsUsingPOSTResponse res = sdk.pushNotificationTest.testPushGoogleNotificationsUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testViberIntegrationNotificationsUsingPOST

testViberIntegrationNotifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestViberIntegrationNotificationsUsingPOSTRequest;
import org.openapis.openapi.models.operations.TestViberIntegrationNotificationsUsingPOSTResponse;
import org.openapis.openapi.models.shared.PushNotificationTestModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestViberIntegrationNotificationsUsingPOSTRequest req = new TestViberIntegrationNotificationsUsingPOSTRequest(                new PushNotificationTestModel() {{
                                customJson = "id";
                                messageId = "blanditiis";
                                pushId = "deleniti";
                                subtitle = "sapiente";
                                summary = "amet";
                                title = "Miss";
                            }};, "nisi");            

            TestViberIntegrationNotificationsUsingPOSTResponse res = sdk.pushNotificationTest.testViberIntegrationNotificationsUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testViberProductionNotificationsUsingPOST

testViberProductionNotifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestViberProductionNotificationsUsingPOSTRequest;
import org.openapis.openapi.models.operations.TestViberProductionNotificationsUsingPOSTResponse;
import org.openapis.openapi.models.shared.PushNotificationTestModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestViberProductionNotificationsUsingPOSTRequest req = new TestViberProductionNotificationsUsingPOSTRequest(                new PushNotificationTestModel() {{
                                customJson = "vel";
                                messageId = "natus";
                                pushId = "omnis";
                                subtitle = "molestiae";
                                summary = "perferendis";
                                title = "Ms.";
                            }};, "magnam");            

            TestViberProductionNotificationsUsingPOSTResponse res = sdk.pushNotificationTest.testViberProductionNotificationsUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testWindows8NotificationsUsingPOST

testWindows8Notifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestWindows8NotificationsUsingPOSTRequest;
import org.openapis.openapi.models.operations.TestWindows8NotificationsUsingPOSTResponse;
import org.openapis.openapi.models.shared.PushNotificationTestModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestWindows8NotificationsUsingPOSTRequest req = new TestWindows8NotificationsUsingPOSTRequest(                new PushNotificationTestModel() {{
                                customJson = "distinctio";
                                messageId = "id";
                                pushId = "labore";
                                subtitle = "labore";
                                summary = "suscipit";
                                title = "Miss";
                            }};, "nobis");            

            TestWindows8NotificationsUsingPOSTResponse res = sdk.pushNotificationTest.testWindows8NotificationsUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testWindowsPhone8NotificationsUsingPOST

testWindowsPhone8Notifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestWindowsPhone8NotificationsUsingPOSTRequest;
import org.openapis.openapi.models.operations.TestWindowsPhone8NotificationsUsingPOSTResponse;
import org.openapis.openapi.models.shared.PushNotificationTestModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestWindowsPhone8NotificationsUsingPOSTRequest req = new TestWindowsPhone8NotificationsUsingPOSTRequest(                new PushNotificationTestModel() {{
                                customJson = "eum";
                                messageId = "vero";
                                pushId = "aspernatur";
                                subtitle = "architecto";
                                summary = "magnam";
                                title = "Mr.";
                            }};, "excepturi");            

            TestWindowsPhone8NotificationsUsingPOSTResponse res = sdk.pushNotificationTest.testWindowsPhone8NotificationsUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
