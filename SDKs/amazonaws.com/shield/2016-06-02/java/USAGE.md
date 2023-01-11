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

            AssociateDrtLogBucketRequest req = new AssociateDrtLogBucketRequest() {{
                headers = new AssociateDrtLogBucketHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSShield_20160616.AssociateDRTLogBucket";
                }};
                request = new AssociateDrtLogBucketRequest() {{
                    logBucket = "fugit";
                }};
            }};

            AssociateDrtLogBucketResponse res = sdk.associateDrtLogBucket(req);

            if (res.associateDRTLogBucketResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->