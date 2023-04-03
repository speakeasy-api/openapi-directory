<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryRequest;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryResponse;
import org.openapis.openapi.models.shared.AcceptSharedDirectoryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptSharedDirectoryRequest req = new AcceptSharedDirectoryRequest() {{
                acceptSharedDirectoryRequest = new AcceptSharedDirectoryRequest() {{
                    sharedDirectoryId = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "DirectoryService_20150416.AcceptSharedDirectory";
            }}            

            AcceptSharedDirectoryResponse res = sdk.acceptSharedDirectory(req);

            if (res.acceptSharedDirectoryResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->