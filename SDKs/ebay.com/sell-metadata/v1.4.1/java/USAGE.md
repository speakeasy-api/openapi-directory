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

            GetSalesTaxJurisdictionsRequest req = new GetSalesTaxJurisdictionsRequest() {{
                security = new GetSalesTaxJurisdictionsSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetSalesTaxJurisdictionsPathParams() {{
                    countryCode = "sit";
                }};
            }};

            GetSalesTaxJurisdictionsResponse res = sdk.country.getSalesTaxJurisdictions(req);

            if (res.salesTaxJurisdictions.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->