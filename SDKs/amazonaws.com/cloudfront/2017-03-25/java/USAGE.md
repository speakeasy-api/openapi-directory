<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20170325Headers;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20170325RequestBodyCloudFrontOriginAccessIdentityConfig;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20170325RequestBody;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20170325Request;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20170325Response;

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

            CreateCloudFrontOriginAccessIdentity20170325Request req = new CreateCloudFrontOriginAccessIdentity20170325Request() {{
                headers = new CreateCloudFrontOriginAccessIdentity20170325Headers() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = "illum".getBytes();
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