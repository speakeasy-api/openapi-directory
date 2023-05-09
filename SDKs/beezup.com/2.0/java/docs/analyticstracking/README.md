# analyticsTracking

### Available Operations

* [getStoreTrackedClicks](#getstoretrackedclicks) - Get the latest tracked clicks
* [getStoreTrackedExternalOrders](#getstoretrackedexternalorders) - Get the latest tracked external orders
* [getStoreTrackedOrders](#getstoretrackedorders) - Get the latest tracked orders
* [getStoreTrackingStatus](#getstoretrackingstatus) - Get the synchronization status of clicks and orders of a store
* [getTrackingStatus](#gettrackingstatus) - Get the global synchronization status of clicks and orders

## getStoreTrackedClicks

Get the latest tracked clicks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreTrackedClicksRequest;
import org.openapis.openapi.models.operations.GetStoreTrackedClicksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreTrackedClicksRequest req = new GetStoreTrackedClicksRequest("quasi") {{
                count = 921158L;
            }};            

            GetStoreTrackedClicksResponse res = sdk.analyticsTracking.getStoreTrackedClicks(req);

            if (res.trackedClicks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoreTrackedExternalOrders

Get the latest tracked external orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreTrackedExternalOrdersRequest;
import org.openapis.openapi.models.operations.GetStoreTrackedExternalOrdersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreTrackedExternalOrdersRequest req = new GetStoreTrackedExternalOrdersRequest("sint") {{
                count = 83112L;
            }};            

            GetStoreTrackedExternalOrdersResponse res = sdk.analyticsTracking.getStoreTrackedExternalOrders(req);

            if (res.trackedExternalOrders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoreTrackedOrders

Get the latest tracked orders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreTrackedOrdersRequest;
import org.openapis.openapi.models.operations.GetStoreTrackedOrdersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreTrackedOrdersRequest req = new GetStoreTrackedOrdersRequest("itaque") {{
                count = 277718L;
            }};            

            GetStoreTrackedOrdersResponse res = sdk.analyticsTracking.getStoreTrackedOrders(req);

            if (res.trackedOrders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoreTrackingStatus

Clicks and orders are eventually consistent. \
This operation gets the current state of projections for a store.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreTrackingStatusRequest;
import org.openapis.openapi.models.operations.GetStoreTrackingStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreTrackingStatusRequest req = new GetStoreTrackingStatusRequest("enim");            

            GetStoreTrackingStatusResponse res = sdk.analyticsTracking.getStoreTrackingStatus(req);

            if (res.storeTrackingStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrackingStatus

Clicks and orders are eventually consistent. \
This operation gets the current global state of projections.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrackingStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrackingStatusResponse res = sdk.analyticsTracking.getTrackingStatus();

            if (res.trackingStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
