<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryRequest;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryResponse;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptSharedDirectoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptSharedDirectoryRequest req = new AcceptSharedDirectoryRequest(                new AcceptSharedDirectoryRequest("provident");, AcceptSharedDirectoryXAmzTargetEnum.DIRECTORY_SERVICE20150416_ACCEPT_SHARED_DIRECTORY) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AcceptSharedDirectoryResponse res = sdk.acceptSharedDirectory(req);

            if (res.acceptSharedDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->