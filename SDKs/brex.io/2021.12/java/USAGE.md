<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequest;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequestBody;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchResponse;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyAlternativeSearchRequest req = new CompanyAlternativeSearchRequest("corrupti") {{
                requestBody = new CompanyAlternativeSearchRequestBody() {{
                    address = "7868 Stamm Junctions";
                    name = "Doug Hoppe";
                    number = "debitis";
                    phone = "923-578-5453";
                    url = "recusandae";
                    vat = "temporibus";
                }};;
            }};            

            CompanyAlternativeSearchResponse res = sdk.v1Company.companyAlternativeSearch(req, new CompanyAlternativeSearchSecurity("ab") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyAlternativeSearch200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->