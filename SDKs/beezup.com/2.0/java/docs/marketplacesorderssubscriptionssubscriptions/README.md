# marketplacesOrdersSubscriptionsSubscriptions

### Available Operations

* [activateSubscription](#activatesubscription) - Activate a subscription to the orders
* [createSubscription](#createsubscription) - Creates a subscription to the orders
* [deactivateSubscription](#deactivatesubscription) - Deactivate a subscription to the orders
* [deleteSubscription](#deletesubscription) - Delete a subscription to the orders
* [getSubscription](#getsubscription) - Get a subscription to the orders
* [getSubscriptionList](#getsubscriptionlist) - Get the subscription list
* [getSubscriptionPushReporting](#getsubscriptionpushreporting) - Get the push reporting related to this subscription
* [retryPushOrders](#retrypushorders) - Force retry push orders immediatly

## activateSubscription

At this moment, BeezUP will ensure that your callback url is respecting this specification: 
- https://api.beezup.com/swaggerhub/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/Verification

After that we will send you the orders related to your subscription, respecting this specification: 
- https://api.beezup.com/swaggerhub/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/PushOrders


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateSubscriptionRequest;
import org.openapis.openapi.models.operations.ActivateSubscriptionResponse;
import org.openapis.openapi.models.shared.ActivateSubscriptionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActivateSubscriptionRequest req = new ActivateSubscriptionRequest("asperiores") {{
                activateSubscriptionRequest = new ActivateSubscriptionRequest() {{
                    recoverBeginPeriodOrderLastModificationUtcDate = OffsetDateTime.parse("2022-03-27T08:02:14.031Z");
                    recoverEndPeriodOrderLastModificationUtcDate = OffsetDateTime.parse("2021-05-22T03:09:11.884Z");
                }};;
            }};            

            ActivateSubscriptionResponse res = sdk.marketplacesOrdersSubscriptionsSubscriptions.activateSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscription

Please take a look at this sequence diagram to understand the subscription process to follow [here](https://www.websequencediagrams.com/files/render?link=SBYbeIc8NGshk6ooCbmjoBLIMl4fIGO1xjJbPBQAglBo0n6BwEReh7NXQiPSjOTX)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateSubscriptionResponse;
import org.openapis.openapi.models.shared.CreateSubscriptionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSubscriptionRequest req = new CreateSubscriptionRequest(                new CreateSubscriptionRequest("MyApp", "1.0", "MySubscriptionName", "http://www.mydomain.com") {{
                                merchantEmailAlert = "paulsimon@mysupercompany.com";
                            }};, "et");            

            CreateSubscriptionResponse res = sdk.marketplacesOrdersSubscriptionsSubscriptions.createSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deactivateSubscription

Deactivate a subscription to the orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeactivateSubscriptionRequest;
import org.openapis.openapi.models.operations.DeactivateSubscriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeactivateSubscriptionRequest req = new DeactivateSubscriptionRequest("esse");            

            DeactivateSubscriptionResponse res = sdk.marketplacesOrdersSubscriptionsSubscriptions.deactivateSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubscription

Delete a subscription to the orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteSubscriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSubscriptionRequest req = new DeleteSubscriptionRequest("amet");            

            DeleteSubscriptionResponse res = sdk.marketplacesOrdersSubscriptionsSubscriptions.deleteSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscription

Get a subscription to the orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionRequest;
import org.openapis.openapi.models.operations.GetSubscriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubscriptionRequest req = new GetSubscriptionRequest("assumenda");            

            GetSubscriptionResponse res = sdk.marketplacesOrdersSubscriptionsSubscriptions.getSubscription(req);

            if (res.subscriptionIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionList

Get the subscription list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubscriptionListResponse res = sdk.marketplacesOrdersSubscriptionsSubscriptions.getSubscriptionList();

            if (res.subscriptionIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionPushReporting

Get the push reporting related to this subscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionPushReportingRequest;
import org.openapis.openapi.models.operations.GetSubscriptionPushReportingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubscriptionPushReportingRequest req = new GetSubscriptionPushReportingRequest("ea") {{
                pageNumber = 539118L;
                pageSize = 623295L;
            }};            

            GetSubscriptionPushReportingResponse res = sdk.marketplacesOrdersSubscriptionsSubscriptions.getSubscriptionPushReporting(req);

            if (res.subscriptionPushReportings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retryPushOrders

In case your subscription consumption is unavailable and your subscription is still active you can ask to retry immediatly to push orders instead of waiting the next scheduled retry date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetryPushOrdersRequest;
import org.openapis.openapi.models.operations.RetryPushOrdersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetryPushOrdersRequest req = new RetryPushOrdersRequest("officiis");            

            RetryPushOrdersResponse res = sdk.marketplacesOrdersSubscriptionsSubscriptions.retryPushOrders(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
