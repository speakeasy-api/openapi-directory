<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelShipmentRequest;
import org.openapis.openapi.models.operations.CancelShipmentResponse;
import org.openapis.openapi.models.operations.CancelShipmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelShipmentRequest req = new CancelShipmentRequest("corrupti");            

            CancelShipmentResponse res = sdk.shipment.cancelShipment(req, new CancelShipmentSecurity("provident") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.shipment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->