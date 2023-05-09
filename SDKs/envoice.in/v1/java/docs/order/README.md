# order

### Available Operations

* [orderApiAll](#orderapiall) - Return all orders for the account
* [orderApiChangeShippingDetailsForm](#orderapichangeshippingdetailsform) - Change order shipping details
* [orderApiChangeShippingDetailsJson](#orderapichangeshippingdetailsjson) - Change order shipping details
* [orderApiChangeShippingDetailsRaw](#orderapichangeshippingdetailsraw) - Change order shipping details
* [orderApiChangeStatusForm](#orderapichangestatusform) - Change order status
* [orderApiChangeStatusJson](#orderapichangestatusjson) - Change order status
* [orderApiChangeStatusRaw](#orderapichangestatusraw) - Change order status
* [orderApiDeleteForm](#orderapideleteform) - Delete an existing order
* [orderApiDeleteJson](#orderapideletejson) - Delete an existing order
* [orderApiDeleteRaw](#orderapideleteraw) - Delete an existing order
* [orderApiDetails](#orderapidetails) - Return order details
* [orderApiNewForm](#orderapinewform) - Create an order
* [orderApiNewJson](#orderapinewjson) - Create an order
* [orderApiNewRaw](#orderapinewraw) - Create an order

## orderApiAll

Return all orders for the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiAllRequest;
import org.openapis.openapi.models.operations.OrderApiAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiAllRequest req = new OrderApiAllRequest("corrupti", "maiores") {{
                queryOptionsPage = 274823;
                queryOptionsPageSize = 148478;
            }};            

            OrderApiAllResponse res = sdk.order.orderApiAll(req);

            if (res.listResultOrderDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiChangeShippingDetailsForm

Change order shipping details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiChangeShippingDetailsFormRequest;
import org.openapis.openapi.models.operations.OrderApiChangeShippingDetailsFormResponse;
import org.openapis.openapi.models.shared.OrderShippingDetailsApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiChangeShippingDetailsFormRequest req = new OrderApiChangeShippingDetailsFormRequest(                new OrderShippingDetailsApiModel() {{
                                address = "2824 Lueilwitz Wall";
                                countryId = 271653;
                                email = "Jacklyn.Wisozk@gmail.com";
                                name = "Cecelia Lakin";
                                phoneNumber = "incidunt";
                            }};, 373035, "debitis", "rem");            

            OrderApiChangeShippingDetailsFormResponse res = sdk.order.orderApiChangeShippingDetailsForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiChangeShippingDetailsJson

Change order shipping details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiChangeShippingDetailsJsonRequest;
import org.openapis.openapi.models.operations.OrderApiChangeShippingDetailsJsonResponse;
import org.openapis.openapi.models.shared.OrderShippingDetailsApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiChangeShippingDetailsJsonRequest req = new OrderApiChangeShippingDetailsJsonRequest(                new OrderShippingDetailsApiModel() {{
                                address = "76339 Stoltenberg Crossroad";
                                countryId = 48690;
                                email = "Deondre_Harris@hotmail.com";
                                name = "Marsha Heidenreich";
                                phoneNumber = "laboriosam";
                            }};, 680515, "voluptatum", "error");            

            OrderApiChangeShippingDetailsJsonResponse res = sdk.order.orderApiChangeShippingDetailsJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiChangeShippingDetailsRaw

Change order shipping details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiChangeShippingDetailsRawRequest;
import org.openapis.openapi.models.operations.OrderApiChangeShippingDetailsRawResponse;
import org.openapis.openapi.models.shared.OrderShippingDetailsApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiChangeShippingDetailsRawRequest req = new OrderApiChangeShippingDetailsRawRequest("hic".getBytes(), 710529, "debitis", "neque");            

            OrderApiChangeShippingDetailsRawResponse res = sdk.order.orderApiChangeShippingDetailsRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiChangeStatusForm

Change order status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiChangeStatusFormRequest;
import org.openapis.openapi.models.operations.OrderApiChangeStatusFormResponse;
import org.openapis.openapi.models.shared.ChangeOrderStatusApiModel;
import org.openapis.openapi.models.shared.ChangeOrderStatusApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiChangeStatusFormRequest req = new OrderApiChangeStatusFormRequest(                new ChangeOrderStatusApiModel() {{
                                id = 677115;
                                reason = "nostrum";
                                status = ChangeOrderStatusApiModelStatusEnum.CANCELLED;
                            }};, "dolorum", "corrupti");            

            OrderApiChangeStatusFormResponse res = sdk.order.orderApiChangeStatusForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiChangeStatusJson

Change order status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiChangeStatusJsonRequest;
import org.openapis.openapi.models.operations.OrderApiChangeStatusJsonResponse;
import org.openapis.openapi.models.shared.ChangeOrderStatusApiModel;
import org.openapis.openapi.models.shared.ChangeOrderStatusApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiChangeStatusJsonRequest req = new OrderApiChangeStatusJsonRequest(                new ChangeOrderStatusApiModel() {{
                                id = 879235;
                                reason = "tempora";
                                status = ChangeOrderStatusApiModelStatusEnum.ON_HOLD;
                            }};, "fugit", "ut");            

            OrderApiChangeStatusJsonResponse res = sdk.order.orderApiChangeStatusJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiChangeStatusRaw

Change order status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiChangeStatusRawRequest;
import org.openapis.openapi.models.operations.OrderApiChangeStatusRawResponse;
import org.openapis.openapi.models.shared.ChangeOrderStatusApiModel;
import org.openapis.openapi.models.shared.ChangeOrderStatusApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiChangeStatusRawRequest req = new OrderApiChangeStatusRawRequest("fugiat".getBytes(), "voluptatem", "culpa");            

            OrderApiChangeStatusRawResponse res = sdk.order.orderApiChangeStatusRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiDeleteForm

Delete an existing order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiDeleteFormRequest;
import org.openapis.openapi.models.operations.OrderApiDeleteFormResponse;
import org.openapis.openapi.models.shared.OrderDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiDeleteFormRequest req = new OrderApiDeleteFormRequest(                new OrderDeleteApiModel() {{
                                id = 710337;
                            }};, "magnam", "consequatur");            

            OrderApiDeleteFormResponse res = sdk.order.orderApiDeleteForm(req);

            if (res.orderApiDeleteForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiDeleteJson

Delete an existing order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiDeleteJsonRequest;
import org.openapis.openapi.models.operations.OrderApiDeleteJsonResponse;
import org.openapis.openapi.models.shared.OrderDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiDeleteJsonRequest req = new OrderApiDeleteJsonRequest(                new OrderDeleteApiModel() {{
                                id = 460220;
                            }};, "ipsam", "sit");            

            OrderApiDeleteJsonResponse res = sdk.order.orderApiDeleteJson(req);

            if (res.orderApiDeleteJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiDeleteRaw

Delete an existing order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiDeleteRawRequest;
import org.openapis.openapi.models.operations.OrderApiDeleteRawResponse;
import org.openapis.openapi.models.shared.OrderDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiDeleteRawRequest req = new OrderApiDeleteRawRequest("voluptatum".getBytes(), "quas", "repudiandae");            

            OrderApiDeleteRawResponse res = sdk.order.orderApiDeleteRaw(req);

            if (res.orderApiDeleteRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiDetails

Return order details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiDetailsRequest;
import org.openapis.openapi.models.operations.OrderApiDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiDetailsRequest req = new OrderApiDetailsRequest(361151, "et", "blanditiis");            

            OrderApiDetailsResponse res = sdk.order.orderApiDetails(req);

            if (res.orderFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiNewForm

Create an order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiNewFormRequest;
import org.openapis.openapi.models.operations.OrderApiNewFormResponse;
import org.openapis.openapi.models.shared.OrderAttachmentApiModel;
import org.openapis.openapi.models.shared.OrderAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.OrderBillingDetailsApiModel;
import org.openapis.openapi.models.shared.OrderCreateApiModel;
import org.openapis.openapi.models.shared.OrderCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.OrderItemApiModel;
import org.openapis.openapi.models.shared.OrderShippingDetailsApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiNewFormRequest req = new OrderApiNewFormRequest(                new OrderCreateApiModel() {{
                                afterPaymentDescription = "ex";
                                attachments = new org.openapis.openapi.models.shared.OrderAttachmentApiModel[]{{
                                    add(new OrderAttachmentApiModel() {{
                                        link = "sit";
                                        obfuscatedFileName = "vel";
                                        originalFileName = "nostrum";
                                        size = 906172L;
                                        type = OrderAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                }};
                                couponCode = "consequatur";
                                currencyId = 279068;
                                description = "reiciendis";
                                discountAmount = 2097.5;
                                items = new org.openapis.openapi.models.shared.OrderItemApiModel[]{{
                                    add(new OrderItemApiModel() {{
                                        cost = 1157.03;
                                        description = "architecto";
                                        productItemId = 577140;
                                        quantity = 2897.76;
                                        referenceId = "quidem";
                                        subTotalAmount = 5390.74;
                                        taxAmount = 6719.57;
                                        taxId = 724148;
                                        taxPercentage = 9488.61;
                                        totalAmount = 3888.67;
                                        workTypeId = 2703;
                                    }}),
                                    add(new OrderItemApiModel() {{
                                        cost = 2270.84;
                                        description = "deserunt";
                                        productItemId = 454860;
                                        quantity = 6003.92;
                                        referenceId = "reiciendis";
                                        subTotalAmount = 5887.4;
                                        taxAmount = 8338.19;
                                        taxId = 962771;
                                        taxPercentage = 9147.91;
                                        totalAmount = 168.71;
                                        workTypeId = 667285;
                                    }}),
                                    add(new OrderItemApiModel() {{
                                        cost = 6964.83;
                                        description = "reprehenderit";
                                        productItemId = 813679;
                                        quantity = 6850.92;
                                        referenceId = "praesentium";
                                        subTotalAmount = 6485.98;
                                        taxAmount = 3339.65;
                                        taxId = 29100;
                                        taxPercentage = 7908.4;
                                        totalAmount = 9195.32;
                                        workTypeId = 97243;
                                    }}),
                                }};
                                name = "Mitchell Zboncak";
                                note = "quidem";
                                orderBillingDetails = new OrderBillingDetailsApiModel() {{
                                    address = "042 Jenkins Mill";
                                    countryId = 623295;
                                    email = "Sherman.Thompson@hotmail.com";
                                    name = "Tara Wuckert";
                                    phoneNumber = "error";
                                }};;
                                orderShippingDetails = new OrderShippingDetailsApiModel() {{
                                    address = "3955 Theresia Port";
                                    countryId = 829898;
                                    email = "Vivianne.Baumbach3@gmail.com";
                                    name = "Bonnie Halvorson";
                                    phoneNumber = "a";
                                }};;
                                productId = 562783;
                                referral = "magnam";
                                shippingAmount = 9063.55;
                                shippingDescription = "consequuntur";
                                status = OrderCreateApiModelStatusEnum.ON_HOLD;
                                subTotalAmount = 8863.05;
                                taxAmount = 5979.37;
                                totalAmount = 4463.94;
                                whatHappensNextDescription = "adipisci";
                            }};, "eveniet", "occaecati");            

            OrderApiNewFormResponse res = sdk.order.orderApiNewForm(req);

            if (res.orderApiNewForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiNewJson

Create an order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiNewJsonRequest;
import org.openapis.openapi.models.operations.OrderApiNewJsonResponse;
import org.openapis.openapi.models.shared.OrderAttachmentApiModel;
import org.openapis.openapi.models.shared.OrderAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.OrderBillingDetailsApiModel;
import org.openapis.openapi.models.shared.OrderCreateApiModel;
import org.openapis.openapi.models.shared.OrderCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.OrderItemApiModel;
import org.openapis.openapi.models.shared.OrderShippingDetailsApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiNewJsonRequest req = new OrderApiNewJsonRequest(                new OrderCreateApiModel() {{
                                afterPaymentDescription = "consequuntur";
                                attachments = new org.openapis.openapi.models.shared.OrderAttachmentApiModel[]{{
                                    add(new OrderAttachmentApiModel() {{
                                        link = "id";
                                        obfuscatedFileName = "quis";
                                        originalFileName = "reprehenderit";
                                        size = 625528L;
                                        type = OrderAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                }};
                                couponCode = "corporis";
                                currencyId = 696463;
                                description = "eveniet";
                                discountAmount = 2473.99;
                                items = new org.openapis.openapi.models.shared.OrderItemApiModel[]{{
                                    add(new OrderItemApiModel() {{
                                        cost = 396.15;
                                        description = "iure";
                                        productItemId = 59944;
                                        quantity = 5176.12;
                                        referenceId = "quae";
                                        subTotalAmount = 4746.68;
                                        taxAmount = 9077.33;
                                        taxId = 184362;
                                        taxPercentage = 7398.84;
                                        totalAmount = 4347.61;
                                        workTypeId = 898063;
                                    }}),
                                    add(new OrderItemApiModel() {{
                                        cost = 1875.52;
                                        description = "laborum";
                                        productItemId = 715208;
                                        quantity = 5289.4;
                                        referenceId = "rem";
                                        subTotalAmount = 3044.46;
                                        taxAmount = 3205.65;
                                        taxId = 997963;
                                        taxPercentage = 30.99;
                                        totalAmount = 3621.89;
                                        workTypeId = 597303;
                                    }}),
                                    add(new OrderItemApiModel() {{
                                        cost = 4706.49;
                                        description = "mollitia";
                                        productItemId = 378245;
                                        quantity = 51.89;
                                        referenceId = "maiores";
                                        subTotalAmount = 9702.22;
                                        taxAmount = 1746.58;
                                        taxId = 663866;
                                        taxPercentage = 3279.88;
                                        totalAmount = 2931.44;
                                        workTypeId = 680349;
                                    }}),
                                    add(new OrderItemApiModel() {{
                                        cost = 2003.64;
                                        description = "quae";
                                        productItemId = 925703;
                                        quantity = 6072.49;
                                        referenceId = "quaerat";
                                        subTotalAmount = 4776.46;
                                        taxAmount = 4032.18;
                                        taxId = 284000;
                                        taxPercentage = 6330.62;
                                        totalAmount = 2384.13;
                                        workTypeId = 890653;
                                    }}),
                                }};
                                name = "Andre Hills";
                                note = "provident";
                                orderBillingDetails = new OrderBillingDetailsApiModel() {{
                                    address = "4951 Ava Plains";
                                    countryId = 343392;
                                    email = "Lane.Schuster@yahoo.com";
                                    name = "Ruth Zulauf";
                                    phoneNumber = "in";
                                }};;
                                orderShippingDetails = new OrderShippingDetailsApiModel() {{
                                    address = "966 Gleichner Wall";
                                    countryId = 564064;
                                    email = "Verna69@hotmail.com";
                                    name = "Regina Bode";
                                    phoneNumber = "quae";
                                }};;
                                productId = 21688;
                                referral = "velit";
                                shippingAmount = 1372.51;
                                shippingDescription = "eum";
                                status = OrderCreateApiModelStatusEnum.SHIPPED;
                                subTotalAmount = 5219.96;
                                taxAmount = 8710.83;
                                totalAmount = 7730.84;
                                whatHappensNextDescription = "eos";
                            }};, "sapiente", "eum");            

            OrderApiNewJsonResponse res = sdk.order.orderApiNewJson(req);

            if (res.orderApiNewJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orderApiNewRaw

Create an order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrderApiNewRawRequest;
import org.openapis.openapi.models.operations.OrderApiNewRawResponse;
import org.openapis.openapi.models.shared.OrderAttachmentApiModel;
import org.openapis.openapi.models.shared.OrderAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.OrderBillingDetailsApiModel;
import org.openapis.openapi.models.shared.OrderCreateApiModel;
import org.openapis.openapi.models.shared.OrderCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.OrderItemApiModel;
import org.openapis.openapi.models.shared.OrderShippingDetailsApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrderApiNewRawRequest req = new OrderApiNewRawRequest("dicta".getBytes(), "minima", "beatae");            

            OrderApiNewRawResponse res = sdk.order.orderApiNewRaw(req);

            if (res.orderApiNewRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
