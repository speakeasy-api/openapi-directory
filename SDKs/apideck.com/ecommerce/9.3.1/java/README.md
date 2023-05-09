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
import org.openapis.openapi.models.operations.CustomersAllRequest;
import org.openapis.openapi.models.operations.CustomersAllResponse;
import org.openapis.openapi.models.operations.CustomersAllSecurity;
import org.openapis.openapi.models.shared.EcommerceCustomersFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersAllRequest req = new CustomersAllRequest("corrupti", "provident") {{
                cursor = "distinctio";
                fields = "quibusdam";
                filter = new EcommerceCustomersFilter() {{
                    email = "elon@musk.com";
                    phoneNumber = "111-111-1111";
                }};;
                limit = 602763L;
                raw = false;
                xApideckServiceId = "nulla";
            }};            

            CustomersAllResponse res = sdk.customers.customersAll(req, new CustomersAllSecurity("corrupti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEcommerceCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customers](docs/customers/README.md)

* [customersAll](docs/customers/README.md#customersall) - List Customers
* [customersOne](docs/customers/README.md#customersone) - Get Customer

### [orders](docs/orders/README.md)

* [ordersAll](docs/orders/README.md#ordersall) - List Orders
* [ordersOne](docs/orders/README.md#ordersone) - Get Order

### [products](docs/products/README.md)

* [productsAll](docs/products/README.md#productsall) - List Products
* [productsOne](docs/products/README.md#productsone) - Get Product

### [stores](docs/stores/README.md)

* [storesOne](docs/stores/README.md#storesone) - Get Store
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
