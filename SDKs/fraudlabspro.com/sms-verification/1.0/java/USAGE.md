<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1VerificationResultFormatEnum;
import org.openapis.openapi.models.operations.GetV1VerificationResultRequest;
import org.openapis.openapi.models.operations.GetV1VerificationResultResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1VerificationResultRequest req = new GetV1VerificationResultRequest("corrupti", "provident", "distinctio") {{
                format = GetV1VerificationResultFormatEnum.XML;
            }};            

            GetV1VerificationResultResponse res = sdk.getV1VerificationResult(req);

            if (res.getV1VerificationResult200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->