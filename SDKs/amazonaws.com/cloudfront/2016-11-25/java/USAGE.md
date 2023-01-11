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

            CreateCloudFrontOriginAccessIdentity20161125Request req = new CreateCloudFrontOriginAccessIdentity20161125Request() {{
                headers = new CreateCloudFrontOriginAccessIdentity20161125Headers() {{
                    xAmzAlgorithm = "aut";
                    xAmzContentSha256 = "architecto";
                    xAmzCredential = "omnis";
                    xAmzDate = "ut";
                    xAmzSecurityToken = "sunt";
                    xAmzSignature = "modi";
                    xAmzSignedHeaders = "nisi";
                }};
                request = "dolores".getBytes();
            }};

            CreateCloudFrontOriginAccessIdentity20161125Response res = sdk.createCloudFrontOriginAccessIdentity20161125(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->