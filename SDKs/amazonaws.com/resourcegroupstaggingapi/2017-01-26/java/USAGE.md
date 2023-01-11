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

            DescribeReportCreationRequest req = new DescribeReportCreationRequest() {{
                headers = new DescribeReportCreationHeaders() {{
                    xAmzAlgorithm = "placeat";
                    xAmzContentSha256 = "doloribus";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "pariatur";
                    xAmzSecurityToken = "sint";
                    xAmzSignature = "ipsam";
                    xAmzSignedHeaders = "qui";
                    xAmzTarget = "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("dolores", "aut");
                    put("est", "nobis");
                }};
            }};

            DescribeReportCreationResponse res = sdk.describeReportCreation(req);

            if (res.describeReportCreationOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->