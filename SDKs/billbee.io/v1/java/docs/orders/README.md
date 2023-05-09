# orders

### Available Operations

* [layoutApiGetList](#layoutapigetlist)
* [orderApiAddShipmentForm](#orderapiaddshipmentform) - Add a shipment to a given order
* [orderApiAddShipmentJson](#orderapiaddshipmentjson) - Add a shipment to a given order
* [orderApiAddShipmentRaw](#orderapiaddshipmentraw) - Add a shipment to a given order
* [orderApiCreateDeliveryNote](#orderapicreatedeliverynote) - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [orderApiCreateInvoice](#orderapicreateinvoice) - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [~~orderApiFind~~](#orderapifind) - Find a single order by its external id (order number) :warning: **Deprecated**
* [orderApiGet](#orderapiget) - Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute
* [orderApiGetByExtRef](#orderapigetbyextref) - Get a single order by its external order number
* [orderApiGetInvoiceList](#orderapigetinvoicelist) - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
* [orderApiGetList](#orderapigetlist) - Get a list of all orders optionally filtered by date
* [orderApiGetPatchableFields](#orderapigetpatchablefields) - Returns a list of fields which can be updated with the orders/{id} patch call
* [orderApiParsePlaceholdersForm](#orderapiparseplaceholdersform) - Parses a text and replaces all placeholders
* [orderApiParsePlaceholdersJson](#orderapiparseplaceholdersjson) - Parses a text and replaces all placeholders
* [orderApiParsePlaceholdersRaw](#orderapiparseplaceholdersraw) - Parses a text and replaces all placeholders
* [orderApiPatchOrder](#orderapipatchorder) - Updates one or more fields of an order
* [orderApiPostNewOrderForm](#orderapipostneworderform) - Creates a new order in the Billbee account
* [orderApiPostNewOrderJson](#orderapipostneworderjson) - Creates a new order in the Billbee account
* [orderApiPostNewOrderRaw](#orderapipostneworderraw) - Creates a new order in the Billbee account
* [orderApiSendMessageForm](#orderapisendmessageform) - Sends a message to the buyer
* [orderApiSendMessageJson](#orderapisendmessagejson) - Sends a message to the buyer
* [orderApiSendMessageRaw](#orderapisendmessageraw) - Sends a message to the buyer
* [orderApiTagsCreateForm](#orderapitagscreateform) - Attach one or more tags to an order
* [orderApiTagsCreateJson](#orderapitagscreatejson) - Attach one or more tags to an order
* [orderApiTagsCreateRaw](#orderapitagscreateraw) - Attach one or more tags to an order
* [orderApiTagsUpdateForm](#orderapitagsupdateform) - Sets the tags attached to an order
* [orderApiTagsUpdateJson](#orderapitagsupdatejson) - Sets the tags attached to an order
* [orderApiTagsUpdateRaw](#orderapitagsupdateraw) - Sets the tags attached to an order
* [orderApiTriggerEventForm](#orderapitriggereventform) - Triggers a rule event
* [orderApiTriggerEventJson](#orderapitriggereventjson) - Triggers a rule event
* [orderApiTriggerEventRaw](#orderapitriggereventraw) - Triggers a rule event
* [orderApiUpdateStateForm](#orderapiupdatestateform) - Changes the main state of a single order
* [orderApiUpdateStateJson](#orderapiupdatestatejson) - Changes the main state of a single order
* [orderApiUpdateStateRaw](#orderapiupdatestateraw) - Changes the main state of a single order
* [searchSearchForm](#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchJson](#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchRaw](#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

## layoutApiGetList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LayoutApiGetListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LayoutApiGetListResponse res = sdk.orders.layoutApiGetList();

            if (res.rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelsLayoutTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiAddShipmentForm

Add a shipment to a given order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiAddShipmentFormRequest;
import org.openapis.openapi.models.operations.OrderApiAddShipmentFormResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiAddShipmentFormRequest req = new OrderApiAddShipmentFormRequest(                new RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel() {{
                                carrierId = 430402;
                                comment = "quas";
                                orderId = "praesentium";
                                shipmentType = 159867;
                                shippingId = "deleniti";
                                shippingProviderId = 143829L;
                                shippingProviderProductId = 681393L;
                            }};, 649463L);            

            OrderApiAddShipmentFormResponse res = sdk.orders.orderApiAddShipmentForm(req);

            if (res.orderApiAddShipmentForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiAddShipmentJson

Add a shipment to a given order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiAddShipmentJsonRequest;
import org.openapis.openapi.models.operations.OrderApiAddShipmentJsonResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiAddShipmentJsonRequest req = new OrderApiAddShipmentJsonRequest(                new RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel() {{
                                carrierId = 277596;
                                comment = "atque";
                                orderId = "explicabo";
                                shipmentType = 325685;
                                shippingId = "nisi";
                                shippingProviderId = 147014L;
                                shippingProviderProductId = 956406L;
                            }};, 159870L);            

            OrderApiAddShipmentJsonResponse res = sdk.orders.orderApiAddShipmentJson(req);

            if (res.orderApiAddShipmentJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiAddShipmentRaw

Add a shipment to a given order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiAddShipmentRawRequest;
import org.openapis.openapi.models.operations.OrderApiAddShipmentRawResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiAddShipmentRawRequest req = new OrderApiAddShipmentRawRequest("ratione".getBytes(), 129412L);            

            OrderApiAddShipmentRawResponse res = sdk.orders.orderApiAddShipmentRaw(req);

            if (res.orderApiAddShipmentRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiCreateDeliveryNote

Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiCreateDeliveryNoteRequest;
import org.openapis.openapi.models.operations.OrderApiCreateDeliveryNoteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiCreateDeliveryNoteRequest req = new OrderApiCreateDeliveryNoteRequest(903984L) {{
                includePdf = false;
                sendToCloudId = 578922L;
            }};            

            OrderApiCreateDeliveryNoteResponse res = sdk.orders.orderApiCreateDeliveryNote(req);

            if (res.orderApiCreateDeliveryNote200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            OrderApiCreateInvoiceRequest req = new OrderApiCreateInvoiceRequest(543806L) {{
                includeInvoicePdf = false;
                sendToCloudId = 92260L;
                templateId = 456911L;
            }};            

            OrderApiCreateInvoiceResponse res = sdk.orders.orderApiCreateInvoice(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~orderApiFind~~

Find a single order by its external id (order number)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiFindRequest;
import org.openapis.openapi.models.operations.OrderApiFindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiFindRequest req = new OrderApiFindRequest("eveniet", "accusamus");            

            OrderApiFindResponse res = sdk.orders.orderApiFind(req);

            if (res.orderApiFind200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiGet

Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiGetArticleTitleSourceEnum;
import org.openapis.openapi.models.operations.OrderApiGetRequest;
import org.openapis.openapi.models.operations.OrderApiGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiGetRequest req = new OrderApiGetRequest(82971L) {{
                articleTitleSource = OrderApiGetArticleTitleSourceEnum.ONE;
            }};            

            OrderApiGetResponse res = sdk.orders.orderApiGet(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiGetByExtRef

Get a single order by its external order number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiGetByExtRefRequest;
import org.openapis.openapi.models.operations.OrderApiGetByExtRefResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiGetByExtRefRequest req = new OrderApiGetByExtRefRequest("quod");            

            OrderApiGetByExtRefResponse res = sdk.orders.orderApiGetByExtRef(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != null) {
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
                maxInvoiceDate = OffsetDateTime.parse("2021-03-31T16:39:55.446Z");
                maxPayDate = OffsetDateTime.parse("2022-11-27T21:17:41.726Z");
                minInvoiceDate = OffsetDateTime.parse("2021-09-21T04:40:52.923Z");
                minPayDate = OffsetDateTime.parse("2022-01-20T13:10:25.426Z");
                orderStateId = new Integer[]{{
                    add(580197),
                    add(327720),
                    add(716244),
                }};
                page = 756779;
                pageSize = 27069;
                shopId = new Long[]{{
                    add(731398L),
                    add(240020L),
                    add(766964L),
                }};
                tag = new String[]{{
                    add("consequatur"),
                }};
            }};            

            OrderApiGetInvoiceListResponse res = sdk.orders.orderApiGetInvoiceList(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiGetList

Get a list of all orders optionally filtered by date

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiGetListArticleTitleSourceEnum;
import org.openapis.openapi.models.operations.OrderApiGetListRequest;
import org.openapis.openapi.models.operations.OrderApiGetListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiGetListRequest req = new OrderApiGetListRequest() {{
                articleTitleSource = OrderApiGetListArticleTitleSourceEnum.THREE;
                excludeTags = false;
                maxOrderDate = OffsetDateTime.parse("2022-01-15T21:42:01.969Z");
                minOrderDate = OffsetDateTime.parse("2022-07-17T18:42:13.476Z");
                minimumBillBeeOrderId = 503427L;
                modifiedAtMax = OffsetDateTime.parse("2021-02-03T18:48:04.995Z");
                modifiedAtMin = OffsetDateTime.parse("2021-04-30T04:43:08.128Z");
                orderStateId = new Integer[]{{
                    add(97468),
                    add(951875),
                }};
                page = 621679;
                pageSize = 575751;
                shopId = new Long[]{{
                    add(820767L),
                    add(157632L),
                    add(908844L),
                    add(992430L),
                }};
                tag = new String[]{{
                    add("veritatis"),
                    add("consequuntur"),
                    add("quasi"),
                    add("similique"),
                }};
            }};            

            OrderApiGetListResponse res = sdk.orders.orderApiGetList(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiGetPatchableFields

Returns a list of fields which can be updated with the orders/{id} patch call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiGetPatchableFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiGetPatchableFieldsResponse res = sdk.orders.orderApiGetPatchableFields();

            if (res.orderApiGetPatchableFields200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiParsePlaceholdersForm

Parses a text and replaces all placeholders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiParsePlaceholdersFormRequest;
import org.openapis.openapi.models.operations.OrderApiParsePlaceholdersFormResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiParsePlaceholdersFormRequest req = new OrderApiParsePlaceholdersFormRequest(                new RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer() {{
                                isHtml = false;
                                language = "culpa";
                                textToParse = "aliquid";
                                trim = false;
                            }};, 949298L);            

            OrderApiParsePlaceholdersFormResponse res = sdk.orders.orderApiParsePlaceholdersForm(req);

            if (res.orderApiParsePlaceholdersForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiParsePlaceholdersJson

Parses a text and replaces all placeholders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiParsePlaceholdersJsonRequest;
import org.openapis.openapi.models.operations.OrderApiParsePlaceholdersJsonResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiParsePlaceholdersJsonRequest req = new OrderApiParsePlaceholdersJsonRequest(                new RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer() {{
                                isHtml = false;
                                language = "quae";
                                textToParse = "earum";
                                trim = false;
                            }};, 424032L);            

            OrderApiParsePlaceholdersJsonResponse res = sdk.orders.orderApiParsePlaceholdersJson(req);

            if (res.orderApiParsePlaceholdersJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiParsePlaceholdersRaw

Parses a text and replaces all placeholders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiParsePlaceholdersRawRequest;
import org.openapis.openapi.models.operations.OrderApiParsePlaceholdersRawResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiParsePlaceholdersRawRequest req = new OrderApiParsePlaceholdersRawRequest("in".getBytes(), 258684L);            

            OrderApiParsePlaceholdersRawResponse res = sdk.orders.orderApiParsePlaceholdersRaw(req);

            if (res.orderApiParsePlaceholdersRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiPatchOrder

Updates one or more fields of an order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiPatchOrderRequest;
import org.openapis.openapi.models.operations.OrderApiPatchOrderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiPatchOrderRequest req = new OrderApiPatchOrderRequest(                new java.util.HashMap<String, Object>() {{
                                put("illum", "soluta");
                                put("accusantium", "aliquam");
                                put("sapiente", "dicta");
                            }}, 355369L);            

            OrderApiPatchOrderResponse res = sdk.orders.orderApiPatchOrder(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiPostNewOrderForm

To create an order POST an JSON object to the orders endpoint with the shown properties.
Not all properties are required.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiPostNewOrderFormRequest;
import org.openapis.openapi.models.operations.OrderApiPostNewOrderFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderStateEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderUserInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelProductImage;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelShipment;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelSoldProductInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment;
import org.openapis.openapi.models.shared.BillbeeInterfacesOrderHistoryEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiPostNewOrderFormRequest req = new OrderApiPostNewOrderFormRequest(                new BillbeeInterfacesBillbeeAPIModelOrderInput() {{
                                acceptLossOfReturnRight = false;
                                adjustmentCost = 4438.79;
                                adjustmentReason = "ullam";
                                apiAccountId = 391774L;
                                apiAccountName = "aut";
                                archivedAt = OffsetDateTime.parse("2022-08-18T18:43:46.013Z");
                                billBeeOrderId = 845358L;
                                billBeeParentOrderId = 401259L;
                                buyer = new BillbeeInterfacesBillbeeAPIModelOrderUserInput() {{
                                    billbeeShopId = 536275L;
                                    billbeeShopName = "itaque";
                                    email = "Bailee.Monahan86@hotmail.com";
                                    firstName = "Audreanne";
                                    id = "7051339d-0808-46a1-8403-94c26071f93f";
                                    lastName = "Hirthe";
                                    nick = "asperiores";
                                    platform = "aperiam";
                                }};;
                                comments = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel[]{{
                                    add(new BillbeeInterfacesBillbeeAPIModelCommentAPIModel() {{
                                        created = OffsetDateTime.parse("2022-11-02T12:31:08.461Z");
                                        fromCustomer = false;
                                        id = 831520L;
                                        name = "Simon Kuhn";
                                        text = "nemo";
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelCommentAPIModel() {{
                                        created = OffsetDateTime.parse("2022-09-08T20:16:51.473Z");
                                        fromCustomer = false;
                                        id = 783235L;
                                        name = "Francisco Bernier";
                                        text = "id";
                                    }}),
                                }};
                                confirmedAt = OffsetDateTime.parse("2022-10-03T04:29:10.698Z");
                                createdAt = OffsetDateTime.parse("2021-09-01T22:08:53.618Z");
                                currency = "recusandae";
                                customInvoiceNote = "totam";
                                customer = new BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput() {{
                                    archivedAt = OffsetDateTime.parse("2021-09-23T14:56:28.537Z");
                                    defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 497678L;
                                        subType = "quos";
                                        typeId = 427834L;
                                        value = "labore";
                                    }};;
                                    defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 822560L;
                                        subType = "facilis";
                                        typeId = 738227L;
                                        value = "commodi";
                                    }};;
                                    defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 447144L;
                                        subType = "corporis";
                                        typeId = 968904L;
                                        value = "assumenda";
                                    }};;
                                    defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 363161L;
                                        subType = "recusandae";
                                        typeId = 397533L;
                                        value = "aperiam";
                                    }};;
                                    defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 738683L;
                                        subType = "consectetur";
                                        typeId = 449083L;
                                        value = "exercitationem";
                                    }};;
                                    defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 937285L;
                                        subType = "facere";
                                        typeId = 257233L;
                                        value = "doloribus";
                                    }};;
                                    email = "Vivienne_Predovic29@yahoo.com";
                                    id = 121059L;
                                    languageId = 992012;
                                    metaData = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput[]{{
                                        add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                            id = 249420L;
                                            subType = "amet";
                                            typeId = 105906L;
                                            value = "dignissimos";
                                        }}),
                                    }};
                                    name = "Doyle Feest";
                                    number = 385237;
                                    priceGroupId = 58356L;
                                    restoredAt = OffsetDateTime.parse("2020-10-22T20:57:52.942Z");
                                    tel1 = "vitae";
                                    tel2 = "accusamus";
                                    type = 631126;
                                    vatId = "tempora";
                                }};;
                                customerNumber = "aspernatur";
                                customerVatId = "voluptas";
                                deliverySourceCountryCode = "voluptas";
                                distributionCenter = "voluptas";
                                history = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderHistoryEntry[]{{
                                    add(new BillbeeInterfacesOrderHistoryEntry() {{
                                        created = OffsetDateTime.parse("2021-08-22T12:22:32.426Z");
                                        employeeName = "adipisci";
                                        eventTypeName = "minus";
                                        text = "dolores";
                                        typeId = 503934;
                                    }}),
                                    add(new BillbeeInterfacesOrderHistoryEntry() {{
                                        created = OffsetDateTime.parse("2022-09-14T20:54:59.386Z");
                                        employeeName = "aliquam";
                                        eventTypeName = "officiis";
                                        text = "temporibus";
                                        typeId = 351870;
                                    }}),
                                }};
                                id = "3b88f3a8-d8f5-4c0b-af2f-b7b194a276b2";
                                invoiceAddress = new BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel() {{
                                    billbeeId = 378326L;
                                    city = "Bradtkebury";
                                    company = "Tremblay, Bins and Wisoky";
                                    country = "Andorra";
                                    countryIso2 = "corrupti";
                                    email = "Dorothy.Cormier@hotmail.com";
                                    firstName = "Sophie";
                                    houseNumber = "ipsum";
                                    lastName = "Jaskolski";
                                    line2 = "occaecati";
                                    nameAddition = "quos";
                                    phone = "424.940.2857 x32385";
                                    state = "sit";
                                    street = "633 Wisoky Throughway";
                                    zip = "magni";
                                }};;
                                invoiceDate = OffsetDateTime.parse("2022-02-05T23:00:32.306Z");
                                invoiceNumber = 253642;
                                invoiceNumberPostfix = "veniam";
                                invoiceNumberPrefix = "in";
                                isCancelationFor = "officiis";
                                isFromBillbeeApi = false;
                                languageCode = "beatae";
                                lastModifiedAt = OffsetDateTime.parse("2022-04-21T14:42:01.744Z");
                                merchantVatId = "praesentium";
                                orderItems = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput[]{{
                                    add(new BillbeeInterfacesBillbeeAPIModelOrderItemInput() {{
                                        attributes = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute[]{{
                                            add(new BillbeeInterfacesBillbeeAPIModelOrderItemAttribute() {{
                                                id = "a89fbe3a-5aa8-4e48-a4d0-ab4075088e51";
                                                name = "Ms. Ruben Cremin";
                                                price = 9061.72;
                                                value = "error";
                                            }}),
                                            add(new BillbeeInterfacesBillbeeAPIModelOrderItemAttribute() {{
                                                id = "04f3b119-4b8a-4bf6-83a7-9f9dfe0ab7da";
                                                name = "Miss Hubert Hartmann";
                                                price = 972.43;
                                                value = "atque";
                                            }}),
                                        }};
                                        billbeeId = 442036L;
                                        discount = 9911.42;
                                        dontAdjustStock = false;
                                        getPriceFromArticleIfAny = false;
                                        invoiceSKU = "totam";
                                        isCoupon = false;
                                        product = new BillbeeInterfacesBillbeeAPIModelSoldProductInput() {{
                                            billbeeId = 383103L;
                                            countryOfOrigin = "quidem";
                                            ean = "maxime";
                                            id = "173d689e-ee95-426f-8d98-6e881ead4f0e";
                                            images = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelProductImage[]{{
                                                add(new BillbeeInterfacesBillbeeAPIModelProductImage() {{
                                                    externalId = "accusantium";
                                                    isDefaultImage = false;
                                                    position = 106429;
                                                    url = "dolores";
                                                }}),
                                            }};
                                            isDigital = false;
                                            oldId = "enim";
                                            platformData = "laboriosam";
                                            sku = "velit";
                                            taricCode = "a";
                                            title = "Ms.";
                                            type = 300029;
                                            weight = 906355;
                                        }};
                                        quantity = 1604.67;
                                        serialNumber = "occaecati";
                                        shippingProfileId = "officiis";
                                        taxAmount = 5979.37;
                                        taxIndex = 446394;
                                        totalPrice = 2380.43;
                                        transactionId = "eveniet";
                                        unrebatedTotalPrice = 5808.87;
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelOrderItemInput() {{
                                        attributes = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute[]{{
                                            add(new BillbeeInterfacesBillbeeAPIModelOrderItemAttribute() {{
                                                id = "2a57a15b-e3e0-4608-87e2-b6e3ab8845f0";
                                                name = "Katrina Kovacek";
                                                price = 51.89;
                                                value = "maiores";
                                            }}),
                                        }};
                                        billbeeId = 970222L;
                                        discount = 1746.58;
                                        dontAdjustStock = false;
                                        getPriceFromArticleIfAny = false;
                                        invoiceSKU = "id";
                                        isCoupon = false;
                                        product = new BillbeeInterfacesBillbeeAPIModelSoldProductInput() {{
                                            billbeeId = 327988L;
                                            countryOfOrigin = "dolore";
                                            ean = "dolorum";
                                            id = "31e94764-a3e8-465e-b956-f9251a5a9da6";
                                            images = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelProductImage[]{{
                                                add(new BillbeeInterfacesBillbeeAPIModelProductImage() {{
                                                    externalId = "accusantium";
                                                    isDefaultImage = false;
                                                    position = 999278;
                                                    url = "doloribus";
                                                }}),
                                                add(new BillbeeInterfacesBillbeeAPIModelProductImage() {{
                                                    externalId = "ullam";
                                                    isDefaultImage = false;
                                                    position = 448143;
                                                    url = "nam";
                                                }}),
                                            }};
                                            isDigital = false;
                                            oldId = "earum";
                                            platformData = "officia";
                                            sku = "laborum";
                                            taricCode = "placeat";
                                            title = "Mrs.";
                                            type = 976226;
                                            weight = 564064;
                                        }};
                                        quantity = 8897.94;
                                        serialNumber = "sapiente";
                                        shippingProfileId = "cumque";
                                        taxAmount = 1134.86;
                                        taxIndex = 698249;
                                        totalPrice = 2722.29;
                                        transactionId = "quis";
                                        unrebatedTotalPrice = 820.57;
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelOrderItemInput() {{
                                        attributes = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute[]{{
                                            add(new BillbeeInterfacesBillbeeAPIModelOrderItemAttribute() {{
                                                id = "c1032648-dc2f-4615-999e-bfd0e9fe6c63";
                                                name = "Erma Paucek";
                                                price = 8987.6;
                                                value = "nulla";
                                            }}),
                                        }};
                                        billbeeId = 8931L;
                                        discount = 972.58;
                                        dontAdjustStock = false;
                                        getPriceFromArticleIfAny = false;
                                        invoiceSKU = "et";
                                        isCoupon = false;
                                        product = new BillbeeInterfacesBillbeeAPIModelSoldProductInput() {{
                                            billbeeId = 497777L;
                                            countryOfOrigin = "natus";
                                            ean = "occaecati";
                                            id = "6312fde0-4771-4778-bf61-d017476360a1";
                                            images = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelProductImage[]{{
                                                add(new BillbeeInterfacesBillbeeAPIModelProductImage() {{
                                                    externalId = "fugiat";
                                                    isDefaultImage = false;
                                                    position = 713767;
                                                    url = "aliquid";
                                                }}),
                                                add(new BillbeeInterfacesBillbeeAPIModelProductImage() {{
                                                    externalId = "officia";
                                                    isDefaultImage = false;
                                                    position = 381397;
                                                    url = "aliquid";
                                                }}),
                                            }};
                                            isDigital = false;
                                            oldId = "perferendis";
                                            platformData = "eum";
                                            sku = "voluptas";
                                            taricCode = "iste";
                                            title = "Miss";
                                            type = 70042;
                                            weight = 625358;
                                        }};
                                        quantity = 8224.07;
                                        serialNumber = "voluptates";
                                        shippingProfileId = "mollitia";
                                        taxAmount = 6717.94;
                                        taxIndex = 726343;
                                        totalPrice = 3240.83;
                                        transactionId = "deleniti";
                                        unrebatedTotalPrice = 3162.2;
                                    }}),
                                }};
                                orderNumber = "vitae";
                                paidAmount = 8333.16;
                                payedAt = OffsetDateTime.parse("2022-03-23T19:57:49.518Z");
                                paymentInstruction = "ex";
                                paymentMethod = BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum.FORTY_NINE;
                                paymentReference = "ad";
                                paymentTransactionId = "expedita";
                                payments = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment[]{{
                                    add(new BillbeeInterfacesBillbeeAPIModelsOrderPayment() {{
                                        billbeeId = 561577L;
                                        name = "Gene Brekke";
                                        payDate = OffsetDateTime.parse("2022-04-19T07:48:52.839Z");
                                        payValue = 6656.78;
                                        paymentType = 634786;
                                        purpose = "voluptatem";
                                        sourceTechnology = "sapiente";
                                        sourceText = "officiis";
                                        transactionId = "architecto";
                                    }}),
                                }};
                                restoredAt = OffsetDateTime.parse("2021-04-07T23:13:52.948Z");
                                seller = new BillbeeInterfacesBillbeeAPIModelOrderUserInput() {{
                                    billbeeShopId = 891315L;
                                    billbeeShopName = "voluptatem";
                                    email = "Kaelyn_Wehner@gmail.com";
                                    firstName = "Judge";
                                    id = "c5f350d8-cdb5-4a34-9814-3010421813d5";
                                    lastName = "Crooks";
                                    nick = "ipsa";
                                    platform = "quas";
                                }};;
                                sellerComment = "eveniet";
                                shipWeightKg = 7734.56;
                                shippedAt = OffsetDateTime.parse("2021-08-19T05:33:23.931Z");
                                shippingAddress = new BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel() {{
                                    billbeeId = 897277L;
                                    city = "West Cobycester";
                                    company = "Kautzer - Legros";
                                    country = "French Polynesia";
                                    countryIso2 = "exercitationem";
                                    email = "Oswald.Jones92@gmail.com";
                                    firstName = "Carolanne";
                                    houseNumber = "voluptatem";
                                    lastName = "Heller";
                                    line2 = "necessitatibus";
                                    nameAddition = "quasi";
                                    phone = "1-886-719-9753 x456";
                                    state = "voluptas";
                                    street = "35214 Marisa Manor";
                                    zip = "incidunt";
                                }};;
                                shippingCost = 974.93;
                                shippingIds = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelShipment[]{{
                                    add(new BillbeeInterfacesBillbeeAPIModelShipment() {{
                                        billbeeId = 851854L;
                                        created = OffsetDateTime.parse("2022-08-09T15:02:09.217Z");
                                        shipmentType = 159845;
                                        shipper = "consectetur";
                                        shippingCarrier = 46806;
                                        shippingId = "cupiditate";
                                        shippingProviderId = 970732L;
                                        shippingProviderProductId = 746837L;
                                        trackingUrl = "alias";
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelShipment() {{
                                        billbeeId = 608989L;
                                        created = OffsetDateTime.parse("2022-06-03T15:51:42.244Z");
                                        shipmentType = 612867;
                                        shipper = "magni";
                                        shippingCarrier = 81369;
                                        shippingId = "fuga";
                                        shippingProviderId = 881897L;
                                        shippingProviderProductId = 976802L;
                                        trackingUrl = "distinctio";
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelShipment() {{
                                        billbeeId = 608593L;
                                        created = OffsetDateTime.parse("2022-01-06T10:12:04.022Z");
                                        shipmentType = 507636;
                                        shipper = "maxime";
                                        shippingCarrier = 300403;
                                        shippingId = "temporibus";
                                        shippingProviderId = 549501L;
                                        shippingProviderProductId = 415280L;
                                        trackingUrl = "itaque";
                                    }}),
                                }};
                                shippingProfileId = "commodi";
                                shippingProfileName = "totam";
                                shippingProviderId = 936618L;
                                shippingProviderName = "modi";
                                shippingProviderProductId = 722184L;
                                shippingProviderProductName = "vero";
                                state = BillbeeInterfacesBillbeeAPIModelOrderStateEnum.ONE;
                                tags = new String[]{{
                                    add("vel"),
                                    add("alias"),
                                }};
                                taxRate1 = 938.94;
                                taxRate2 = 2476.85;
                                totalCost = 9785.48;
                                updatedAt = OffsetDateTime.parse("2022-06-05T01:08:19.216Z");
                                vatId = "nulla";
                                vatMode = BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum.THREE;
                            }};) {{
                shopId = 458503L;
            }};            

            OrderApiPostNewOrderFormResponse res = sdk.orders.orderApiPostNewOrderForm(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiPostNewOrderJson

To create an order POST an JSON object to the orders endpoint with the shown properties.
Not all properties are required.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiPostNewOrderJsonRequest;
import org.openapis.openapi.models.operations.OrderApiPostNewOrderJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderStateEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderUserInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelProductImage;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelShipment;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelSoldProductInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment;
import org.openapis.openapi.models.shared.BillbeeInterfacesOrderHistoryEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiPostNewOrderJsonRequest req = new OrderApiPostNewOrderJsonRequest(                new BillbeeInterfacesBillbeeAPIModelOrderInput() {{
                                acceptLossOfReturnRight = false;
                                adjustmentCost = 3644.63;
                                adjustmentReason = "reprehenderit";
                                apiAccountId = 667715L;
                                apiAccountName = "quis";
                                archivedAt = OffsetDateTime.parse("2021-03-29T02:31:09.447Z");
                                billBeeOrderId = 774684L;
                                billBeeParentOrderId = 945027L;
                                buyer = new BillbeeInterfacesBillbeeAPIModelOrderUserInput() {{
                                    billbeeShopId = 900103L;
                                    billbeeShopName = "asperiores";
                                    email = "Garth.Tremblay79@yahoo.com";
                                    firstName = "Marley";
                                    id = "a3383c2b-eb47-4737-bc8d-72f64d1db1f2";
                                    lastName = "Sauer";
                                    nick = "aliquam";
                                    platform = "velit";
                                }};;
                                comments = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel[]{{
                                    add(new BillbeeInterfacesBillbeeAPIModelCommentAPIModel() {{
                                        created = OffsetDateTime.parse("2022-07-29T23:57:06.865Z");
                                        fromCustomer = false;
                                        id = 406922L;
                                        name = "Leigh Mante";
                                        text = "ut";
                                    }}),
                                }};
                                confirmedAt = OffsetDateTime.parse("2021-02-17T05:30:39.106Z");
                                createdAt = OffsetDateTime.parse("2022-03-25T02:57:12.529Z");
                                currency = "voluptatibus";
                                customInvoiceNote = "iste";
                                customer = new BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput() {{
                                    archivedAt = OffsetDateTime.parse("2022-12-29T01:38:46.899Z");
                                    defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 391797L;
                                        subType = "itaque";
                                        typeId = 242178L;
                                        value = "laborum";
                                    }};;
                                    defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 250398L;
                                        subType = "dolor";
                                        typeId = 483394L;
                                        value = "sit";
                                    }};;
                                    defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 39992L;
                                        subType = "consequatur";
                                        typeId = 639705L;
                                        value = "recusandae";
                                    }};;
                                    defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 408303L;
                                        subType = "quidem";
                                        typeId = 377406L;
                                        value = "facilis";
                                    }};;
                                    defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 809365L;
                                        subType = "perspiciatis";
                                        typeId = 709036L;
                                        value = "deleniti";
                                    }};;
                                    defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                        id = 954334L;
                                        subType = "voluptate";
                                        typeId = 351936L;
                                        value = "unde";
                                    }};;
                                    email = "Madeline.Russel@hotmail.com";
                                    id = 668234L;
                                    languageId = 621666;
                                    metaData = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput[]{{
                                        add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                            id = 288570L;
                                            subType = "veritatis";
                                            typeId = 874400L;
                                            value = "consectetur";
                                        }}),
                                        add(new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput() {{
                                            id = 112427L;
                                            subType = "inventore";
                                            typeId = 212434L;
                                            value = "ad";
                                        }}),
                                    }};
                                    name = "Margarita Jacobson";
                                    number = 726227;
                                    priceGroupId = 526907L;
                                    restoredAt = OffsetDateTime.parse("2022-01-09T23:54:38.052Z");
                                    tel1 = "fugit";
                                    tel2 = "alias";
                                    type = 168042;
                                    vatId = "vel";
                                }};;
                                customerNumber = "quae";
                                customerVatId = "quae";
                                deliverySourceCountryCode = "modi";
                                distributionCenter = "neque";
                                history = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderHistoryEntry[]{{
                                    add(new BillbeeInterfacesOrderHistoryEntry() {{
                                        created = OffsetDateTime.parse("2022-09-26T08:50:09.615Z");
                                        employeeName = "ipsum";
                                        eventTypeName = "unde";
                                        text = "nulla";
                                        typeId = 714376;
                                    }}),
                                    add(new BillbeeInterfacesOrderHistoryEntry() {{
                                        created = OffsetDateTime.parse("2022-07-12T20:12:10.758Z");
                                        employeeName = "quia";
                                        eventTypeName = "nostrum";
                                        text = "omnis";
                                        typeId = 727250;
                                    }}),
                                }};
                                id = "1abda8c0-70e1-4084-8b06-72d1ad879eeb";
                                invoiceAddress = new BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel() {{
                                    billbeeId = 575078L;
                                    city = "Hellenbury";
                                    company = "Larkin, Hermiston and Towne";
                                    country = "Virgin Islands, British";
                                    countryIso2 = "cum";
                                    email = "Abigayle_Crona91@hotmail.com";
                                    firstName = "Alexys";
                                    houseNumber = "expedita";
                                    lastName = "Torp";
                                    line2 = "eos";
                                    nameAddition = "quibusdam";
                                    phone = "611.469.2962 x631";
                                    state = "unde";
                                    street = "9512 Colin Track";
                                    zip = "officia";
                                }};;
                                invoiceDate = OffsetDateTime.parse("2022-03-29T07:53:10.726Z");
                                invoiceNumber = 898961;
                                invoiceNumberPostfix = "corporis";
                                invoiceNumberPrefix = "qui";
                                isCancelationFor = "expedita";
                                isFromBillbeeApi = false;
                                languageCode = "voluptatum";
                                lastModifiedAt = OffsetDateTime.parse("2022-05-07T19:45:21.246Z");
                                merchantVatId = "placeat";
                                orderItems = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput[]{{
                                    add(new BillbeeInterfacesBillbeeAPIModelOrderItemInput() {{
                                        attributes = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute[]{{
                                            add(new BillbeeInterfacesBillbeeAPIModelOrderItemAttribute() {{
                                                id = "7c6454ef-b0b3-4489-ac3c-a5acfbe2fd57";
                                                name = "Viola Hane";
                                                price = 5678.46;
                                                value = "dolores";
                                            }}),
                                        }};
                                        billbeeId = 621169L;
                                        discount = 850.76;
                                        dontAdjustStock = false;
                                        getPriceFromArticleIfAny = false;
                                        invoiceSKU = "ducimus";
                                        isCoupon = false;
                                        product = new BillbeeInterfacesBillbeeAPIModelSoldProductInput() {{
                                            billbeeId = 452729L;
                                            countryOfOrigin = "pariatur";
                                            ean = "itaque";
                                            id = "ac646ecb-5734-409e-beb1-e5a2b12eb07f";
                                            images = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelProductImage[]{{
                                                add(new BillbeeInterfacesBillbeeAPIModelProductImage() {{
                                                    externalId = "quasi";
                                                    isDefaultImage = false;
                                                    position = 386447;
                                                    url = "pariatur";
                                                }}),
                                            }};
                                            isDigital = false;
                                            oldId = "libero";
                                            platformData = "excepturi";
                                            sku = "occaecati";
                                            taricCode = "nemo";
                                            title = "Mrs.";
                                            type = 342342;
                                            weight = 988749;
                                        }};
                                        quantity = 7573.64;
                                        serialNumber = "sint";
                                        shippingProfileId = "enim";
                                        taxAmount = 9449.5;
                                        taxIndex = 657319;
                                        totalPrice = 5597.74;
                                        transactionId = "totam";
                                        unrebatedTotalPrice = 5646.67;
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelOrderItemInput() {{
                                        attributes = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute[]{{
                                            add(new BillbeeInterfacesBillbeeAPIModelOrderItemAttribute() {{
                                                id = "0e189dbb-30fc-4b33-aa05-5b197cd44e2f";
                                                name = "Louise Schulist";
                                                price = 8634.77;
                                                value = "amet";
                                            }}),
                                            add(new BillbeeInterfacesBillbeeAPIModelOrderItemAttribute() {{
                                                id = "513bb6f4-8b65-46bc-9b35-ff2e4b27537a";
                                                name = "Delbert Stehr";
                                                price = 4956.17;
                                                value = "dolor";
                                            }}),
                                        }};
                                        billbeeId = 118041L;
                                        discount = 6228.94;
                                        dontAdjustStock = false;
                                        getPriceFromArticleIfAny = false;
                                        invoiceSKU = "porro";
                                        isCoupon = false;
                                        product = new BillbeeInterfacesBillbeeAPIModelSoldProductInput() {{
                                            billbeeId = 111496L;
                                            countryOfOrigin = "dignissimos";
                                            ean = "esse";
                                            id = "d525f77b-114e-4eb5-aff7-85fc37814d4c";
                                            images = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelProductImage[]{{
                                                add(new BillbeeInterfacesBillbeeAPIModelProductImage() {{
                                                    externalId = "laudantium";
                                                    isDefaultImage = false;
                                                    position = 921719;
                                                    url = "consequatur";
                                                }}),
                                                add(new BillbeeInterfacesBillbeeAPIModelProductImage() {{
                                                    externalId = "maxime";
                                                    isDefaultImage = false;
                                                    position = 136357;
                                                    url = "nam";
                                                }}),
                                                add(new BillbeeInterfacesBillbeeAPIModelProductImage() {{
                                                    externalId = "expedita";
                                                    isDefaultImage = false;
                                                    position = 559174;
                                                    url = "provident";
                                                }}),
                                            }};
                                            isDigital = false;
                                            oldId = "repudiandae";
                                            platformData = "rerum";
                                            sku = "dignissimos";
                                            taricCode = "corporis";
                                            title = "Dr.";
                                            type = 629377;
                                            weight = 833982;
                                        }};
                                        quantity = 4348.27;
                                        serialNumber = "dolorem";
                                        shippingProfileId = "commodi";
                                        taxAmount = 7712.26;
                                        taxIndex = 415033;
                                        totalPrice = 121.71;
                                        transactionId = "voluptatem";
                                        unrebatedTotalPrice = 3228.29;
                                    }}),
                                }};
                                orderNumber = "quae";
                                paidAmount = 2295.67;
                                payedAt = OffsetDateTime.parse("2021-06-24T23:38:28.956Z");
                                paymentInstruction = "quidem";
                                paymentMethod = BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum.ONE_HUNDRED_AND_SIX;
                                paymentReference = "amet";
                                paymentTransactionId = "quasi";
                                payments = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment[]{{
                                    add(new BillbeeInterfacesBillbeeAPIModelsOrderPayment() {{
                                        billbeeId = 514922L;
                                        name = "Lana Kris";
                                        payDate = OffsetDateTime.parse("2021-03-16T11:48:43.064Z");
                                        payValue = 5928.8;
                                        paymentType = 920272;
                                        purpose = "consequatur";
                                        sourceTechnology = "nemo";
                                        sourceText = "molestiae";
                                        transactionId = "itaque";
                                    }}),
                                }};
                                restoredAt = OffsetDateTime.parse("2021-11-28T13:56:44.956Z");
                                seller = new BillbeeInterfacesBillbeeAPIModelOrderUserInput() {{
                                    billbeeShopId = 43975L;
                                    billbeeShopName = "sint";
                                    email = "Chauncey3@hotmail.com";
                                    firstName = "Deion";
                                    id = "31f3981d-4c70-40b6-87f3-c93c73b9da3f";
                                    lastName = "Collier";
                                    nick = "quo";
                                    platform = "itaque";
                                }};;
                                sellerComment = "illum";
                                shipWeightKg = 6707.62;
                                shippedAt = OffsetDateTime.parse("2022-02-15T03:44:39.464Z");
                                shippingAddress = new BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel() {{
                                    billbeeId = 185348L;
                                    city = "Fort Brant";
                                    company = "Heller and Sons";
                                    country = "Egypt";
                                    countryIso2 = "ab";
                                    email = "Tyree.Nolan71@gmail.com";
                                    firstName = "Issac";
                                    houseNumber = "exercitationem";
                                    lastName = "Green";
                                    line2 = "numquam";
                                    nameAddition = "repudiandae";
                                    phone = "518-601-5346 x373";
                                    state = "sit";
                                    street = "41648 Jarret Glens";
                                    zip = "reiciendis";
                                }};;
                                shippingCost = 662.07;
                                shippingIds = new org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelShipment[]{{
                                    add(new BillbeeInterfacesBillbeeAPIModelShipment() {{
                                        billbeeId = 13865L;
                                        created = OffsetDateTime.parse("2022-02-02T05:53:12.433Z");
                                        shipmentType = 483753;
                                        shipper = "commodi";
                                        shippingCarrier = 256114;
                                        shippingId = "dolorum";
                                        shippingProviderId = 823718L;
                                        shippingProviderProductId = 452399L;
                                        trackingUrl = "consectetur";
                                    }}),
                                    add(new BillbeeInterfacesBillbeeAPIModelShipment() {{
                                        billbeeId = 200637L;
                                        created = OffsetDateTime.parse("2022-01-26T17:47:50.539Z");
                                        shipmentType = 791228;
                                        shipper = "sunt";
                                        shippingCarrier = 715143;
                                        shippingId = "iusto";
                                        shippingProviderId = 558051L;
                                        shippingProviderProductId = 91728L;
                                        trackingUrl = "facilis";
                                    }}),
                                }};
                                shippingProfileId = "amet";
                                shippingProfileName = "autem";
                                shippingProviderId = 685415L;
                                shippingProviderName = "alias";
                                shippingProviderProductId = 526413L;
                                shippingProviderProductName = "aut";
                                state = BillbeeInterfacesBillbeeAPIModelOrderStateEnum.NINE;
                                tags = new String[]{{
                                    add("repellendus"),
                                    add("veritatis"),
                                    add("quae"),
                                }};
                                taxRate1 = 510.75;
                                taxRate2 = 9048.27;
                                totalCost = 9655.17;
                                updatedAt = OffsetDateTime.parse("2021-04-13T22:16:25.275Z");
                                vatId = "officia";
                                vatMode = BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum.ZERO;
                            }};) {{
                shopId = 30208L;
            }};            

            OrderApiPostNewOrderJsonResponse res = sdk.orders.orderApiPostNewOrderJson(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiPostNewOrderRaw

To create an order POST an JSON object to the orders endpoint with the shown properties.
Not all properties are required.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiPostNewOrderRawRequest;
import org.openapis.openapi.models.operations.OrderApiPostNewOrderRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCommentAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemAttribute;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderItemInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderStateEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderUserInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelProductImage;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelShipment;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelSoldProductInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
import org.openapis.openapi.models.shared.BillbeeInterfacesBillbeeAPIModelsOrderPayment;
import org.openapis.openapi.models.shared.BillbeeInterfacesOrderHistoryEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiPostNewOrderRawRequest req = new OrderApiPostNewOrderRawRequest("alias".getBytes()) {{
                shopId = 910073L;
            }};            

            OrderApiPostNewOrderRawResponse res = sdk.orders.orderApiPostNewOrderRaw(req);

            if (res.rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiSendMessageForm

Sends a message to the buyer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiSendMessageFormRequest;
import org.openapis.openapi.models.operations.OrderApiSendMessageFormResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiSendMessageFormRequest req = new OrderApiSendMessageFormRequest(                new RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel() {{
                                alternativeMail = "hic";
                                body = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "incidunt";
                                        text = "qui";
                                    }}),
                                }};
                                sendMode = RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum.ZERO;
                                subject = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "harum";
                                        text = "explicabo";
                                    }}),
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "beatae";
                                        text = "aliquid";
                                    }}),
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "modi";
                                        text = "optio";
                                    }}),
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "voluptatibus";
                                        text = "molestias";
                                    }}),
                                }};
                            }};, 639463L);            

            OrderApiSendMessageFormResponse res = sdk.orders.orderApiSendMessageForm(req);

            if (res.orderApiSendMessageForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiSendMessageJson

Sends a message to the buyer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiSendMessageJsonRequest;
import org.openapis.openapi.models.operations.OrderApiSendMessageJsonResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiSendMessageJsonRequest req = new OrderApiSendMessageJsonRequest(                new RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel() {{
                                alternativeMail = "libero";
                                body = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "sequi";
                                        text = "aliquid";
                                    }}),
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "ea";
                                        text = "impedit";
                                    }}),
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "ducimus";
                                        text = "odit";
                                    }}),
                                }};
                                sendMode = RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum.ONE;
                                subject = new org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString[]{{
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "repellat";
                                        text = "nulla";
                                    }}),
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "laborum";
                                        text = "natus";
                                    }}),
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "accusamus";
                                        text = "doloremque";
                                    }}),
                                    add(new BillbeeInterfacesOrderMultiLanguageString() {{
                                        languageCode = "nisi";
                                        text = "rerum";
                                    }}),
                                }};
                            }};, 924840L);            

            OrderApiSendMessageJsonResponse res = sdk.orders.orderApiSendMessageJson(req);

            if (res.orderApiSendMessageJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiSendMessageRaw

Sends a message to the buyer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiSendMessageRawRequest;
import org.openapis.openapi.models.operations.OrderApiSendMessageRawResponse;
import org.openapis.openapi.models.shared.BillbeeInterfacesOrderMultiLanguageString;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiSendMessageRawRequest req = new OrderApiSendMessageRawRequest("voluptates".getBytes(), 251627L);            

            OrderApiSendMessageRawResponse res = sdk.orders.orderApiSendMessageRaw(req);

            if (res.orderApiSendMessageRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiTagsCreateForm

When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiTagsCreateFormRequest;
import org.openapis.openapi.models.operations.OrderApiTagsCreateFormResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderTagCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiTagsCreateFormRequest req = new OrderApiTagsCreateFormRequest(                new RechnungsdruckWebAppControllersApiOrderTagCreate() {{
                                tags = new String[]{{
                                    add("quia"),
                                    add("ullam"),
                                    add("quisquam"),
                                }};
                            }};, 120277L);            

            OrderApiTagsCreateFormResponse res = sdk.orders.orderApiTagsCreateForm(req);

            if (res.orderApiTagsCreateForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiTagsCreateJson

When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiTagsCreateJsonRequest;
import org.openapis.openapi.models.operations.OrderApiTagsCreateJsonResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderTagCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiTagsCreateJsonRequest req = new OrderApiTagsCreateJsonRequest(                new RechnungsdruckWebAppControllersApiOrderTagCreate() {{
                                tags = new String[]{{
                                    add("eligendi"),
                                    add("quae"),
                                    add("officiis"),
                                    add("architecto"),
                                }};
                            }};, 100251L);            

            OrderApiTagsCreateJsonResponse res = sdk.orders.orderApiTagsCreateJson(req);

            if (res.orderApiTagsCreateJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiTagsCreateRaw

When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiTagsCreateRawRequest;
import org.openapis.openapi.models.operations.OrderApiTagsCreateRawResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderTagCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiTagsCreateRawRequest req = new OrderApiTagsCreateRawRequest("enim".getBytes(), 758985L);            

            OrderApiTagsCreateRawResponse res = sdk.orders.orderApiTagsCreateRaw(req);

            if (res.orderApiTagsCreateRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiTagsUpdateForm

All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiTagsUpdateFormRequest;
import org.openapis.openapi.models.operations.OrderApiTagsUpdateFormResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderTagCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiTagsUpdateFormRequest req = new OrderApiTagsUpdateFormRequest(                new RechnungsdruckWebAppControllersApiOrderTagCreate() {{
                                tags = new String[]{{
                                    add("perferendis"),
                                    add("facilis"),
                                    add("reiciendis"),
                                }};
                            }};, 955551L);            

            OrderApiTagsUpdateFormResponse res = sdk.orders.orderApiTagsUpdateForm(req);

            if (res.orderApiTagsUpdateForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiTagsUpdateJson

All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiTagsUpdateJsonRequest;
import org.openapis.openapi.models.operations.OrderApiTagsUpdateJsonResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderTagCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiTagsUpdateJsonRequest req = new OrderApiTagsUpdateJsonRequest(                new RechnungsdruckWebAppControllersApiOrderTagCreate() {{
                                tags = new String[]{{
                                    add("dicta"),
                                    add("quos"),
                                    add("ullam"),
                                }};
                            }};, 295950L);            

            OrderApiTagsUpdateJsonResponse res = sdk.orders.orderApiTagsUpdateJson(req);

            if (res.orderApiTagsUpdateJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiTagsUpdateRaw

All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiTagsUpdateRawRequest;
import org.openapis.openapi.models.operations.OrderApiTagsUpdateRawResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderTagCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiTagsUpdateRawRequest req = new OrderApiTagsUpdateRawRequest("modi".getBytes(), 929292L);            

            OrderApiTagsUpdateRawResponse res = sdk.orders.orderApiTagsUpdateRaw(req);

            if (res.orderApiTagsUpdateRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiTriggerEventForm

Triggers a rule event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiTriggerEventFormRequest;
import org.openapis.openapi.models.operations.OrderApiTriggerEventFormResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiTriggerEventFormRequest req = new OrderApiTriggerEventFormRequest(                new RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer() {{
                                delayInMinutes = 807419;
                                name = "Kathryn Shields";
                            }};, 773711L);            

            OrderApiTriggerEventFormResponse res = sdk.orders.orderApiTriggerEventForm(req);

            if (res.orderApiTriggerEventForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiTriggerEventJson

Triggers a rule event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiTriggerEventJsonRequest;
import org.openapis.openapi.models.operations.OrderApiTriggerEventJsonResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiTriggerEventJsonRequest req = new OrderApiTriggerEventJsonRequest(                new RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer() {{
                                delayInMinutes = 783397;
                                name = "Ms. Jimmie Wisozk";
                            }};, 458412L);            

            OrderApiTriggerEventJsonResponse res = sdk.orders.orderApiTriggerEventJson(req);

            if (res.orderApiTriggerEventJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiTriggerEventRaw

Triggers a rule event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiTriggerEventRawRequest;
import org.openapis.openapi.models.operations.OrderApiTriggerEventRawResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiTriggerEventRawRequest req = new OrderApiTriggerEventRawRequest("iure".getBytes(), 485031L);            

            OrderApiTriggerEventRawResponse res = sdk.orders.orderApiTriggerEventRaw(req);

            if (res.orderApiTriggerEventRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiUpdateStateForm

### REMARKS ###
Use this call to change the state of an order to i.e. paid or sent.

The state is transfered to the external shop/marketplace if configured.
This is the list of known states:
- 1: ordered
- 2: confirmed
- 3: paid
- 4: shipped
- 5: reclamation
- 6: deleted
- 7: closed
- 8: canceled
- 9: archived
- 10: not used
- 11: demand note 1
- 12: demand note 2
- 13: packed
- 14: offered
- 15: payment reminder
- 16: fulfilling

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiUpdateStateFormRequest;
import org.openapis.openapi.models.operations.OrderApiUpdateStateFormResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderStateUpdate;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderStateUpdateNewStateIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiUpdateStateFormRequest req = new OrderApiUpdateStateFormRequest(                new RechnungsdruckWebAppControllersApiOrderStateUpdate() {{
                                newStateId = RechnungsdruckWebAppControllersApiOrderStateUpdateNewStateIdEnum.FOUR;
                            }};, 895513L);            

            OrderApiUpdateStateFormResponse res = sdk.orders.orderApiUpdateStateForm(req);

            if (res.orderApiUpdateStateForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiUpdateStateJson

### REMARKS ###
Use this call to change the state of an order to i.e. paid or sent.

The state is transfered to the external shop/marketplace if configured.
This is the list of known states:
- 1: ordered
- 2: confirmed
- 3: paid
- 4: shipped
- 5: reclamation
- 6: deleted
- 7: closed
- 8: canceled
- 9: archived
- 10: not used
- 11: demand note 1
- 12: demand note 2
- 13: packed
- 14: offered
- 15: payment reminder
- 16: fulfilling

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiUpdateStateJsonRequest;
import org.openapis.openapi.models.operations.OrderApiUpdateStateJsonResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderStateUpdate;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderStateUpdateNewStateIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiUpdateStateJsonRequest req = new OrderApiUpdateStateJsonRequest(                new RechnungsdruckWebAppControllersApiOrderStateUpdate() {{
                                newStateId = RechnungsdruckWebAppControllersApiOrderStateUpdateNewStateIdEnum.SEVEN;
                            }};, 208683L);            

            OrderApiUpdateStateJsonResponse res = sdk.orders.orderApiUpdateStateJson(req);

            if (res.orderApiUpdateStateJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiUpdateStateRaw

### REMARKS ###
Use this call to change the state of an order to i.e. paid or sent.

The state is transfered to the external shop/marketplace if configured.
This is the list of known states:
- 1: ordered
- 2: confirmed
- 3: paid
- 4: shipped
- 5: reclamation
- 6: deleted
- 7: closed
- 8: canceled
- 9: archived
- 10: not used
- 11: demand note 1
- 12: demand note 2
- 13: packed
- 14: offered
- 15: payment reminder
- 16: fulfilling

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiUpdateStateRawRequest;
import org.openapis.openapi.models.operations.OrderApiUpdateStateRawResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderStateUpdate;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiOrderStateUpdateNewStateIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiUpdateStateRawRequest req = new OrderApiUpdateStateRawRequest("corporis".getBytes(), 375350L);            

            OrderApiUpdateStateRawResponse res = sdk.orders.orderApiUpdateStateRaw(req);

            if (res.orderApiUpdateStateRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSearchForm

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSearchFormResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel req = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel() {{
                searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum.ZERO;
                term = "officia";
                type = new String[]{{
                    add("distinctio"),
                    add("eius"),
                }};
            }};            

            SearchSearchFormResponse res = sdk.orders.searchSearchForm(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSearchJson

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSearchJsonResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel req = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel() {{
                searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum.ZERO;
                term = "rem";
                type = new String[]{{
                    add("accusantium"),
                    add("veniam"),
                    add("saepe"),
                    add("neque"),
                }};
            }};            

            SearchSearchJsonResponse res = sdk.orders.searchSearchJson(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSearchRaw

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSearchRawResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "facere".getBytes()            

            SearchSearchRawResponse res = sdk.orders.searchSearchRaw(req);

            if (res.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
