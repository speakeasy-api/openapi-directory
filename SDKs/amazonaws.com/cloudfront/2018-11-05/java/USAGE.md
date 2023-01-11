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

            CreateCloudFrontOriginAccessIdentity20181105Request req = new CreateCloudFrontOriginAccessIdentity20181105Request() {{
                headers = new CreateCloudFrontOriginAccessIdentity20181105Headers() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "odio";
                    xAmzCredential = "voluptate";
                    xAmzDate = "velit";
                    xAmzSecurityToken = "commodi";
                    xAmzSignature = "iste";
                    xAmzSignedHeaders = "vero";
                }};
                request = "blanditiis".getBytes();
            }};

            CreateCloudFrontOriginAccessIdentity20181105Response res = sdk.createCloudFrontOriginAccessIdentity20181105(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->