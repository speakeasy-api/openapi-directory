# terminalOrdersCompanyLevel

### Available Operations

* [getCompaniesCompanyIdBillingEntities](#getcompaniescompanyidbillingentities) - Get a list of billing entities
* [getCompaniesCompanyIdShippingLocations](#getcompaniescompanyidshippinglocations) - Get a list of shipping locations
* [getCompaniesCompanyIdTerminalModels](#getcompaniescompanyidterminalmodels) - Get a list of terminal models
* [getCompaniesCompanyIdTerminalOrders](#getcompaniescompanyidterminalorders) - Get a list of orders
* [getCompaniesCompanyIdTerminalOrdersOrderId](#getcompaniescompanyidterminalordersorderid) - Get an order
* [getCompaniesCompanyIdTerminalProducts](#getcompaniescompanyidterminalproducts) - Get a list of terminal products
* [patchCompaniesCompanyIdTerminalOrdersOrderId](#patchcompaniescompanyidterminalordersorderid) - Update an order
* [postCompaniesCompanyIdShippingLocations](#postcompaniescompanyidshippinglocations) - Create a shipping location
* [postCompaniesCompanyIdTerminalOrders](#postcompaniescompanyidterminalorders) - Create an order
* [postCompaniesCompanyIdTerminalOrdersOrderIdCancel](#postcompaniescompanyidterminalordersorderidcancel) - Cancel an order

## getCompaniesCompanyIdBillingEntities

Returns the billing entities of the company identified in the path and all merchant accounts belonging to the company.
A billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdBillingEntitiesRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdBillingEntitiesResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdBillingEntitiesSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdBillingEntitiesRequest req = new GetCompaniesCompanyIdBillingEntitiesRequest("perferendis") {{
                name = "Marianne Thompson";
            }};            

            GetCompaniesCompanyIdBillingEntitiesResponse res = sdk.terminalOrdersCompanyLevel.getCompaniesCompanyIdBillingEntities(req, new GetCompaniesCompanyIdBillingEntitiesSecurity() {{
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

## getCompaniesCompanyIdShippingLocations

Returns the shipping locations for the company identified in the path and all merchant accounts belonging to the company.
A shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdShippingLocationsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdShippingLocationsResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdShippingLocationsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdShippingLocationsRequest req = new GetCompaniesCompanyIdShippingLocationsRequest("suscipit") {{
                limit = 645785;
                name = "Derek Sipes";
                offset = 55;
            }};            

            GetCompaniesCompanyIdShippingLocationsResponse res = sdk.terminalOrdersCompanyLevel.getCompaniesCompanyIdShippingLocations(req, new GetCompaniesCompanyIdShippingLocationsSecurity() {{
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

## getCompaniesCompanyIdTerminalModels

Returns a list of payment terminal models that the company identified in the path has access to.
The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalModelsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalModelsResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalModelsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdTerminalModelsRequest req = new GetCompaniesCompanyIdTerminalModelsRequest("at");            

            GetCompaniesCompanyIdTerminalModelsResponse res = sdk.terminalOrdersCompanyLevel.getCompaniesCompanyIdTerminalModels(req, new GetCompaniesCompanyIdTerminalModelsSecurity() {{
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

## getCompaniesCompanyIdTerminalOrders

Returns a lists of terminal products orders for the company identified in the path.
To filter the list, use one or more of the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalOrdersRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalOrdersResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalOrdersSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdTerminalOrdersRequest req = new GetCompaniesCompanyIdTerminalOrdersRequest("quaerat") {{
                customerOrderReference = "tempora";
                limit = 425451;
                offset = 798047;
                status = "officiis";
            }};            

            GetCompaniesCompanyIdTerminalOrdersResponse res = sdk.terminalOrdersCompanyLevel.getCompaniesCompanyIdTerminalOrders(req, new GetCompaniesCompanyIdTerminalOrdersSecurity() {{
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

## getCompaniesCompanyIdTerminalOrdersOrderId

Returns the details of the terminal products order identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalOrdersOrderIdRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalOrdersOrderIdResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalOrdersOrderIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdTerminalOrdersOrderIdRequest req = new GetCompaniesCompanyIdTerminalOrdersOrderIdRequest("qui", "dolorum");            

            GetCompaniesCompanyIdTerminalOrdersOrderIdResponse res = sdk.terminalOrdersCompanyLevel.getCompaniesCompanyIdTerminalOrdersOrderId(req, new GetCompaniesCompanyIdTerminalOrdersOrderIdSecurity() {{
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

## getCompaniesCompanyIdTerminalProducts

Returns a country-specific list of payment terminal packages and parts that the company identified in the path has access to.
 
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalProductsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalProductsResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdTerminalProductsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdTerminalProductsRequest req = new GetCompaniesCompanyIdTerminalProductsRequest("a", "esse") {{
                limit = 687488;
                offset = 483409;
                terminalModelId = "ipsum";
            }};            

            GetCompaniesCompanyIdTerminalProductsResponse res = sdk.terminalOrdersCompanyLevel.getCompaniesCompanyIdTerminalProducts(req, new GetCompaniesCompanyIdTerminalProductsSecurity() {{
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

## patchCompaniesCompanyIdTerminalOrdersOrderId

Updates the terminal products order identified in the path.
Updating is only possible while the order has the status **Placed**.

The request body only needs to contain what you want to change. 
However, to update the products in the `items` array, you must provide the entire array. For example, if the array has three items:
 To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdTerminalOrdersOrderIdResponse;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdTerminalOrdersOrderIdSecurity;
import org.openapis.openapi.models.shared.OrderItem;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TerminalOrderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest req = new PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest("quisquam", "tenetur") {{
                terminalOrderRequest = new TerminalOrderRequest() {{
                    billingEntityId = "amet";
                    customerOrderReference = "tempore";
                    items = new org.openapis.openapi.models.shared.OrderItem[]{{
                        add(new OrderItem() {{
                            id = "453f870b-326b-45a7-b429-cdb1a8422bb6";
                            installments = 463150L;
                            name = "Marty Deckow";
                            quantity = 164959;
                        }}),
                        add(new OrderItem() {{
                            id = "715bf0cb-b1e3-41b8-b90f-3443a1108e0a";
                            installments = 833038L;
                            name = "Domingo Grady";
                            quantity = 181631;
                        }}),
                        add(new OrderItem() {{
                            id = "1879fce9-53f7-43ef-bfbc-7abd74dd39c0";
                            installments = 974259L;
                            name = "Freda Cormier";
                            quantity = 985033;
                        }}),
                        add(new OrderItem() {{
                            id = "7c70a456-26d4-4368-93f1-6d9f5fce6c55";
                            installments = 399499L;
                            name = "Megan Jaskolski";
                            quantity = 926213;
                        }}),
                    }};
                    shippingLocationId = "aspernatur";
                    taxId = "minima";
                }};;
            }};            

            PatchCompaniesCompanyIdTerminalOrdersOrderIdResponse res = sdk.terminalOrdersCompanyLevel.patchCompaniesCompanyIdTerminalOrdersOrderId(req, new PatchCompaniesCompanyIdTerminalOrdersOrderIdSecurity() {{
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

## postCompaniesCompanyIdShippingLocations

Creates a shipping location for the company identified in the path. A shipping location defines an address where orders can be delivered.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdShippingLocationsRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdShippingLocationsResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdShippingLocationsSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.ShippingLocation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdShippingLocationsRequest req = new PostCompaniesCompanyIdShippingLocationsRequest("eaque") {{
                shippingLocation = new ShippingLocation() {{
                    address = new Address() {{
                        city = "Rancho Cordova";
                        companyName = "aut";
                        country = "Algeria";
                        postalCode = "73180-2066";
                        stateOrProvince = "placeat";
                        streetAddress = "velit";
                        streetAddress2 = "eum";
                    }};;
                    contact = new Contact() {{
                        email = "Nia_Lynch37@yahoo.com";
                        firstName = "Mona";
                        infix = "quasi";
                        lastName = "Glover";
                        phoneNumber = "numquam";
                    }};;
                    id = "29074747-78a7-4bd4-a6d2-8c10ab3cdca4";
                    name = "Brittany Bernier II";
                }};;
            }};            

            PostCompaniesCompanyIdShippingLocationsResponse res = sdk.terminalOrdersCompanyLevel.postCompaniesCompanyIdShippingLocations(req, new PostCompaniesCompanyIdShippingLocationsSecurity() {{
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

## postCompaniesCompanyIdTerminalOrders

Creates an order for payment terminal products for the company identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdTerminalOrdersRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdTerminalOrdersResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdTerminalOrdersSecurity;
import org.openapis.openapi.models.shared.OrderItem;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TerminalOrderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdTerminalOrdersRequest req = new PostCompaniesCompanyIdTerminalOrdersRequest("debitis") {{
                terminalOrderRequest = new TerminalOrderRequest() {{
                    billingEntityId = "ipsam";
                    customerOrderReference = "aspernatur";
                    items = new org.openapis.openapi.models.shared.OrderItem[]{{
                        add(new OrderItem() {{
                            id = "c7e0bc71-78e4-4796-b2a7-0c688282aa48";
                            installments = 128860L;
                            name = "Sue Corkery";
                            quantity = 187131;
                        }}),
                    }};
                    shippingLocationId = "explicabo";
                    taxId = "saepe";
                }};;
            }};            

            PostCompaniesCompanyIdTerminalOrdersResponse res = sdk.terminalOrdersCompanyLevel.postCompaniesCompanyIdTerminalOrders(req, new PostCompaniesCompanyIdTerminalOrdersSecurity() {{
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

## postCompaniesCompanyIdTerminalOrdersOrderIdCancel

Cancels the terminal products order identified in the path.
Cancelling is only possible while the order has the status **Placed**.
To cancel an order, make a POST call without a request body. The response returns the full order details, but with the status changed to **Cancelled**.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest req = new PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest("occaecati", "atque");            

            PostCompaniesCompanyIdTerminalOrdersOrderIdCancelResponse res = sdk.terminalOrdersCompanyLevel.postCompaniesCompanyIdTerminalOrdersOrderIdCancel(req, new PostCompaniesCompanyIdTerminalOrdersOrderIdCancelSecurity() {{
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
