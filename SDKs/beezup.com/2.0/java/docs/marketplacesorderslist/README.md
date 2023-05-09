# marketplacesOrdersList

### Available Operations

* [~~getOrderListFull~~](#getorderlistfull) - [DEPRECATED] Get a paginated list of all Orders with all Order and Order Item(s) properties :warning: **Deprecated**
* [~~getOrderListLight~~](#getorderlistlight) - [DEPRECATED] Get a paginated list of all Orders without details :warning: **Deprecated**

## ~~getOrderListFull~~

DEPRECATED - Use /orders/v3 instead
The purpose of this operation is to reduce the amount of request to the API.\
\
Previous implmentation of this feature only returned a partial (light) version of the Orders. The purpose of this API is to reduce the number of incoming requests by returning the complete (full) Order and Order Item(s) properties.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderListFullRequest;
import org.openapis.openapi.models.operations.GetOrderListFullResponse;
import org.openapis.openapi.models.shared.DateSearchTypeEnum;
import org.openapis.openapi.models.shared.OrderListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderListFullRequest req = new GetOrderListFullRequest(                new String[]{{
                                add("ea"),
                            }},                 new OrderListRequest(OffsetDateTime.parse("2017-03-01T13:10:01Z"), OffsetDateTime.parse("2017-04-01T13:10:01Z"), 1, 100) {{
                                accountIds = new Integer[]{{
                                    add(1234),
                                    add(1234),
                                }};
                                beezUPOrderStatuses = new String[]{{
                                    add("Shipped"),
                                }};
                                dateSearchType = DateSearchTypeEnum.MARKET_PLACE_MODIFICATION;
                                invoiceAvailabilityType = "All";
                                marketplaceBusinessCodes = new String[]{{
                                    add("GOSPORT"),
                                    add("GOSPORT"),
                                    add("GOSPORT"),
                                }};
                                marketplaceOrderIds = new String[]{{
                                    add("AMAZON12345"),
                                    add("AMAZON12345"),
                                    add("AMAZON12345"),
                                    add("AMAZON12345"),
                                }};
                                marketplaceTechnicalCodes = new String[]{{
                                    add("Amazon"),
                                    add("Amazon"),
                                }};
                                orderMerchantInfoSynchronizationStatus = "All";
                                orderBuyerName = "Monroe";
                                orderMerchantOrderIds = new String[]{{
                                    add("MyOrderMerchantId"),
                                    add("MyOrderMerchantId"),
                                    add("MyOrderMerchantId"),
                                }};
                                storeIds = new String[]{{
                                    add("64f43358-63a1-47f7-97ec-0301fc39956b"),
                                    add("64f43358-63a1-47f7-97ec-0301fc39956b"),
                                    add("64f43358-63a1-47f7-97ec-0301fc39956b"),
                                    add("64f43358-63a1-47f7-97ec-0301fc39956b"),
                                }};
                            }};);            

            GetOrderListFullResponse res = sdk.marketplacesOrdersList.getOrderListFull(req);

            if (res.orderListFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getOrderListLight~~

Use /orders/v3 instead

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderListLightResponse;
import org.openapis.openapi.models.shared.DateSearchTypeEnum;
import org.openapis.openapi.models.shared.OrderListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OrderListRequest req = new OrderListRequest(OffsetDateTime.parse("2017-03-01T13:10:01Z"), OffsetDateTime.parse("2017-04-01T13:10:01Z"), 1, 100) {{
                accountIds = new Integer[]{{
                    add(1234),
                    add(1234),
                }};
                beezUPOrderStatuses = new String[]{{
                    add("Shipped"),
                }};
                dateSearchType = DateSearchTypeEnum.MODIFICATION;
                invoiceAvailabilityType = "All";
                marketplaceBusinessCodes = new String[]{{
                    add("GOSPORT"),
                    add("GOSPORT"),
                    add("GOSPORT"),
                    add("GOSPORT"),
                }};
                marketplaceOrderIds = new String[]{{
                    add("AMAZON12345"),
                    add("AMAZON12345"),
                    add("AMAZON12345"),
                    add("AMAZON12345"),
                }};
                marketplaceTechnicalCodes = new String[]{{
                    add("Amazon"),
                    add("Amazon"),
                }};
                orderMerchantInfoSynchronizationStatus = "All";
                orderBuyerName = "Monroe";
                orderMerchantOrderIds = new String[]{{
                    add("MyOrderMerchantId"),
                }};
                storeIds = new String[]{{
                    add("64f43358-63a1-47f7-97ec-0301fc39956b"),
                }};
            }};            

            GetOrderListLightResponse res = sdk.marketplacesOrdersList.getOrderListLight(req);

            if (res.orderListLight != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
