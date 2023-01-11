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

            ControlChargerChargingRequest req = new ControlChargerChargingRequest() {{
                security = new ControlChargerChargingSecurity() {{
                    userAccessToken = new SchemeUserAccessToken() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ControlChargerChargingPathParams() {{
                    chargerId = "sit";
                }};
                request = new ControlChargerChargingRequestBody() {{
                    action = "START";
                }};
            }};

            ControlChargerChargingResponse res = sdk.chargers.controlChargerCharging(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->