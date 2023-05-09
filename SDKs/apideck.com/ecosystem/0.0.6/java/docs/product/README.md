# product

### Available Operations

* [productListingsAll](#productlistingsall) - List product listings
* [productsAll](#productsall) - List products
* [productsOne](#productsone) - Get product

## productListingsAll

List product listings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductListingsAllRequest;
import org.openapis.openapi.models.operations.ProductListingsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductListingsAllRequest req = new ProductListingsAllRequest("ab", "quis") {{
                cursor = "veritatis";
                limit = 648172L;
            }};            

            ProductListingsAllResponse res = sdk.product.productListingsAll(req);

            if (res.getListingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsAll

List products

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsAllRequest;
import org.openapis.openapi.models.operations.ProductsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsAllRequest req = new ProductsAllRequest("perferendis");            

            ProductsAllResponse res = sdk.product.productsAll(req);

            if (res.getProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## productsOne

Get product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsOneRequest;
import org.openapis.openapi.models.operations.ProductsOneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsOneRequest req = new ProductsOneRequest("ipsam", "repellendus");            

            ProductsOneResponse res = sdk.product.productsOne(req);

            if (res.getProductResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
