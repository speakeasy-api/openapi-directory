# marketplacesOrdersV3Order

### Available Operations

* [changeOrderV3](#changeorderv3) - Change your marketplace Order Information (accept, ship, etc.)
* [clearMerchantOrderInfoV3](#clearmerchantorderinfov3) - Clear an Order's merchant information
* [getOrderChangeReportingV3](#getorderchangereportingv3) - Get the order change reporting
* [getOrderHistoryV3](#getorderhistoryv3) - Get an Order's harvest and change history
* [getOrderV3](#getorderv3) - Get full Order and Order Item(s) properties
* [harvestAccount](#harvestaccount) - Send harvest request for an Account
* [harvestOrderV3](#harvestorderv3) - Send harvest request for a single Order
* [headOrderV3](#headorderv3) - Get the meta information about the order (ETag, Last-Modified)
* [setMerchantOrderInfoV3](#setmerchantorderinfov3) - Set an Order's merchant information

## changeOrderV3

Change your marketplace Order Information (accept, ship, etc.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeOrderV3Request;
import org.openapis.openapi.models.operations.ChangeOrderV3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeOrderV3Request req = new ChangeOrderV3Request(528940, "845f0597-a60f-4f2a-94a3-1e94764a3e86", "nemo", "recusandae", "esse") {{
                requestBody = new java.util.HashMap<String, String>() {{
                    put("quis", "eum");
                    put("reiciendis", "provident");
                    put("aspernatur", "ullam");
                }};
                testMode = false;
            }};            

            ChangeOrderV3Response res = sdk.marketplacesOrdersV3Order.changeOrderV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clearMerchantOrderInfoV3

Clear an Order's merchant information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearMerchantOrderInfoV3Request;
import org.openapis.openapi.models.operations.ClearMerchantOrderInfoV3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClearMerchantOrderInfoV3Request req = new ClearMerchantOrderInfoV3Request(96804, "a5a9da66-0ff5-47bf-aad4-f9efc1b4512c", "quae") {{
                testMode = false;
            }};            

            ClearMerchantOrderInfoV3Response res = sdk.marketplacesOrdersV3Order.clearMerchantOrderInfoV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderChangeReportingV3

This operation will help you to know the status of your order change operation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderChangeReportingV3Request;
import org.openapis.openapi.models.operations.GetOrderChangeReportingV3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderChangeReportingV3Request req = new GetOrderChangeReportingV3Request(21688, "32648dc2-f615-4199-abfd-0e9fe6c632ca", "ratione", "animi");            

            GetOrderChangeReportingV3Response res = sdk.marketplacesOrdersV3Order.getOrderChangeReportingV3(req);

            if (res.changeOrderReporting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderHistoryV3

Get an Order's harvest and change history

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderHistoryV3Request;
import org.openapis.openapi.models.operations.GetOrderHistoryV3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderHistoryV3Request req = new GetOrderHistoryV3Request(898760, "d0117996-312f-4de0-8771-778ff61d0174", "esse");            

            GetOrderHistoryV3Response res = sdk.marketplacesOrdersV3Order.getOrderHistoryV3(req);

            if (res.orderHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderV3

Get full Order and Order Item(s) properties

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderV3Request;
import org.openapis.openapi.models.operations.GetOrderV3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderV3Request req = new GetOrderV3Request(403793, "360a15db-6a66-4065-9a1a-deaab5851d6c", "ex") {{
                ifNoneMatch = "ut";
            }};            

            GetOrderV3Response res = sdk.marketplacesOrdersV3Order.getOrderV3(req);

            if (res.orderWithLinks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## harvestAccount

Send harvest request for an Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HarvestAccountRequest;
import org.openapis.openapi.models.operations.HarvestAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HarvestAccountRequest req = new HarvestAccountRequest(321043, "expedita") {{
                beezUPOrderId = "voluptatem";
                marketplaceOrderId = "molestias";
            }};            

            HarvestAccountResponse res = sdk.marketplacesOrdersV3Order.harvestAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## harvestOrderV3

Send harvest request for a single Order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HarvestOrderV3Request;
import org.openapis.openapi.models.operations.HarvestOrderV3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HarvestOrderV3Request req = new HarvestOrderV3Request(737254, "61891baa-0fe1-4ade-808e-6f8c5f350d8c", "quibusdam");            

            HarvestOrderV3Response res = sdk.marketplacesOrdersV3Order.harvestOrderV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## headOrderV3

The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
This could be useful


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadOrderV3Request;
import org.openapis.openapi.models.operations.HeadOrderV3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadOrderV3Request req = new HeadOrderV3Request(720528, "5a341814-3010-4421-813d-5208ece7e253", "expedita") {{
                ifNoneMatch = "eum";
            }};            

            HeadOrderV3Response res = sdk.marketplacesOrdersV3Order.headOrderV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setMerchantOrderInfoV3

Set an Order's merchant information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetMerchantOrderInfoV3Request;
import org.openapis.openapi.models.operations.SetMerchantOrderInfoV3Response;
import org.openapis.openapi.models.shared.SetMerchantOrderInfoRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetMerchantOrderInfoV3Request req = new SetMerchantOrderInfoV3Request(426943, "8451c6c6-e205-4e16-9eab-3fec9578a645", "quos",                 new SetMerchantOrderInfoRequest("Prestashop", "123.0.1", "MyOrderMerchantId");) {{
                testMode = false;
            }};            

            SetMerchantOrderInfoV3Response res = sdk.marketplacesOrdersV3Order.setMerchantOrderInfoV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
