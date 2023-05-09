# products

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [listProductCategories](#listproductcategories) - List product categories
* [listProducts](#listproducts) - List products

## listProductCategories

Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProductCategoriesRequest;
import org.openapis.openapi.models.operations.ListProductCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProductCategoriesRequest req = new ListProductCategoriesRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "debitis";
            }};            

            ListProductCategoriesResponse res = sdk.products.listProductCategories(req);

            if (res.productCategories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProducts

The Products data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProductsRequest;
import org.openapis.openapi.models.operations.ListProductsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProductsRequest req = new ListProductsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "delectus";
            }};            

            ListProductsResponse res = sdk.products.listProducts(req);

            if (res.products != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
