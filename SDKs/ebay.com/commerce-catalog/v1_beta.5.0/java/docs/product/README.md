# product

### Available Operations

* [getProduct](#getproduct) - This method retrieves details of the catalog product identified by the eBay product identifier (ePID) specified in the request. These details include the product's title and description, aspects and their values, associated images, applicable category IDs, and any recognized identifiers that apply to the product. <br /><br /> For a new listing, you can use the <b>search</b> method to identify candidate products on which to base the listing, then use the <b>getProduct</b> method to present the full details of those candidate products to the seller to make a a final selection.

## getProduct

This method retrieves details of the catalog product identified by the eBay product identifier (ePID) specified in the request. These details include the product's title and description, aspects and their values, associated images, applicable category IDs, and any recognized identifiers that apply to the product. <br /><br /> For a new listing, you can use the <b>search</b> method to identify candidate products on which to base the listing, then use the <b>getProduct</b> method to present the full details of those candidate products to the seller to make a a final selection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductRequest;
import org.openapis.openapi.models.operations.GetProductResponse;
import org.openapis.openapi.models.operations.GetProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductRequest req = new GetProductRequest("quibusdam") {{
                xEbayCMarketplaceId = "unde";
            }};            

            GetProductResponse res = sdk.product.getProduct(req, new GetProductSecurity("nulla") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.product != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
