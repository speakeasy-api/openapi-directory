<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ControlChargerChargingRequest;
import org.openapis.openapi.models.operations.ControlChargerChargingRequestBody;
import org.openapis.openapi.models.operations.ControlChargerChargingRequestBodyActionEnum;
import org.openapis.openapi.models.operations.ControlChargerChargingResponse;
import org.openapis.openapi.models.operations.ControlChargerChargingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ControlChargerChargingRequest req = new ControlChargerChargingRequest("corrupti") {{
                requestBody = new ControlChargerChargingRequestBody(ControlChargerChargingRequestBodyActionEnum.START);;
            }};            

            ControlChargerChargingResponse res = sdk.chargers.controlChargerCharging(req, new ControlChargerChargingSecurity() {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
<!-- End SDK Example Usage -->