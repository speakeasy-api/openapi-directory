<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CompanyAlternativeSearchSecurity;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequestBody;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequest;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyAlternativeSearchRequest req = new CompanyAlternativeSearchRequest() {{
                requestBody = new CompanyAlternativeSearchRequestBody() {{
                    address = "5786 Little Streets";
                    name = "vel";
                    number = "error";
                    phone = "1-542-909-2347 x8545";
                    url = "nisi";
                    vat = "recusandae";
                }};
                country = "temporibus";
            }}            

            CompanyAlternativeSearchResponse res = sdk.v1Company.companyAlternativeSearch(req, new CompanyAlternativeSearchSecurity() {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyAlternativeSearch200ApplicationJSONObjects.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->