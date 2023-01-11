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
                    xAmzAlgorithm = "tempora";
                    xAmzContentSha256 = "quas";
                    xAmzCredential = "exercitationem";
                    xAmzDate = "tempore";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "qui";
                    xAmzSignedHeaders = "magnam";
                    xAmzTarget = "AWSShield_20160616.AssociateDRTLogBucket";
                }};
                request = new AssociateDrtLogBucketRequest() {{
                    logBucket = "sequi";
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