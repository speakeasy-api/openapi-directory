# marketplacesOrdersGlobal

### Available Operations

* [~~getMarketplaceAccountsSynchronization~~](#getmarketplaceaccountssynchronization) - [DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts :warning: **Deprecated**
* [~~getOrderIndex~~](#getorderindex) - [DEPRECATED] Get all actions you can do on the order API :warning: **Deprecated**
* [~~harvestAll~~](#harvestall) - [DEPRECATED] Send harvest request to all your marketplaces :warning: **Deprecated**

## ~~getMarketplaceAccountsSynchronization~~

Use /orders/v3

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMarketplaceAccountsSynchronizationRequest;
import org.openapis.openapi.models.operations.GetMarketplaceAccountsSynchronizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMarketplaceAccountsSynchronizationRequest req = new GetMarketplaceAccountsSynchronizationRequest() {{
                ifNoneMatch = "velit";
                storeId = "voluptatibus";
            }};            

            GetMarketplaceAccountsSynchronizationResponse res = sdk.marketplacesOrdersGlobal.getMarketplaceAccountsSynchronization(req);

            if (res.accountSynchronizationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getOrderIndex~~

[DEPRECATED] Get all actions you can do on the order API

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderIndexRequest;
import org.openapis.openapi.models.operations.GetOrderIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderIndexRequest req = new GetOrderIndexRequest() {{
                ifNoneMatch = "voluptas";
            }};            

            GetOrderIndexResponse res = sdk.marketplacesOrdersGlobal.getOrderIndex(req);

            if (res.orderIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~harvestAll~~

[DEPRECATED] Send harvest request to all your marketplaces

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HarvestAllRequest;
import org.openapis.openapi.models.operations.HarvestAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HarvestAllRequest req = new HarvestAllRequest() {{
                storeId = "asperiores";
            }};            

            HarvestAllResponse res = sdk.marketplacesOrdersGlobal.harvestAll(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
