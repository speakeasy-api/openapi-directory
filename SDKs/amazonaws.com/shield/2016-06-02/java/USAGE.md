<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketRequest;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketResponse;
import org.openapis.openapi.models.shared.AssociateDRTLogBucketRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDRTLogBucketRequest req = new AssociateDRTLogBucketRequest() {{
                associateDRTLogBucketRequest = new AssociateDRTLogBucketRequest() {{
                    logBucket = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "AWSShield_20160616.AssociateDRTLogBucket";
            }}            

            AssociateDRTLogBucketResponse res = sdk.associateDRTLogBucket(req);

            if (res.associateDRTLogBucketResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->