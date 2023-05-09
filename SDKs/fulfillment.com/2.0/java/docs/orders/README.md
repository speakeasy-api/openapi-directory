# orders

## Overview

Creating, viewing, and canceling orders.

### Available Operations

* [deleteOrdersId](#deleteordersid) - Cancel an Order
* [getOrders](#getorders) - List of Orders
* [getOrder](#getorder) - Order Details
* [postOrders](#postorders) - New Order

## deleteOrdersId

Request an order is canceled to prevent shipment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrdersIdRequest;
import org.openapis.openapi.models.operations.DeleteOrdersIdResponse;
import org.openapis.openapi.models.operations.DeleteOrdersIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteOrdersIdRequest req = new DeleteOrdersIdRequest(582020);            

            DeleteOrdersIdResponse res = sdk.orders.deleteOrdersId(req, new DeleteOrdersIdSecurity("fugit") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.oneordersPostResponses201ContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrders

Retrieve many orders at once

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrdersRequest;
import org.openapis.openapi.models.operations.GetOrdersResponse;
import org.openapis.openapi.models.operations.GetOrdersSecurity;
import org.openapis.openapi.models.shared.HydrateParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrdersRequest req = new GetOrdersRequest("deleniti", "hic") {{
                hydrate = new org.openapis.openapi.models.shared.HydrateParamEnum[]{{
                    add(HydrateParamEnum.LINE_ITEMS),
                    add(HydrateParamEnum.INTEGRATOR),
                    add(HydrateParamEnum.LINE_ITEMS),
                    add(HydrateParamEnum.LINE_ITEMS),
                }};
                limit = 264555L;
                merchantIds = new Long[]{{
                    add(774234L),
                }};
                page = 736918L;
                warehouseIds = new Long[]{{
                    add(216550L),
                    add(568434L),
                }};
            }};            

            GetOrdersResponse res = sdk.orders.getOrders(req, new GetOrdersSecurity("aspernatur") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderResponseOneOfV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrder

For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderRequest;
import org.openapis.openapi.models.operations.GetOrderResponse;
import org.openapis.openapi.models.operations.GetOrderSecurity;
import org.openapis.openapi.models.shared.HydrateParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderRequest req = new GetOrderRequest("perferendis") {{
                hydrate = new org.openapis.openapi.models.shared.HydrateParamEnum[]{{
                    add(HydrateParamEnum.LINE_ITEMS),
                    add(HydrateParamEnum.INTEGRATOR),
                }};
                merchantId = 612096L;
            }};            

            GetOrderResponse res = sdk.orders.getOrder(req, new GetOrderSecurity("dolor") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.oneordersGetResponses200ContentApplication1jsonSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOrders

Error Notes&#58;
* When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOrdersOrderRequestV2;
import org.openapis.openapi.models.operations.PostOrdersOrderRequestV2ConsigneeNewV2;
import org.openapis.openapi.models.operations.PostOrdersOrderRequestV2IntegratorEnum;
import org.openapis.openapi.models.operations.PostOrdersOrderRequestV2Items;
import org.openapis.openapi.models.operations.PostOrdersOrderRequestV2Warehouse;
import org.openapis.openapi.models.operations.PostOrdersResponse;
import org.openapis.openapi.models.operations.PostOrdersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOrdersOrderRequestV2 req = new PostOrdersOrderRequestV2(                new org.openapis.openapi.models.operations.PostOrdersOrderRequestV2Items[]{{
                                add(new PostOrdersOrderRequestV2Items("129.99", 902599L, "fuga") {{
                                    declaredValue = "129.99";
                                    quantity = 386489L;
                                    sku = "hic";
                                }}),
                                add(new PostOrdersOrderRequestV2Items("129.99", 613064L, "iure") {{
                                    declaredValue = "129.99";
                                    quantity = 449950L;
                                    sku = "corporis";
                                }}),
                                add(new PostOrdersOrderRequestV2Items("129.99", 99280L, "ipsa") {{
                                    declaredValue = "129.99";
                                    quantity = 902349L;
                                    sku = "quidem";
                                }}),
                            }}, "reiciendis",                 new PostOrdersOrderRequestV2ConsigneeNewV2("est", "mollitia", "laborum", "dolores", "dolorem", "corporis", "explicabo", "nobis") {{
                                address2 = "enim";
                                companyName = "omnis";
                                postalCode = "35046";
                            }};, "Ground") {{
                integrator = PostOrdersOrderRequestV2IntegratorEnum.YAHOO;
                merchantId = 958950L;
                notes = "architecto";
                warehouse = new PostOrdersOrderRequestV2Warehouse() {{
                    id = 652790L;
                }};;
            }};            

            PostOrdersResponse res = sdk.orders.postOrders(req, new PostOrdersSecurity("dolorem") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderResponseV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
