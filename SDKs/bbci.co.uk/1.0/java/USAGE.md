<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetProgrammesAtoZSearchPathParams;
import org.openapis.openapi.models.operations.GetProgrammesAtoZSearchSortEnum;
import org.openapis.openapi.models.operations.GetProgrammesAtoZSearchQueryParams;
import org.openapis.openapi.models.operations.GetProgrammesAtoZSearchRequest;
import org.openapis.openapi.models.operations.GetProgrammesAtoZSearchResponse;
import org.openapis.openapi.models.shared.SortDirectionEnum;
import org.openapis.openapi.models.shared.RightsEnum;
import org.openapis.openapi.models.shared.AvailabilityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetProgrammesAtoZSearchRequest req = new GetProgrammesAtoZSearchRequest() {{
                pathParams = new GetProgrammesAtoZSearchPathParams() {{
                    letter = "corrupti";
                }};
                queryParams = new GetProgrammesAtoZSearchQueryParams() {{
                    availability = "available";
                    initialChildCount = 715190;
                    page = 844266;
                    perPage = 602763;
                    rights = "web";
                    sort = "title";
                    sortDirection = "desc";
                }};
            }};            

            GetProgrammesAtoZSearchResponse res = sdk.aToZ.getProgrammesAtoZSearch(req);

            if (res.ibl.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->