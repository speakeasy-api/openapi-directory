# marketplacesOrdersV3List

### Available Operations

* [getOrderListFullV3](#getorderlistfullv3) - Get a paginated list of all Orders with all Order and Order Item(s) properties
* [getOrderListLightV3](#getorderlistlightv3) - Get a paginated list of all Orders without details

## getOrderListFullV3

The purpose of this operation is to reduce the amount of request to the API.\
\
Previous implmentation of this feature only returned a partial (light) version of the Orders. The purpose of this API is to reduce the number of incoming requests by returning the complete (full) Order and Order Item(s) properties.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderListFullV3Request;
import org.openapis.openapi.models.operations.GetOrderListFullV3Response;
import org.openapis.openapi.models.shared.DateSearchTypeEnum;
import org.openapis.openapi.models.shared.OrderListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderListFullV3Request req = new GetOrderListFullV3Request("eveniet",                 new OrderListRequest(OffsetDateTime.parse("2017-03-01T13:10:01Z"), OffsetDateTime.parse("2017-04-01T13:10:01Z"), 1, 100) {{
                                accountIds = new Integer[]{{
                                    add(1234),
                                }};
                                beezUPOrderStatuses = new String[]{{
                                    add("Shipped"),
                                    add("Shipped"),
                                    add("Shipped"),
                                    add("Shipped"),
                                }};
                                dateSearchType = DateSearchTypeEnum.MODIFICATION;
                                invoiceAvailabilityType = "All";
                                marketplaceBusinessCodes = new String[]{{
                                    add("GOSPORT"),
                                    add("GOSPORT"),
                                }};
                                marketplaceOrderIds = new String[]{{
                                    add("AMAZON12345"),
                                }};
                                marketplaceTechnicalCodes = new String[]{{
                                    add("Amazon"),
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
                                    add("64f43358-63a1-47f7-97ec-0301fc39956b"),
                                }};
                            }};);            

            GetOrderListFullV3Response res = sdk.marketplacesOrdersV3List.getOrderListFullV3(req);

            if (res.orderListFullWithLinks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderListLightV3

Get a paginated list of all Orders without details

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderListLightV3Response;
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
                }};
                marketplaceOrderIds = new String[]{{
                    add("AMAZON12345"),
                    add("AMAZON12345"),
                    add("AMAZON12345"),
                    add("AMAZON12345"),
                }};
                marketplaceTechnicalCodes = new String[]{{
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
                }};
            }};            

            GetOrderListLightV3Response res = sdk.marketplacesOrdersV3List.getOrderListLightV3(req);

            if (res.orderListLightWithLinks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
