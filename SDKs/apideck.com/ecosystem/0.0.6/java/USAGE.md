<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CategoriesAllRequest req = new CategoriesAllRequest() {{
                pathParams = new CategoriesAllPathParams() {{
                    ecosystemId = "sit";
                }};
                queryParams = new CategoriesAllQueryParams() {{
                    cursor = "voluptas";
                    limit = 6050128673802995827;
                }};
            }};

            CategoriesAllResponse res = sdk.category.categoriesAll(req);

            if (res.getCategoriesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->