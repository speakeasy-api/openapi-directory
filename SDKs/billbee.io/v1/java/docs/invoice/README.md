# invoice

### Available Operations

* [orderApiCreateInvoice](#orderapicreateinvoice) - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [orderApiGetInvoiceList](#orderapigetinvoicelist) - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

## orderApiCreateInvoice

Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiCreateInvoiceRequest;
import org.openapis.openapi.models.operations.OrderApiCreateInvoiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiCreateInvoiceRequest req = new OrderApiCreateInvoiceRequest(370853L) {{
                includeInvoicePdf = false;
                sendToCloudId = 133465L;
                templateId = 197054L;
            }};            

            OrderApiCreateInvoiceResponse res = sdk.invoice.orderApiCreateInvoice(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiGetInvoiceList

Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiGetInvoiceListRequest;
import org.openapis.openapi.models.operations.OrderApiGetInvoiceListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiGetInvoiceListRequest req = new OrderApiGetInvoiceListRequest() {{
                excludeTags = false;
                includePositions = false;
                maxInvoiceDate = OffsetDateTime.parse("2021-08-15T10:59:14.485Z");
                maxPayDate = OffsetDateTime.parse("2022-11-13T03:35:18.820Z");
                minInvoiceDate = OffsetDateTime.parse("2021-05-27T03:34:33.852Z");
                minPayDate = OffsetDateTime.parse("2022-12-03T21:51:40.661Z");
                orderStateId = new Integer[]{{
                    add(518835),
                    add(882710),
                }};
                page = 306810;
                pageSize = 488410;
                shopId = new Long[]{{
                    add(414567L),
                    add(959434L),
                    add(174112L),
                }};
                tag = new String[]{{
                    add("molestiae"),
                    add("accusantium"),
                    add("porro"),
                }};
            }};            

            OrderApiGetInvoiceListResponse res = sdk.invoice.orderApiGetInvoiceList(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
