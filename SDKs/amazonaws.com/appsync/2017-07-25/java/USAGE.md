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

            CreateApiCacheRequest req = new CreateApiCacheRequest() {{
                pathParams = new CreateApiCachePathParams() {{
                    apiId = "aut";
                }};
                headers = new CreateApiCacheHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "qui";
                    xAmzCredential = "atque";
                    xAmzDate = "praesentium";
                    xAmzSecurityToken = "perferendis";
                    xAmzSignature = "ab";
                    xAmzSignedHeaders = "cumque";
                }};
                request = new CreateApiCacheRequestBody() {{
                    apiCachingBehavior = "FULL_REQUEST_CACHING";
                    atRestEncryptionEnabled = false;
                    transitEncryptionEnabled = true;
                    ttl = 1541276666071085218;
                    type = "SMALL";
                }};
            }};

            CreateApiCacheResponse res = sdk.createApiCache(req);

            if (res.createApiCacheResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->