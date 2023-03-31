<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelZonalShiftPathParams;
import org.openapis.openapi.models.operations.CancelZonalShiftHeaders;
import org.openapis.openapi.models.operations.CancelZonalShiftRequest;
import org.openapis.openapi.models.operations.CancelZonalShiftResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CancelZonalShiftRequest req = new CancelZonalShiftRequest() {{
                pathParams = new CancelZonalShiftPathParams() {{
                    zonalShiftId = "corrupti";
                }};
                headers = new CancelZonalShiftHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            CancelZonalShiftResponse res = sdk.cancelZonalShift(req);

            if (res.zonalShift.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->