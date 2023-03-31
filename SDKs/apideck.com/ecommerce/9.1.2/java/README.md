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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CustomersAllSecurity;
import org.openapis.openapi.models.operations.CustomersAllQueryParams;
import org.openapis.openapi.models.operations.CustomersAllHeaders;
import org.openapis.openapi.models.operations.CustomersAllRequest;
import org.openapis.openapi.models.operations.CustomersAllResponse;
import org.openapis.openapi.models.shared.EcommerceCustomersFilter;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersAllRequest req = new CustomersAllRequest() {{
                security = new CustomersAllSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new CustomersAllQueryParams() {{
                    cursor = "corrupti";
                    fields = "provident";
                    filter = new EcommerceCustomersFilter() {{
                        email = "elon@musk.com";
                        phoneNumber = "111-111-1111";
                    }};
                    limit = 715190;
                    raw = false;
                }};
                headers = new CustomersAllHeaders() {{
                    xApideckAppId = "quibusdam";
                    xApideckConsumerId = "unde";
                    xApideckServiceId = "nulla";
                }};
            }};            

            CustomersAllResponse res = sdk.customers.customersAll(req);

            if (res.getEcommerceCustomersResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### customers

* `customersAll` - List Customers
* `customersOne` - Get Customer

### orders

* `ordersAll` - List Orders
* `ordersOne` - Get Order

### products

* `productsAll` - List Products
* `productsOne` - Get Product

### stores

* `storesOne` - Get Store
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
