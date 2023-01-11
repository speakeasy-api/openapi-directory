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

            CompanyAlternativeSearchRequest req = new CompanyAlternativeSearchRequest() {{
                security = new CompanyAlternativeSearchSecurity() {{
                    userKey = new SchemeUserKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new CompanyAlternativeSearchPathParams() {{
                    country = "sit";
                }};
                request = new CompanyAlternativeSearchRequestBody() {{
                    address = "voluptas";
                    name = "culpa";
                    number = "expedita";
                    phone = "consequuntur";
                    url = "dolor";
                    vat = "expedita";
                }};
            }};

            CompanyAlternativeSearchResponse res = sdk.v1Company.companyAlternativeSearch(req);

            if (res.companyAlternativeSearch200ApplicationJSONAnies.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->