# marketplacesOrdersBatches

### Available Operations

* [~~changeOrderList~~](#changeorderlist) - [DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call) :warning: **Deprecated**
* [~~clearMerchantOrderInfoList~~](#clearmerchantorderinfolist) - [DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call) :warning: **Deprecated**
* [~~setMerchantOrderInfoList~~](#setmerchantorderinfolist) - [DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call) :warning: **Deprecated**

## ~~changeOrderList~~

The purpose of this operation is to reduce the amount of request to the API. 
Max 100 items per call.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeOrderListRequest;
import org.openapis.openapi.models.operations.ChangeOrderListResponse;
import org.openapis.openapi.models.shared.ChangeOrderListRequest;
import org.openapis.openapi.models.shared.ChangeOrderListRequestItem;
import org.openapis.openapi.models.shared.OrderIdentifierWithETag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeOrderListRequest req = new ChangeOrderListRequest(                new ChangeOrderListRequest(                new org.openapis.openapi.models.shared.ChangeOrderListRequestItem[]{{
                                                add(new ChangeOrderListRequestItem(                new OrderIdentifierWithETag(1234, "00000000000000000000000000000000000000000000000", ""ca071a4580129f932a03971968ffef69"", "Amazon");) {{
                                                    changeOrderRequest = new java.util.HashMap<String, String>() {{
                                                        put("temporibus", "accusantium");
                                                        put("rem", "aut");
                                                        put("laudantium", "eum");
                                                    }};
                                                    order = new OrderIdentifierWithETag(1234, "00000000000000000000000000000000000000000000000", ""ca071a4580129f932a03971968ffef69"", "Amazon") {{
                                                        accountId = 1234;
                                                        beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                                        etag = ""ca071a4580129f932a03971968ffef69"";
                                                        marketplaceTechnicalCode = "Amazon";
                                                    }};
                                                }}),
                                            }});, "mollitia", "ab") {{
                testMode = false;
            }};            

            ChangeOrderListResponse res = sdk.marketplacesOrdersBatches.changeOrderList(req);

            if (res.batchOrderOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~clearMerchantOrderInfoList~~

The purpose of this operation is to reduce the amount of request to the API.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearMerchantOrderInfoListResponse;
import org.openapis.openapi.models.shared.ClearMerchantOrderInfoListRequest;
import org.openapis.openapi.models.shared.OrderIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ClearMerchantOrderInfoListRequest req = new ClearMerchantOrderInfoListRequest(                new org.openapis.openapi.models.shared.OrderIdentifier[]{{
                                add(new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon") {{
                                    accountId = 1234;
                                    beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                    marketplaceTechnicalCode = "Amazon";
                                }}),
                                add(new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon") {{
                                    accountId = 1234;
                                    beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                    marketplaceTechnicalCode = "Amazon";
                                }}),
                                add(new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon") {{
                                    accountId = 1234;
                                    beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                    marketplaceTechnicalCode = "Amazon";
                                }}),
                            }});            

            ClearMerchantOrderInfoListResponse res = sdk.marketplacesOrdersBatches.clearMerchantOrderInfoList(req);

            if (res.batchOrderOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~setMerchantOrderInfoList~~

The purpose of this operation is to reduce the amount of request to the API.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetMerchantOrderInfoListResponse;
import org.openapis.openapi.models.shared.SetMerchantOrderInfoListRequest;
import org.openapis.openapi.models.shared.SetMerchantOrderInfoListRequestItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SetMerchantOrderInfoListRequest req = new SetMerchantOrderInfoListRequest("Prestashop", "123.0.1",                 new org.openapis.openapi.models.shared.SetMerchantOrderInfoListRequestItem[]{{
                                add(new SetMerchantOrderInfoListRequestItem(1234, "00000000000000000000000000000000000000000000000", "Amazon", "MyOrderMerchantId") {{
                                    accountId = 1234;
                                    beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                    marketplaceTechnicalCode = "Amazon";
                                    orderMerchantOrderId = "MyOrderMerchantId";
                                }}),
                                add(new SetMerchantOrderInfoListRequestItem(1234, "00000000000000000000000000000000000000000000000", "Amazon", "MyOrderMerchantId") {{
                                    accountId = 1234;
                                    beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                    marketplaceTechnicalCode = "Amazon";
                                    orderMerchantOrderId = "MyOrderMerchantId";
                                }}),
                            }});            

            SetMerchantOrderInfoListResponse res = sdk.marketplacesOrdersBatches.setMerchantOrderInfoList(req);

            if (res.batchOrderOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
