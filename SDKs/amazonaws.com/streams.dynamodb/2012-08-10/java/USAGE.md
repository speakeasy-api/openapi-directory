<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeStreamXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeStreamHeaders;
import org.openapis.openapi.models.operations.DescribeStreamRequest;
import org.openapis.openapi.models.operations.DescribeStreamResponse;
import org.openapis.openapi.models.shared.DescribeStreamInput;

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

            DescribeStreamRequest req = new DescribeStreamRequest() {{
                headers = new DescribeStreamHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "DynamoDBStreams_20120810.DescribeStream";
                }};
                request = new DescribeStreamInput() {{
                    exclusiveStartShardId = "illum";
                    limit = 423655;
                    streamArn = "error";
                }};
            }};            

            DescribeStreamResponse res = sdk.describeStream(req);

            if (res.describeStreamOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->