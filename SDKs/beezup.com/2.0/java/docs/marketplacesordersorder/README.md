# marketplacesOrdersOrder

### Available Operations

* [~~changeOrder~~](#changeorder) - [DEPRECATED] Change your marketplace Order Information (accept, ship, etc.) :warning: **Deprecated**
* [~~clearMerchantOrderInfo~~](#clearmerchantorderinfo) - [DEPRECATED] Clear an Order's merchant information :warning: **Deprecated**
* [~~getOrder~~](#getorder) - [DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties :warning: **Deprecated**
* [~~getOrderHistory~~](#getorderhistory) - [DEPRECATED] Get an Order's harvest and change history :warning: **Deprecated**
* [~~harvestOrder~~](#harvestorder) - [DEPRECATED] Send harvest request for a single Order :warning: **Deprecated**
* [~~headOrder~~](#headorder) - [DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified) :warning: **Deprecated**
* [~~setMerchantOrderInfo~~](#setmerchantorderinfo) - [DEPRECATED] Set an Order's merchant information :warning: **Deprecated**

## ~~changeOrder~~

[DEPRECATED] Change your marketplace Order Information (accept, ship, etc.)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeOrderRequest;
import org.openapis.openapi.models.operations.ChangeOrderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeOrderRequest req = new ChangeOrderRequest("fuga", 662505, "63aae8d6-7864-4dbb-a75f-d5e60b375ed4", "doloribus", "suscipit", "reiciendis") {{
                requestBody = new java.util.HashMap<String, String>() {{
                    put("saepe", "necessitatibus");
                    put("dolore", "sunt");
                    put("asperiores", "adipisci");
                }};
                testMode = false;
            }};            

            ChangeOrderResponse res = sdk.marketplacesOrdersOrder.changeOrder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~clearMerchantOrderInfo~~

[DEPRECATED] Clear an Order's merchant information

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearMerchantOrderInfoRequest;
import org.openapis.openapi.models.operations.ClearMerchantOrderInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClearMerchantOrderInfoRequest req = new ClearMerchantOrderInfoRequest(249420, "317fe35b-60eb-41ea-8265-55ba3c28744e", "temporibus");            

            ClearMerchantOrderInfoResponse res = sdk.marketplacesOrdersOrder.clearMerchantOrderInfo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getOrder~~

DEPRECATED - Use /orders/v3 instead

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderRequest;
import org.openapis.openapi.models.operations.GetOrderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderRequest req = new GetOrderRequest(351870, "3b88f3a8-d8f5-4c0b-af2f-b7b194a276b2", "voluptas") {{
                ifNoneMatch = "unde";
            }};            

            GetOrderResponse res = sdk.marketplacesOrdersOrder.getOrder(req);

            if (res.order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getOrderHistory~~

[DEPRECATED] Get an Order's harvest and change history

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderHistoryRequest;
import org.openapis.openapi.models.operations.GetOrderHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderHistoryRequest req = new GetOrderHistoryRequest(100032, "6fe1f08f-4294-4e36-98f4-47f603e8b445", "debitis") {{
                ifNoneMatch = "rem";
            }};            

            GetOrderHistoryResponse res = sdk.marketplacesOrdersOrder.getOrderHistory(req);

            if (res.orderHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~harvestOrder~~

[DEPRECATED] Send harvest request for a single Order

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HarvestOrderRequest;
import org.openapis.openapi.models.operations.HarvestOrderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HarvestOrderRequest req = new HarvestOrderRequest(26522, "ca55efd2-0e45-47e1-858b-6a89fbe3a5aa", "corrupti");            

            HarvestOrderResponse res = sdk.marketplacesOrdersOrder.harvestOrder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~headOrder~~

DEPRECATED - Use /orders/v3 instead
The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
This could be useful


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadOrderRequest;
import org.openapis.openapi.models.operations.HeadOrderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadOrderRequest req = new HeadOrderRequest(879235, "4824d0ab-4075-4088-a518-62065e904f3b", "dicta") {{
                ifNoneMatch = "architecto";
            }};            

            HeadOrderResponse res = sdk.marketplacesOrdersOrder.headOrder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~setMerchantOrderInfo~~

[DEPRECATED] Set an Order's merchant information

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetMerchantOrderInfoRequest;
import org.openapis.openapi.models.operations.SetMerchantOrderInfoResponse;
import org.openapis.openapi.models.shared.SetMerchantOrderInfoRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetMerchantOrderInfoRequest req = new SetMerchantOrderInfoRequest(577140, "4b8abf60-3a79-4f9d-be0a-b7da8a50ce18", "reprehenderit",                 new SetMerchantOrderInfoRequest("Prestashop", "123.0.1", "MyOrderMerchantId"););            

            SetMerchantOrderInfoResponse res = sdk.marketplacesOrdersOrder.setMerchantOrderInfo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
