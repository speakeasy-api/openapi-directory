<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketRequest;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketResponse;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateDRTLogBucketRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDRTLogBucketRequest req = new AssociateDRTLogBucketRequest(                new AssociateDRTLogBucketRequest("provident");, AssociateDRTLogBucketXAmzTargetEnum.AWS_SHIELD20160616_ASSOCIATE_DRT_LOG_BUCKET) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AssociateDRTLogBucketResponse res = sdk.associateDRTLogBucket(req);

            if (res.associateDRTLogBucketResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->