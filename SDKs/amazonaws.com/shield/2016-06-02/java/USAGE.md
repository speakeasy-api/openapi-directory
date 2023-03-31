<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketHeaders;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketRequest;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketResponse;
import org.openapis.openapi.models.shared.AssociateDRTLogBucketRequest;

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

            AssociateDRTLogBucketRequest req = new AssociateDRTLogBucketRequest() {{
                headers = new AssociateDRTLogBucketHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSShield_20160616.AssociateDRTLogBucket";
                }};
                request = new AssociateDRTLogBucketRequest() {{
                    logBucket = "illum";
                }};
            }};            

            AssociateDRTLogBucketResponse res = sdk.associateDRTLogBucket(req);

            if (res.associateDRTLogBucketResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->