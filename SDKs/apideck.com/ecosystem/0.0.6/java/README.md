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

import org.openapis.openapi.models.operations.CategoriesAllPathParams;
import org.openapis.openapi.models.operations.CategoriesAllQueryParams;
import org.openapis.openapi.models.operations.CategoriesAllRequest;
import org.openapis.openapi.models.operations.CategoriesAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CategoriesAllRequest req = new CategoriesAllRequest() {{
                pathParams = new CategoriesAllPathParams() {{
                    ecosystemId = "corrupti";
                }};
                queryParams = new CategoriesAllQueryParams() {{
                    cursor = "provident";
                    limit = 715190;
                }};
            }};            

            CategoriesAllResponse res = sdk.category.categoriesAll(req);

            if (res.getCategoriesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### category

* `categoriesAll` - List categories
* `categoriesOne` - Get category
* `categoryListingsAll` - List category listings

### collection

* `collectionListingsAll` - List collection listings
* `collectionsAll` - List collections
* `collectionsOne` - Get collection

### ecosystem

* `ecosystemsOne` - Get ecosystem

### listing

* `listingsAll` - List listings
* `listingsOne` - Get listing

### product

* `productListingsAll` - List product listings
* `productsAll` - List products
* `productsOne` - Get product
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
