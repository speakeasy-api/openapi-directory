# terminalOrdersMerchantLevel

### Available Operations

* [getMerchantsMerchantIdBillingEntities](#getmerchantsmerchantidbillingentities) - Get a list of billing entities
* [getMerchantsMerchantIdShippingLocations](#getmerchantsmerchantidshippinglocations) - Get a list of shipping locations
* [getMerchantsMerchantIdTerminalModels](#getmerchantsmerchantidterminalmodels) - Get a list of terminal models
* [getMerchantsMerchantIdTerminalOrders](#getmerchantsmerchantidterminalorders) - Get a list of orders
* [getMerchantsMerchantIdTerminalOrdersOrderId](#getmerchantsmerchantidterminalordersorderid) - Get an order
* [getMerchantsMerchantIdTerminalProducts](#getmerchantsmerchantidterminalproducts) - Get a list of terminal products
* [patchMerchantsMerchantIdTerminalOrdersOrderId](#patchmerchantsmerchantidterminalordersorderid) - Update an order
* [postMerchantsMerchantIdShippingLocations](#postmerchantsmerchantidshippinglocations) - Create a shipping location
* [postMerchantsMerchantIdTerminalOrders](#postmerchantsmerchantidterminalorders) - Create an order
* [postMerchantsMerchantIdTerminalOrdersOrderIdCancel](#postmerchantsmerchantidterminalordersorderidcancel) - Cancel an order

## getMerchantsMerchantIdBillingEntities

Returns the billing entities of the merchant account identified in the path.
A billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdBillingEntitiesRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdBillingEntitiesResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdBillingEntitiesSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdBillingEntitiesRequest req = new GetMerchantsMerchantIdBillingEntitiesRequest("et") {{
                name = "Ms. Olive Tillman";
            }};            

            GetMerchantsMerchantIdBillingEntitiesResponse res = sdk.terminalOrdersMerchantLevel.getMerchantsMerchantIdBillingEntities(req, new GetMerchantsMerchantIdBillingEntitiesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.billingEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdShippingLocations

Returns the shipping locations for the merchant account identified in the path.
A shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdShippingLocationsRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdShippingLocationsResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdShippingLocationsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdShippingLocationsRequest req = new GetMerchantsMerchantIdShippingLocationsRequest("nam") {{
                limit = 877131;
                name = "Frances Turner";
                offset = 473221;
            }};            

            GetMerchantsMerchantIdShippingLocationsResponse res = sdk.terminalOrdersMerchantLevel.getMerchantsMerchantIdShippingLocations(req, new GetMerchantsMerchantIdShippingLocationsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.shippingLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdTerminalModels

Returns the payment terminal models that merchant account identified in the path has access to. The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalModelsRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalModelsResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalModelsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdTerminalModelsRequest req = new GetMerchantsMerchantIdTerminalModelsRequest("rerum");            

            GetMerchantsMerchantIdTerminalModelsResponse res = sdk.terminalOrdersMerchantLevel.getMerchantsMerchantIdTerminalModels(req, new GetMerchantsMerchantIdTerminalModelsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.terminalModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdTerminalOrders

Returns a list of terminal products orders for the merchant account identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalOrdersRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalOrdersResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalOrdersSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdTerminalOrdersRequest req = new GetMerchantsMerchantIdTerminalOrdersRequest("occaecati") {{
                customerOrderReference = "minima";
                limit = 716244;
                offset = 756779;
                status = "sit";
            }};            

            GetMerchantsMerchantIdTerminalOrdersResponse res = sdk.terminalOrdersMerchantLevel.getMerchantsMerchantIdTerminalOrders(req, new GetMerchantsMerchantIdTerminalOrdersSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.terminalOrdersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdTerminalOrdersOrderId

Returns the details of the terminal products order identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalOrdersOrderIdRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalOrdersOrderIdResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalOrdersOrderIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdTerminalOrdersOrderIdRequest req = new GetMerchantsMerchantIdTerminalOrdersOrderIdRequest("culpa", "tempore");            

            GetMerchantsMerchantIdTerminalOrdersOrderIdResponse res = sdk.terminalOrdersMerchantLevel.getMerchantsMerchantIdTerminalOrdersOrderId(req, new GetMerchantsMerchantIdTerminalOrdersOrderIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.terminalOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdTerminalProducts

Returns a country-specific list of payment terminal packages and parts that the merchant account identified in the path has access to.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalProductsRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalProductsResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdTerminalProductsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdTerminalProductsRequest req = new GetMerchantsMerchantIdTerminalProductsRequest("adipisci", "cumque") {{
                limit = 160538;
                offset = 9766;
                terminalModelId = "minus";
            }};            

            GetMerchantsMerchantIdTerminalProductsResponse res = sdk.terminalOrdersMerchantLevel.getMerchantsMerchantIdTerminalProducts(req, new GetMerchantsMerchantIdTerminalProductsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.terminalProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchMerchantsMerchantIdTerminalOrdersOrderId

Updates the terminal products order identified in the path.
Updating is only possible while the order has the status **Placed**.

The request body only needs to contain what you want to change. 
However, to update the products in the `items` array, you must provice the entire array. For example, if the array has three items:
 To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdTerminalOrdersOrderIdResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdTerminalOrdersOrderIdSecurity;
import org.openapis.openapi.models.shared.OrderItem;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TerminalOrderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest req = new PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest("quaerat", "sapiente") {{
                terminalOrderRequest = new TerminalOrderRequest() {{
                    billingEntityId = "consectetur";
                    customerOrderReference = "esse";
                    items = new org.openapis.openapi.models.shared.OrderItem[]{{
                        add(new OrderItem() {{
                            id = "9fd871f9-9dd2-4efd-921a-a6f1e674bdb0";
                            installments = 306986L;
                            name = "Samuel Hermiston";
                            quantity = 391774;
                        }}),
                        add(new OrderItem() {{
                            id = "082d68ea-19f1-4d17-8513-39d08086a184";
                            installments = 32465L;
                            name = "Toni Fritsch";
                            quantity = 376226;
                        }}),
                        add(new OrderItem() {{
                            id = "071f93f5-f064-42da-87af-515cc413aa63";
                            installments = 633931L;
                            name = "Clay Larson";
                            quantity = 497678;
                        }}),
                    }};
                    shippingLocationId = "quos";
                    taxId = "vel";
                }};;
            }};            

            PatchMerchantsMerchantIdTerminalOrdersOrderIdResponse res = sdk.terminalOrdersMerchantLevel.patchMerchantsMerchantIdTerminalOrdersOrderId(req, new PatchMerchantsMerchantIdTerminalOrdersOrderIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.terminalOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdShippingLocations

Creates a shipping location for the merchant account identified in the path. A shipping location defines an address where orders can be shipped to. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdShippingLocationsRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdShippingLocationsResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdShippingLocationsSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.ShippingLocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdShippingLocationsRequest req = new PostMerchantsMerchantIdShippingLocationsRequest("labore") {{
                shippingLocation = new ShippingLocation() {{
                    address = new Address() {{
                        city = "Ponce";
                        companyName = "cum";
                        country = "Iraq";
                        postalCode = "39839";
                        stateOrProvince = "aliquid";
                        streetAddress = "aperiam";
                        streetAddress2 = "cum";
                    }};;
                    contact = new Contact() {{
                        email = "Isobel_Heidenreich25@gmail.com";
                        firstName = "Winona";
                        infix = "suscipit";
                        lastName = "Wisozk";
                        phoneNumber = "quidem";
                    }};;
                    id = "ee41f333-17fe-435b-a0eb-1ea426555ba3";
                    name = "Ernest Labadie";
                }};;
            }};            

            PostMerchantsMerchantIdShippingLocationsResponse res = sdk.terminalOrdersMerchantLevel.postMerchantsMerchantIdShippingLocations(req, new PostMerchantsMerchantIdShippingLocationsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.shippingLocation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdTerminalOrders

Creates an order for payment terminal products for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdTerminalOrdersRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdTerminalOrdersResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdTerminalOrdersSecurity;
import org.openapis.openapi.models.shared.OrderItem;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TerminalOrderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdTerminalOrdersRequest req = new PostMerchantsMerchantIdTerminalOrdersRequest("aliquam") {{
                terminalOrderRequest = new TerminalOrderRequest() {{
                    billingEntityId = "officiis";
                    customerOrderReference = "temporibus";
                    items = new org.openapis.openapi.models.shared.OrderItem[]{{
                        add(new OrderItem() {{
                            id = "3b88f3a8-d8f5-4c0b-af2f-b7b194a276b2";
                            installments = 378326L;
                            name = "Joe Hoppe";
                            quantity = 72434;
                        }}),
                        add(new OrderItem() {{
                            id = "f08f4294-e369-48f4-87f6-03e8b445e80c";
                            installments = 625637L;
                            name = "Lorraine Walsh";
                            quantity = 168576;
                        }}),
                    }};
                    shippingLocationId = "aperiam";
                    taxId = "saepe";
                }};;
            }};            

            PostMerchantsMerchantIdTerminalOrdersResponse res = sdk.terminalOrdersMerchantLevel.postMerchantsMerchantIdTerminalOrders(req, new PostMerchantsMerchantIdTerminalOrdersSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.terminalOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdTerminalOrdersOrderIdCancel

Cancels the terminal products order identified in the path.
Cancelling is only possible while the order has the status **Placed**.
To cancel an order, make a POST call without a request body. The response returns the full order details, but with the status changed to **Cancelled**.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest req = new PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest("numquam", "veniam");            

            PostMerchantsMerchantIdTerminalOrdersOrderIdCancelResponse res = sdk.terminalOrdersMerchantLevel.postMerchantsMerchantIdTerminalOrdersOrderIdCancel(req, new PostMerchantsMerchantIdTerminalOrdersOrderIdCancelSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.terminalOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
