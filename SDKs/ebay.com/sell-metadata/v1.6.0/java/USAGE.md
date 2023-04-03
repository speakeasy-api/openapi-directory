<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetSalesTaxJurisdictionsSecurity;
import org.openapis.openapi.models.operations.GetSalesTaxJurisdictionsRequest;
import org.openapis.openapi.models.operations.GetSalesTaxJurisdictionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSalesTaxJurisdictionsRequest req = new GetSalesTaxJurisdictionsRequest() {{
                countryCode = "corrupti";
            }}            

            GetSalesTaxJurisdictionsResponse res = sdk.country.getSalesTaxJurisdictions(req, new GetSalesTaxJurisdictionsSecurity() {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.salesTaxJurisdictions.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->