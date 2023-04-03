<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchDeleteBuildsXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchDeleteBuildsRequest;
import org.openapis.openapi.models.operations.BatchDeleteBuildsResponse;
import org.openapis.openapi.models.shared.BatchDeleteBuildsInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteBuildsRequest req = new BatchDeleteBuildsRequest() {{
                batchDeleteBuildsInput = new BatchDeleteBuildsInput() {{
                    ids = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "CodeBuild_20161006.BatchDeleteBuilds";
            }}            

            BatchDeleteBuildsResponse res = sdk.batchDeleteBuilds(req);

            if (res.batchDeleteBuildsOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->