# marketplacesOrdersV3Batches

### Available Operations

* [changeOrderListV2](#changeorderlistv2) - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* [changeOrderListV3](#changeorderlistv3) - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* [clearMerchantOrderInfoListV3](#clearmerchantorderinfolistv3) - Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* [setMerchantOrderInfoListV3](#setmerchantorderinfolistv3) - Send a batch of operations to set an Order's merchant information  (max 100 items per call)

## changeOrderListV2

The purpose of this operation is to reduce the amount of request to the API. 
Max 100 items per call.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeOrderListV2Request;
import org.openapis.openapi.models.operations.ChangeOrderListV2Response;
import org.openapis.openapi.models.shared.ChangeOrderListRequestItemV2;
import org.openapis.openapi.models.shared.ChangeOrderListRequestV2;
import org.openapis.openapi.models.shared.OrderIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeOrderListV2Request req = new ChangeOrderListV2Request(                new ChangeOrderListRequestV2(                new org.openapis.openapi.models.shared.ChangeOrderListRequestItemV2[]{{
                                                add(new ChangeOrderListRequestItemV2(                new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon");) {{
                                                    changeOrderRequest = new java.util.HashMap<String, String>() {{
                                                        put("natus", "minima");
                                                        put("aspernatur", "ex");
                                                        put("maiores", "corrupti");
                                                        put("at", "error");
                                                    }};
                                                    order = new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon") {{
                                                        accountId = 1234;
                                                        beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                                        marketplaceTechnicalCode = "Amazon";
                                                    }};
                                                }}),
                                                add(new ChangeOrderListRequestItemV2(                new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon");) {{
                                                    changeOrderRequest = new java.util.HashMap<String, String>() {{
                                                        put("suscipit", "repudiandae");
                                                        put("atque", "atque");
                                                        put("sunt", "recusandae");
                                                    }};
                                                    order = new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon") {{
                                                        accountId = 1234;
                                                        beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                                        marketplaceTechnicalCode = "Amazon";
                                                    }};
                                                }}),
                                                add(new ChangeOrderListRequestItemV2(                new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon");) {{
                                                    changeOrderRequest = new java.util.HashMap<String, String>() {{
                                                        put("repellendus", "labore");
                                                        put("reiciendis", "doloremque");
                                                        put("repudiandae", "dicta");
                                                    }};
                                                    order = new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon") {{
                                                        accountId = 1234;
                                                        beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                                        marketplaceTechnicalCode = "Amazon";
                                                    }};
                                                }}),
                                                add(new ChangeOrderListRequestItemV2(                new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon");) {{
                                                    changeOrderRequest = new java.util.HashMap<String, String>() {{
                                                        put("beatae", "dolores");
                                                    }};
                                                    order = new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon") {{
                                                        accountId = 1234;
                                                        beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                                        marketplaceTechnicalCode = "Amazon";
                                                    }};
                                                }}),
                                            }});, "enim", "laboriosam") {{
                testMode = false;
            }};            

            ChangeOrderListV2Response res = sdk.marketplacesOrdersV3Batches.changeOrderListV2(req);

            if (res.batchOrderOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changeOrderListV3

The purpose of this operation is to reduce the amount of request to the API. 
Max 100 items per call.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeOrderListV3Request;
import org.openapis.openapi.models.operations.ChangeOrderListV3Response;
import org.openapis.openapi.models.shared.ChangeOrderListRequest;
import org.openapis.openapi.models.shared.ChangeOrderListRequestItem;
import org.openapis.openapi.models.shared.OrderIdentifierWithETag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeOrderListV3Request req = new ChangeOrderListV3Request(                new ChangeOrderListRequest(                new org.openapis.openapi.models.shared.ChangeOrderListRequestItem[]{{
                                                add(new ChangeOrderListRequestItem(                new OrderIdentifierWithETag(1234, "00000000000000000000000000000000000000000000000", ""ca071a4580129f932a03971968ffef69"", "Amazon");) {{
                                                    changeOrderRequest = new java.util.HashMap<String, String>() {{
                                                        put("molestias", "magnam");
                                                        put("saepe", "consequuntur");
                                                        put("occaecati", "officiis");
                                                        put("perspiciatis", "in");
                                                    }};
                                                    order = new OrderIdentifierWithETag(1234, "00000000000000000000000000000000000000000000000", ""ca071a4580129f932a03971968ffef69"", "Amazon") {{
                                                        accountId = 1234;
                                                        beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                                        etag = ""ca071a4580129f932a03971968ffef69"";
                                                        marketplaceTechnicalCode = "Amazon";
                                                    }};
                                                }}),
                                            }});, "adipisci") {{
                testMode = false;
            }};            

            ChangeOrderListV3Response res = sdk.marketplacesOrdersV3Batches.changeOrderListV3(req);

            if (res.batchOrderOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clearMerchantOrderInfoListV3

The purpose of this operation is to reduce the amount of request to the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearMerchantOrderInfoListV3Request;
import org.openapis.openapi.models.operations.ClearMerchantOrderInfoListV3Response;
import org.openapis.openapi.models.shared.ClearMerchantOrderInfoListRequest;
import org.openapis.openapi.models.shared.OrderIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClearMerchantOrderInfoListV3Request req = new ClearMerchantOrderInfoListV3Request(                new ClearMerchantOrderInfoListRequest(                new org.openapis.openapi.models.shared.OrderIdentifier[]{{
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
                                                add(new OrderIdentifier(1234, "00000000000000000000000000000000000000000000000", "Amazon") {{
                                                    accountId = 1234;
                                                    beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                                    marketplaceTechnicalCode = "Amazon";
                                                }}),
                                            }});) {{
                testMode = false;
            }};            

            ClearMerchantOrderInfoListV3Response res = sdk.marketplacesOrdersV3Batches.clearMerchantOrderInfoListV3(req);

            if (res.batchOrderOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setMerchantOrderInfoListV3

The purpose of this operation is to reduce the amount of request to the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetMerchantOrderInfoListV3Request;
import org.openapis.openapi.models.operations.SetMerchantOrderInfoListV3Response;
import org.openapis.openapi.models.shared.SetMerchantOrderInfoListRequest;
import org.openapis.openapi.models.shared.SetMerchantOrderInfoListRequestItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetMerchantOrderInfoListV3Request req = new SetMerchantOrderInfoListV3Request(                new SetMerchantOrderInfoListRequest("Prestashop", "123.0.1",                 new org.openapis.openapi.models.shared.SetMerchantOrderInfoListRequestItem[]{{
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
                                                add(new SetMerchantOrderInfoListRequestItem(1234, "00000000000000000000000000000000000000000000000", "Amazon", "MyOrderMerchantId") {{
                                                    accountId = 1234;
                                                    beezUPOrderId = "00000000000000000000000000000000000000000000000";
                                                    marketplaceTechnicalCode = "Amazon";
                                                    orderMerchantOrderId = "MyOrderMerchantId";
                                                }}),
                                            }});) {{
                testMode = false;
            }};            

            SetMerchantOrderInfoListV3Response res = sdk.marketplacesOrdersV3Batches.setMerchantOrderInfoListV3(req);

            if (res.batchOrderOperationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
