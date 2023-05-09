<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteObjectRequest;
import org.openapis.openapi.models.operations.DeleteObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteObjectRequest req = new DeleteObjectRequest("provident") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            DeleteObjectResponse res = sdk.deleteObject(req);

            if (res.deleteObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->