# products

### Available Operations

* [productsAll](#productsall) - List Products
* [productsOne](#productsone) - Get Product

## productsAll

List Products

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsAllRequest;
import org.openapis.openapi.models.operations.ProductsAllResponse;
import org.openapis.openapi.models.operations.ProductsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsAllRequest req = new ProductsAllRequest("ipsam", "repellendus") {{
                cursor = "sapiente";
                fields = "quo";
                limit = 140350L;
                raw = false;
                xApideckServiceId = "at";
            }};            

            ProductsAllResponse res = sdk.products.productsAll(req, new ProductsAllSecurity("at") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

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

Get Product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProductsOneRequest;
import org.openapis.openapi.models.operations.ProductsOneResponse;
import org.openapis.openapi.models.operations.ProductsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProductsOneRequest req = new ProductsOneRequest("maiores", "molestiae", "quod") {{
                fields = "quod";
                raw = false;
                xApideckServiceId = "esse";
            }};            

            ProductsOneResponse res = sdk.products.productsOne(req, new ProductsOneSecurity("totam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getProductResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
