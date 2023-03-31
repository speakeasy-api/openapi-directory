<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CompanyAlternativeSearchSecurity;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchPathParams;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequestBody;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequest;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchResponse;
import org.openapis.openapi.models.shared.SchemeUserKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyAlternativeSearchRequest req = new CompanyAlternativeSearchRequest() {{
                security = new CompanyAlternativeSearchSecurity() {{
                    userKey = new SchemeUserKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new CompanyAlternativeSearchPathParams() {{
                    country = "corrupti";
                }};
                request = new CompanyAlternativeSearchRequestBody() {{
                    address = "7868 Stamm Junctions";
                    name = "error";
                    number = "deserunt";
                    phone = "1-528-292-3478 x545";
                    url = "nisi";
                    vat = "recusandae";
                }};
            }};            

            CompanyAlternativeSearchResponse res = sdk.v1Company.companyAlternativeSearch(req);

            if (res.companyAlternativeSearch200ApplicationJSONObjects.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->