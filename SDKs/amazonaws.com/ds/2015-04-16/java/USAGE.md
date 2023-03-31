<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryHeaders;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryRequest;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryResponse;
import org.openapis.openapi.models.shared.AcceptSharedDirectoryRequest;

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

            AcceptSharedDirectoryRequest req = new AcceptSharedDirectoryRequest() {{
                headers = new AcceptSharedDirectoryHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "DirectoryService_20150416.AcceptSharedDirectory";
                }};
                request = new AcceptSharedDirectoryRequest() {{
                    sharedDirectoryId = "illum";
                }};
            }};            

            AcceptSharedDirectoryResponse res = sdk.acceptSharedDirectory(req);

            if (res.acceptSharedDirectoryResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->