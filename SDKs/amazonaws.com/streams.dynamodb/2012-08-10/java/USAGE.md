<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DescribeStreamXAmzTargetEnum;
import org.openapis.openapi.models.operations.DescribeStreamRequest;
import org.openapis.openapi.models.operations.DescribeStreamResponse;
import org.openapis.openapi.models.shared.DescribeStreamInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStreamRequest req = new DescribeStreamRequest() {{
                describeStreamInput = new DescribeStreamInput() {{
                    exclusiveStartShardId = "corrupti";
                    limit = 592845;
                    streamArn = "distinctio";
                }};
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
                xAmzTarget = "DynamoDBStreams_20120810.DescribeStream";
            }}            

            DescribeStreamResponse res = sdk.describeStream(req);

            if (res.describeStreamOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->