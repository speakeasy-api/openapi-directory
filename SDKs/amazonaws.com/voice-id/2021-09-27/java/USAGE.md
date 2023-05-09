<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateFraudsterRequest;
import org.openapis.openapi.models.operations.AssociateFraudsterResponse;
import org.openapis.openapi.models.operations.AssociateFraudsterXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateFraudsterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFraudsterRequest req = new AssociateFraudsterRequest(                new AssociateFraudsterRequest("provident", "distinctio", "quibusdam");, AssociateFraudsterXAmzTargetEnum.VOICE_ID_ASSOCIATE_FRAUDSTER) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            AssociateFraudsterResponse res = sdk.associateFraudster(req);

            if (res.associateFraudsterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->