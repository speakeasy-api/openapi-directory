<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsRequest;
import org.openapis.openapi.models.operations.GetClassificationsResponse;
import org.openapis.openapi.models.operations.GetClassificationsSecurity;
import org.openapis.openapi.models.operations.GetClassificationsSortEnum;
import org.openapis.openapi.models.operations.GetClassificationsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsRequest req = new GetClassificationsRequest() {{
                ids = new String[]{{
                    add("9bd9d8d6-9a67-44e0-b467-cc8796ed151a"),
                    add("05dfc2dd-f7cc-478c-a1ba-928fc816742c"),
                    add("b7392059-2939-46fe-a759-6eb10faaa235"),
                }};
                isCountry = "explicabo";
                pageNumber = 750686L;
                pageSize = 315428L;
                q = "omnis";
                sort = new org.openapis.openapi.models.operations.GetClassificationsSortEnum[]{{
                    add(GetClassificationsSortEnum.CREATED_AT),
                    add(GetClassificationsSortEnum.UPDATED_AT),
                }};
                type = GetClassificationsTypeEnum.ALTERNATE_FEED_TYPE;
            }};            

            GetClassificationsResponse res = sdk.classification.getClassifications(req, new GetClassificationsSecurity("iure") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getClassifications200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->