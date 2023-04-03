<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CancelChangeSetRequest;
import org.openapis.openapi.models.operations.CancelChangeSetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelChangeSetRequest req = new CancelChangeSetRequest() {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "provident";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "unde";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "corrupti";
                catalog = "illum";
                changeSetId = "vel";
            }}            

            CancelChangeSetResponse res = sdk.cancelChangeSet(req);

            if (res.cancelChangeSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->