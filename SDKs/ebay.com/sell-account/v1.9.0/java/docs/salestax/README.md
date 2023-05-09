# salesTax

### Available Operations

* [createOrReplaceSalesTax](#createorreplacesalestax) - This method creates or updates a sales tax table entry for a jurisdiction. Specify the tax table entry you want to configure using the two path parameters: <b>countryCode</b> and <b>jurisdictionId</b>.  <br/><br/>A tax table entry for a jurisdiction is comprised of two fields: one for the jurisdiction's sales-tax rate and another that's a boolean value indicating whether or not shipping and handling are taxed in the jurisdiction.  <br/><br/>You can set up <i>tax tables</i> for countries that support different <i>tax jurisdictions</i>. Currently, only Canada, India, and the US support separate tax jurisdictions. If you sell into any of these countries, you can set up tax tables for any of the country's jurisdictions. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.  <br/><br/>For details on using this call, see <a href="/api-docs/sell/static/seller-accounts/tax-tables.html">Establishing sales-tax tables</a>. <br/><br/><span class="tablenote"><b>Important!</b> In the US, eBay now 'collects and remits' sales tax for every US state except for Missouri (and a few US territories), so sellers can no longer configure sales tax rates for any states except Missouri. With eBay 'collect and remit', eBay calculates the sales tax, collects the sales tax from the buyer, and remits the sales tax to the tax authorities at the buyer's location.</span>
* [deleteSalesTax](#deletesalestax) - This call deletes a sales tax table entry for a jurisdiction. Specify the jurisdiction to delete using the <b>countryCode</b> and <b>jurisdictionId</b> path parameters.
* [getSalesTax](#getsalestax) - This call gets the current sales tax table entry for a specific tax jurisdiction. Specify the jurisdiction to retrieve using the <b>countryCode</b> and <b>jurisdictionId</b> path parameters. All four response fields will be returned if a sales tax entry exists for the tax jurisdiction. Otherwise, the response will be returned as empty.<br/><br/><span class="tablenote"><b>Important!</b> In most US states and territories, eBay now 'collects and remits' sales tax, so sellers can no longer configure sales tax rates for these states/territories.</span>
* [getSalesTaxes](#getsalestaxes) - Use this call to retrieve all sales tax table entries that the seller has defined for a specific country. All four response fields will be returned for each tax jurisdiction that matches the search criteria. <br/><br/><span class="tablenote"><b>Important!</b> In most US states and territories, eBay now 'collects and remits' sales tax, so sellers can no longer configure sales tax rates for these states/territories.</span>

## createOrReplaceSalesTax

This method creates or updates a sales tax table entry for a jurisdiction. Specify the tax table entry you want to configure using the two path parameters: <b>countryCode</b> and <b>jurisdictionId</b>.  <br/><br/>A tax table entry for a jurisdiction is comprised of two fields: one for the jurisdiction's sales-tax rate and another that's a boolean value indicating whether or not shipping and handling are taxed in the jurisdiction.  <br/><br/>You can set up <i>tax tables</i> for countries that support different <i>tax jurisdictions</i>. Currently, only Canada, India, and the US support separate tax jurisdictions. If you sell into any of these countries, you can set up tax tables for any of the country's jurisdictions. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.  <br/><br/>For details on using this call, see <a href="/api-docs/sell/static/seller-accounts/tax-tables.html">Establishing sales-tax tables</a>. <br/><br/><span class="tablenote"><b>Important!</b> In the US, eBay now 'collects and remits' sales tax for every US state except for Missouri (and a few US territories), so sellers can no longer configure sales tax rates for any states except Missouri. With eBay 'collect and remit', eBay calculates the sales tax, collects the sales tax from the buyer, and remits the sales tax to the tax authorities at the buyer's location.</span>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrReplaceSalesTaxRequest;
import org.openapis.openapi.models.operations.CreateOrReplaceSalesTaxResponse;
import org.openapis.openapi.models.operations.CreateOrReplaceSalesTaxSecurity;
import org.openapis.openapi.models.shared.SalesTaxBase;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateOrReplaceSalesTaxRequest req = new CreateOrReplaceSalesTaxRequest(                new SalesTaxBase() {{
                                salesTaxPercentage = "delectus";
                                shippingAndHandlingTaxed = false;
                            }};, "dolorem", "dolore");            

            CreateOrReplaceSalesTaxResponse res = sdk.salesTax.createOrReplaceSalesTax(req, new CreateOrReplaceSalesTaxSecurity("labore") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSalesTax

This call deletes a sales tax table entry for a jurisdiction. Specify the jurisdiction to delete using the <b>countryCode</b> and <b>jurisdictionId</b> path parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSalesTaxRequest;
import org.openapis.openapi.models.operations.DeleteSalesTaxResponse;
import org.openapis.openapi.models.operations.DeleteSalesTaxSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSalesTaxRequest req = new DeleteSalesTaxRequest("adipisci", "dolorum");            

            DeleteSalesTaxResponse res = sdk.salesTax.deleteSalesTax(req, new DeleteSalesTaxSecurity("architecto") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSalesTax

This call gets the current sales tax table entry for a specific tax jurisdiction. Specify the jurisdiction to retrieve using the <b>countryCode</b> and <b>jurisdictionId</b> path parameters. All four response fields will be returned if a sales tax entry exists for the tax jurisdiction. Otherwise, the response will be returned as empty.<br/><br/><span class="tablenote"><b>Important!</b> In most US states and territories, eBay now 'collects and remits' sales tax, so sellers can no longer configure sales tax rates for these states/territories.</span>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSalesTaxRequest;
import org.openapis.openapi.models.operations.GetSalesTaxResponse;
import org.openapis.openapi.models.operations.GetSalesTaxSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSalesTaxRequest req = new GetSalesTaxRequest("quae", "aut");            

            GetSalesTaxResponse res = sdk.salesTax.getSalesTax(req, new GetSalesTaxSecurity("quas") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.salesTax != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSalesTaxes

Use this call to retrieve all sales tax table entries that the seller has defined for a specific country. All four response fields will be returned for each tax jurisdiction that matches the search criteria. <br/><br/><span class="tablenote"><b>Important!</b> In most US states and territories, eBay now 'collects and remits' sales tax, so sellers can no longer configure sales tax rates for these states/territories.</span>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSalesTaxesRequest;
import org.openapis.openapi.models.operations.GetSalesTaxesResponse;
import org.openapis.openapi.models.operations.GetSalesTaxesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSalesTaxesRequest req = new GetSalesTaxesRequest("itaque");            

            GetSalesTaxesResponse res = sdk.salesTax.getSalesTaxes(req, new GetSalesTaxesSecurity("consequatur") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.salesTaxes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
