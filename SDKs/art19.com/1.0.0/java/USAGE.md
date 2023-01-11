<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetClassificationsRequest req = new GetClassificationsRequest() {{
                queryParams = new GetClassificationsQueryParams() {{
                    ids = new String[]() {{
                        add("consequatur"),
                    }};
                    isCountry = "laboriosam";
                    pageNumber = 773736624494728175;
                    pageSize = 1546546415388482117;
                    q = "placeat";
                    sort = new openapisdk.models.operations.GetClassificationsSortEnum[]() {{
                        add("value"),
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