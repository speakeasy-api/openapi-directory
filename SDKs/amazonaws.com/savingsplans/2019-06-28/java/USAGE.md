<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateSavingsPlanHeaders;
import org.openapis.openapi.models.operations.CreateSavingsPlanRequestBody;
import org.openapis.openapi.models.operations.CreateSavingsPlanRequest;
import org.openapis.openapi.models.operations.CreateSavingsPlanResponse;

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

            CreateSavingsPlanRequest req = new CreateSavingsPlanRequest() {{
                headers = new CreateSavingsPlanHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateSavingsPlanRequestBody() {{
                    clientToken = "illum";
                    commitment = "vel";
                    purchaseTime = "2021-09-16T11:56:06.019Z";
                    savingsPlanOfferingId = "suscipit";
                    tags = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    upfrontPaymentAmount = "tempora";
                }};
            }};            

            CreateSavingsPlanResponse res = sdk.createSavingsPlan(req);

            if (res.createSavingsPlanResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->