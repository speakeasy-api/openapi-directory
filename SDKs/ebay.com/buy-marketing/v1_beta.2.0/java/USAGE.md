<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetMerchandisedProductsSecurity;
import org.openapis.openapi.models.operations.GetMerchandisedProductsQueryParams;
import org.openapis.openapi.models.operations.GetMerchandisedProductsRequest;
import org.openapis.openapi.models.operations.GetMerchandisedProductsResponse;
import org.openapis.openapi.models.shared.SchemeClientCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchandisedProductsRequest req = new GetMerchandisedProductsRequest() {{
                security = new GetMerchandisedProductsSecurity() {{
                    clientCredentials = new SchemeClientCredentials() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetMerchandisedProductsQueryParams() {{
                    aspectFilter = "corrupti";
                    categoryId = "provident";
                    limit = "distinctio";
                    metricName = "quibusdam";
                }};
            }};            

            GetMerchandisedProductsResponse res = sdk.merchandisedProduct.getMerchandisedProducts(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->