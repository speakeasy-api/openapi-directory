# country

### Available Operations

* [getSalesTaxJurisdictions](#getsalestaxjurisdictions) - This method retrieves all the sales tax jurisdictions for the country that you specify in the <b>countryCode</b> path parameter. Countries with valid sales tax jurisdictions are Canada and the US.  <br/><br/>The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the <b>createOrReplaceSalesTax</b> in the <b>Account API</b> call to configure the tax tables for the jurisdictions you sell to.

## getSalesTaxJurisdictions

This method retrieves all the sales tax jurisdictions for the country that you specify in the <b>countryCode</b> path parameter. Countries with valid sales tax jurisdictions are Canada and the US.  <br/><br/>The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the <b>createOrReplaceSalesTax</b> in the <b>Account API</b> call to configure the tax tables for the jurisdictions you sell to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSalesTaxJurisdictionsRequest;
import org.openapis.openapi.models.operations.GetSalesTaxJurisdictionsResponse;
import org.openapis.openapi.models.operations.GetSalesTaxJurisdictionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSalesTaxJurisdictionsRequest req = new GetSalesTaxJurisdictionsRequest("distinctio");            

            GetSalesTaxJurisdictionsResponse res = sdk.country.getSalesTaxJurisdictions(req, new GetSalesTaxJurisdictionsSecurity("quibusdam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.salesTaxJurisdictions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
