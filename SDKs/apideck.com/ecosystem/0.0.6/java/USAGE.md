<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CategoriesAllPathParams;
import org.openapis.openapi.models.operations.CategoriesAllQueryParams;
import org.openapis.openapi.models.operations.CategoriesAllRequest;
import org.openapis.openapi.models.operations.CategoriesAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CategoriesAllRequest req = new CategoriesAllRequest() {{
                pathParams = new CategoriesAllPathParams() {{
                    ecosystemId = "corrupti";
                }};
                queryParams = new CategoriesAllQueryParams() {{
                    cursor = "provident";
                    limit = 715190;
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