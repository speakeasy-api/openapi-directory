<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteChargeStationPathParams;
import org.openapis.openapi.models.operations.DeleteChargeStationRequest;
import org.openapis.openapi.models.operations.DeleteChargeStationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            DeleteChargeStationRequest req = new DeleteChargeStationRequest() {{
                pathParams = new DeleteChargeStationPathParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteChargeStationResponse res = sdk.chargeStations.deleteChargeStation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->