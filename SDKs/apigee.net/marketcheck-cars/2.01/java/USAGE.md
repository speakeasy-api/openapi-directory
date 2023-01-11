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

            CrmCheckRequest req = new CrmCheckRequest() {{
                pathParams = new CrmCheckPathParams() {{
                    vin = "qui";
                }};
                queryParams = new CrmCheckQueryParams() {{
                    apiKey = "aut";
                    saleDate = "voluptatum";
                }};
            }};

            CrmCheckResponse res = sdk.crmCleanseAPI.crmCheck(req);

            if (res.crmResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->