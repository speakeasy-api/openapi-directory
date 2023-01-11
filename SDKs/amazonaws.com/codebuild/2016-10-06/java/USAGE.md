<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            BatchDeleteBuildsRequest req = new BatchDeleteBuildsRequest() {{
                headers = new BatchDeleteBuildsHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "CodeBuild_20161006.BatchDeleteBuilds";
                }};
                request = new BatchDeleteBuildsInput() {{
                    ids = new String[]() {{
                        add("et"),
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