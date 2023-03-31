<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetProductSecurity;
import org.openapis.openapi.models.operations.GetProductPathParams;
import org.openapis.openapi.models.operations.GetProductHeaders;
import org.openapis.openapi.models.operations.GetProductRequest;
import org.openapis.openapi.models.operations.GetProductResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductRequest req = new GetProductRequest() {{
                security = new GetProductSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetProductPathParams() {{
                    epid = "corrupti";
                }};
                headers = new GetProductHeaders() {{
                    xEbayCMarketplaceId = "provident";
                }};
            }};            

            GetProductResponse res = sdk.product.getProduct(req);

            if (res.product.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->