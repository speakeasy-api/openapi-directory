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

            CreateCloudFrontOriginAccessIdentity20170325Request req = new CreateCloudFrontOriginAccessIdentity20170325Request() {{
                headers = new CreateCloudFrontOriginAccessIdentity20170325Headers() {{
                    xAmzAlgorithm = "eos";
                    xAmzContentSha256 = "dolorem";
                    xAmzCredential = "in";
                    xAmzDate = "est";
                    xAmzSecurityToken = "quos";
                    xAmzSignature = "id";
                    xAmzSignedHeaders = "repellat";
                }};
                request = "repellendus".getBytes();
            }};

            CreateCloudFrontOriginAccessIdentity20170325Response res = sdk.createCloudFrontOriginAccessIdentity20170325(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->