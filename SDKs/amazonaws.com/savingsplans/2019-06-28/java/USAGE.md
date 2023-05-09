<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSavingsPlanRequest;
import org.openapis.openapi.models.operations.CreateSavingsPlanRequestBody;
import org.openapis.openapi.models.operations.CreateSavingsPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSavingsPlanRequest req = new CreateSavingsPlanRequest(                new CreateSavingsPlanRequestBody("provident", "distinctio") {{
                                clientToken = "quibusdam";
                                purchaseTime = OffsetDateTime.parse("2021-04-14T16:47:33.722Z");
                                tags = new java.util.HashMap<String, String>() {{
                                    put("illum", "vel");
                                    put("error", "deserunt");
                                    put("suscipit", "iure");
                                }};
                                upfrontPaymentAmount = "magnam";
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
            }};            

            CreateSavingsPlanResponse res = sdk.createSavingsPlan(req);

            if (res.createSavingsPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->