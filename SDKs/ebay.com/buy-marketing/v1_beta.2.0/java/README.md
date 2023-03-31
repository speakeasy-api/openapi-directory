# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetMerchandisedProductsSecurity;
import org.openapis.openapi.models.operations.GetMerchandisedProductsQueryParams;
import org.openapis.openapi.models.operations.GetMerchandisedProductsRequest;
import org.openapis.openapi.models.operations.GetMerchandisedProductsResponse;
import org.openapis.openapi.models.shared.SchemeClientCredentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchandisedProductsRequest req = new GetMerchandisedProductsRequest() {{
                security = new GetMerchandisedProductsSecurity() {{
                    clientCredentials = new SchemeClientCredentials() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetMerchandisedProductsQueryParams() {{
                    aspectFilter = "corrupti";
                    categoryId = "provident";
                    limit = "distinctio";
                    metricName = "quibusdam";
                }};
            }};            

            GetMerchandisedProductsResponse res = sdk.merchandisedProduct.getMerchandisedProducts(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### merchandisedProduct

* `getMerchandisedProducts` - This method returns an array of products based on the category and metric specified. This includes details of the product, such as the eBay product ID (EPID), title, and user reviews and ratings for the product. You can use the <code>epid</code> returned by this method in the Browse API <b>search</b> method to retrieve items for this product. <h3><b>Restrictions </b></h3> <ul><li>To test <b> getMerchandisedProducts</b> in Sandbox, you must use category ID 9355 and the response will be mock data.  </li>   <li>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/marketing/overview.html#API">API Restrictions</a>.</li>  </ul>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
