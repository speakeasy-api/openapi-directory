<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductRequest;
import org.openapis.openapi.models.operations.GetProductResponse;
import org.openapis.openapi.models.operations.GetProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductRequest req = new GetProductRequest("corrupti") {{
                xEbayCMarketplaceId = "provident";
            }};            

            GetProductResponse res = sdk.product.getProduct(req, new GetProductSecurity("distinctio") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->