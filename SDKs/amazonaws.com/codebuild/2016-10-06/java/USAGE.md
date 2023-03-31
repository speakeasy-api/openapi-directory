<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchDeleteBuildsXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchDeleteBuildsHeaders;
import org.openapis.openapi.models.operations.BatchDeleteBuildsRequest;
import org.openapis.openapi.models.operations.BatchDeleteBuildsResponse;
import org.openapis.openapi.models.shared.BatchDeleteBuildsInput;

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

            BatchDeleteBuildsRequest req = new BatchDeleteBuildsRequest() {{
                headers = new BatchDeleteBuildsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "CodeBuild_20161006.BatchDeleteBuilds";
                }};
                request = new BatchDeleteBuildsInput() {{
                    ids = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                }};
            }};            

            BatchDeleteBuildsResponse res = sdk.batchDeleteBuilds(req);

            if (res.batchDeleteBuildsOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->