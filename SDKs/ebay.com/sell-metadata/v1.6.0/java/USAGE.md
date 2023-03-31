<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetSalesTaxJurisdictionsSecurity;
import org.openapis.openapi.models.operations.GetSalesTaxJurisdictionsPathParams;
import org.openapis.openapi.models.operations.GetSalesTaxJurisdictionsRequest;
import org.openapis.openapi.models.operations.GetSalesTaxJurisdictionsResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSalesTaxJurisdictionsRequest req = new GetSalesTaxJurisdictionsRequest() {{
                security = new GetSalesTaxJurisdictionsSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GetSalesTaxJurisdictionsPathParams() {{
                    countryCode = "corrupti";
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