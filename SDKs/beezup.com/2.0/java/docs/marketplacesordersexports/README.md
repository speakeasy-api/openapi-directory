# marketplacesOrdersExports

### Available Operations

* [exportOrders](#exportorders) - Request a new Order report exportation to be generated
* [getOrderExportations](#getorderexportations) - Get a paginated list of Order report exportations

## exportOrders

A new file will be generated containing a summary of all the Orders matching the requested filter settings.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportOrdersResponse;
import org.openapis.openapi.models.shared.DateSearchTypeEnum;
import org.openapis.openapi.models.shared.ExportOrderListFormatEnum;
import org.openapis.openapi.models.shared.ExportOrderListRequest;
import org.openapis.openapi.models.shared.OrderListRequestWithoutPagination;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ExportOrderListRequest req = new ExportOrderListRequest(                new OrderListRequestWithoutPagination(OffsetDateTime.parse("2017-03-01T13:10:01Z"), OffsetDateTime.parse("2017-04-01T13:10:01Z")) {{
                                accountIds = new Integer[]{{
                                    add(1234),
                                }};
                                beezUPOrderStatuses = new String[]{{
                                    add("Shipped"),
                                }};
                                dateSearchType = DateSearchTypeEnum.PURCHASE;
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
                                }};
                                storeIds = new String[]{{
                                    add("64f43358-63a1-47f7-97ec-0301fc39956b"),
                                }};
                            }};, "64f43358-63a1-47f7-97ec-0301fc39956b") {{
                format = ExportOrderListFormatEnum.CSV;
            }};            

            ExportOrdersResponse res = sdk.marketplacesOrdersExports.exportOrders(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderExportations

Get a paginated list of Order report exportations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderExportationsRequest;
import org.openapis.openapi.models.operations.GetOrderExportationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderExportationsRequest req = new GetOrderExportationsRequest(491025, 115484, "maiores") {{
                ifNoneMatch = "natus";
            }};            

            GetOrderExportationsResponse res = sdk.marketplacesOrdersExports.getOrderExportations(req);

            if (res.orderExportations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
