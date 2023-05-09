<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStreamRequest;
import org.openapis.openapi.models.operations.DescribeStreamResponse;
import org.openapis.openapi.models.operations.DescribeStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStreamInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStreamRequest req = new DescribeStreamRequest(                new DescribeStreamInput("provident") {{
                                exclusiveStartShardId = "distinctio";
                                limit = 844266L;
                            }};, DescribeStreamXAmzTargetEnum.DYNAMO_DB_STREAMS20120810_DESCRIBE_STREAM) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            DescribeStreamResponse res = sdk.describeStream(req);

            if (res.describeStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->