<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetClassificationsSecurity;
import org.openapis.openapi.models.operations.GetClassificationsSortEnum;
import org.openapis.openapi.models.operations.GetClassificationsTypeEnum;
import org.openapis.openapi.models.operations.GetClassificationsQueryParams;
import org.openapis.openapi.models.operations.GetClassificationsRequest;
import org.openapis.openapi.models.operations.GetClassificationsResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsRequest req = new GetClassificationsRequest() {{
                security = new GetClassificationsSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetClassificationsQueryParams() {{
                    ids = new String[]{{
                        add("9bd9d8d6-9a67-44e0-b467-cc8796ed151a"),
                        add("05dfc2dd-f7cc-478c-a1ba-928fc816742c"),
                        add("b7392059-2939-46fe-a759-6eb10faaa235"),
                    }};
                    isCountry = "explicabo";
                    pageNumber = 750686;
                    pageSize = 315428;
                    q = "omnis";
                    sort = new org.openapis.openapi.models.operations.GetClassificationsSortEnum[]{{
                        add("created_at"),
                        add("updated_at"),
                    }};
                    type = "AlternateFeedType";
                }};
            }};            

            GetClassificationsResponse res = sdk.classification.getClassifications(req);

            if (res.getClassifications200ApplicationVndApiPlusJsonObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->