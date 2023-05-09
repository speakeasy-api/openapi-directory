<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchandisedProductsRequest;
import org.openapis.openapi.models.operations.GetMerchandisedProductsResponse;
import org.openapis.openapi.models.operations.GetMerchandisedProductsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchandisedProductsRequest req = new GetMerchandisedProductsRequest("corrupti", "provident") {{
                aspectFilter = "distinctio";
                limit = "quibusdam";
            }};            

            GetMerchandisedProductsResponse res = sdk.merchandisedProduct.getMerchandisedProducts(req, new GetMerchandisedProductsSecurity("unde") {{
                clientCredentials = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->