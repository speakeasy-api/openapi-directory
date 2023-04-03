<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetClassificationsAddressTypesRequest;
import org.openapis.openapi.models.operations.GetClassificationsAddressTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsAddressTypesRequest req = new GetClassificationsAddressTypesRequest() {{
                apiKey = "corrupti";
            }}            

            GetClassificationsAddressTypesResponse res = sdk.addressTypes.getClassificationsAddressTypes(req);

            if (res.addressTypes.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->