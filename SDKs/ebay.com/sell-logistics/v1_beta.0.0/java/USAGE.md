<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CancelShipmentRequest req = new CancelShipmentRequest() {{
                security = new CancelShipmentSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CancelShipmentPathParams() {{
                    shipmentId = "perspiciatis";
                }};
            }};

            CancelShipmentResponse res = sdk.shipment.cancelShipment(req);

            if (res.shipment.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->