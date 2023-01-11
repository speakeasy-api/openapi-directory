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

            CreateCloudFrontOriginAccessIdentity20171030Request req = new CreateCloudFrontOriginAccessIdentity20171030Request() {{
                headers = new CreateCloudFrontOriginAccessIdentity20171030Headers() {{
                    xAmzAlgorithm = "numquam";
                    xAmzContentSha256 = "aspernatur";
                    xAmzCredential = "ad";
                    xAmzDate = "velit";
                    xAmzSecurityToken = "distinctio";
                    xAmzSignature = "mollitia";
                    xAmzSignedHeaders = "ad";
                }};
                request = "error".getBytes();
            }};

            CreateCloudFrontOriginAccessIdentity20171030Response res = sdk.createCloudFrontOriginAccessIdentity20171030(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->