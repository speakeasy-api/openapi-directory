# v1Product

## Overview

Product Search, Order and Retrieve methods

### Available Operations

* [productAvailability](#productavailability) - Retrieves a document availability result
* [productCatalog](#productcatalog) - Returns a catalog of products
* [productNotifier](#productnotifier) - Returns metadata for a notifier
* [productNotifierCreate](#productnotifiercreate) - Creates a notifier for an order
* [productOrder](#productorder) - Places a product order
* [productOrderConcierge](#productorderconcierge) - Places a concierge order
* [productOrderUbo](#productorderubo) - Places a UBO order
* [productOrderWithOption](#productorderwithoption) - Places a product order
* [productRetrieve](#productretrieve) - Retrieves the result of an order
* [productSearch](#productsearch) - Returns a list of products
* [productStatus](#productstatus) - Returns metadata for a order
* [productUpdateAction](#productupdateaction) - Updates metadata of an order

## productAvailability

Check availability and valid options for a particular product for a particular company identfied by its id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductAvailabilityRequest;
import org.openapis.openapi.models.operations.ProductAvailabilityResponse;
import org.openapis.openapi.models.operations.ProductAvailabilitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductAvailabilityRequest req = new ProductAvailabilityRequest("ipsa", "omnis");            

            ProductAvailabilityResponse res = sdk.v1Product.productAvailability(req, new ProductAvailabilitySecurity("voluptate") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productAvailability200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productCatalog

Returns a catalog of purchasable products available with some metadata for a particular country

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductCatalogRequest;
import org.openapis.openapi.models.operations.ProductCatalogResponse;
import org.openapis.openapi.models.operations.ProductCatalogSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductCatalogRequest req = new ProductCatalogRequest("cum");            

            ProductCatalogResponse res = sdk.v1Product.productCatalog(req, new ProductCatalogSecurity("perferendis") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productCatalog200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productNotifier

Queries and returns all metadata associated with a notifier identified by its notifer id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductNotifierRequest;
import org.openapis.openapi.models.operations.ProductNotifierResponse;
import org.openapis.openapi.models.operations.ProductNotifierSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductNotifierRequest req = new ProductNotifierRequest("doloremque");            

            ProductNotifierResponse res = sdk.v1Product.productNotifier(req, new ProductNotifierSecurity("reprehenderit") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productNotifier200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productNotifierCreate

Create a notifier for a particular order. Parameters can be supplied in the path

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductNotifierCreateRequest;
import org.openapis.openapi.models.operations.ProductNotifierCreateResponse;
import org.openapis.openapi.models.operations.ProductNotifierCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductNotifierCreateRequest req = new ProductNotifierCreateRequest("ut", "maiores", "dicta");            

            ProductNotifierCreateResponse res = sdk.v1Product.productNotifierCreate(req, new ProductNotifierCreateSecurity("corporis") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productNotifierCreate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productOrder

Place an order for a particular product identified by its SKU for a particular company identified by its id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductOrderRequest;
import org.openapis.openapi.models.operations.ProductOrderResponse;
import org.openapis.openapi.models.operations.ProductOrderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductOrderRequest req = new ProductOrderRequest("dolore", "iusto");            

            ProductOrderResponse res = sdk.v1Product.productOrder(req, new ProductOrderSecurity("dicta") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productOrderConcierge

Place an order for a concierge product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductOrderConciergeRequestBody;
import org.openapis.openapi.models.operations.ProductOrderConciergeResponse;
import org.openapis.openapi.models.operations.ProductOrderConciergeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductOrderConciergeRequestBody req = new ProductOrderConciergeRequestBody() {{
                companyName = "null";
                contactEmail = "null";
                contactPhone = "null";
                costConfirmation = false;
                country = "null";
                financialData = false;
                historicInformation = false;
                informationRequirements = "null";
                locationInvestigation = false;
                priority = "standard";
                registerData = false;
                registerNumber = "null";
                subjectId = "null";
            }};            

            ProductOrderConciergeResponse res = sdk.v1Product.productOrderConcierge(req, new ProductOrderConciergeSecurity("harum") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productOrderConcierge200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productOrderUbo

Place an order for a UBO (ultimate beneficial owner) discovery report

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductOrderUboRequestBody;
import org.openapis.openapi.models.operations.ProductOrderUboResponse;
import org.openapis.openapi.models.operations.ProductOrderUboSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductOrderUboRequestBody req = new ProductOrderUboRequestBody("null") {{
                callbackUrl = "null";
                credits = -1;
                includeDocs = false;
                levels = "25,50";
                strategy = "FULL";
            }};            

            ProductOrderUboResponse res = sdk.v1Product.productOrderUbo(req, new ProductOrderUboSecurity("enim") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productOrderUbo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productOrderWithOption

Place an order for a particular product identified by its SKU with a particular option for a particular company identified by its id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductOrderWithOptionRequest;
import org.openapis.openapi.models.operations.ProductOrderWithOptionResponse;
import org.openapis.openapi.models.operations.ProductOrderWithOptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductOrderWithOptionRequest req = new ProductOrderWithOptionRequest("accusamus", "commodi", "repudiandae");            

            ProductOrderWithOptionResponse res = sdk.v1Product.productOrderWithOption(req, new ProductOrderWithOptionSecurity("quae") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productOrderWithOption200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productRetrieve

Retrieves the document or structured data associated with a completed order identified with its order id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductRetrieveRequest;
import org.openapis.openapi.models.operations.ProductRetrieveResponse;
import org.openapis.openapi.models.operations.ProductRetrieveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductRetrieveRequest req = new ProductRetrieveRequest("ipsum");            

            ProductRetrieveResponse res = sdk.v1Product.productRetrieve(req, new ProductRetrieveSecurity("quidem") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productRetrieve200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productSearch

Search for possible products for a particular company identified by its id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductSearchRequest;
import org.openapis.openapi.models.operations.ProductSearchResponse;
import org.openapis.openapi.models.operations.ProductSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductSearchRequest req = new ProductSearchRequest("molestias");            

            ProductSearchResponse res = sdk.v1Product.productSearch(req, new ProductSearchSecurity("excepturi") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productSearch200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productStatus

Retrieve the current status of an order identified by its order id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductStatusRequest;
import org.openapis.openapi.models.operations.ProductStatusResponse;
import org.openapis.openapi.models.operations.ProductStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductStatusRequest req = new ProductStatusRequest("pariatur");            

            ProductStatusResponse res = sdk.v1Product.productStatus(req, new ProductStatusSecurity("modi") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productUpdateAction

Update an existing order identified by its order id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductUpdateActionRequest;
import org.openapis.openapi.models.operations.ProductUpdateActionRequestBody;
import org.openapis.openapi.models.operations.ProductUpdateActionResponse;
import org.openapis.openapi.models.operations.ProductUpdateActionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductUpdateActionRequest req = new ProductUpdateActionRequest("praesentium", "rem") {{
                requestBody = new ProductUpdateActionRequestBody() {{
                    credits = 100;
                }};;
            }};            

            ProductUpdateActionResponse res = sdk.v1Product.productUpdateAction(req, new ProductUpdateActionSecurity("voluptates") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.productUpdateAction200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
