# subscriptions

## Overview

Subscribe to be alerted when events occur. For example receive email notification when a contribution is flagged.

### Available Operations

* [deleteSubscriptionsId](#deletesubscriptionsid) - Delete a subscription.
* [getSubscriptionTypes](#getsubscriptiontypes) - Subscription types
* [getSubscriptions](#getsubscriptions) - List subscriptions for the authorised user.

## deleteSubscriptionsId

Delete a subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriptionsIdRequest;
import org.openapis.openapi.models.operations.DeleteSubscriptionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubscriptionsIdRequest req = new DeleteSubscriptionsIdRequest("a");            

            DeleteSubscriptionsIdResponse res = sdk.subscriptions.deleteSubscriptionsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionTypes

List available subscription types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubscriptionTypesResponse res = sdk.subscriptions.getSubscriptionTypes();

            if (res.subscriptionTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptions

List subscriptions for the authorised user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionsResponse;
import org.openapis.openapi.models.shared.SubscriptionSubmission;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubscriptionSubmission req = new SubscriptionSubmission(false,                 new String[]{{
                                add("ullam"),
                                add("unde"),
                            }}) {{
                assignment = "necessitatibus";
                email = "Okey_Hintz@yahoo.com";
                includeThumbenail = false;
                slackChannel = "error";
            }};            

            GetSubscriptionsResponse res = sdk.subscriptions.getSubscriptions(req);

            if (res.subscriptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
