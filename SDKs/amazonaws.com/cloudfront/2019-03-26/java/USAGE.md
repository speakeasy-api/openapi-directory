<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20190326Headers;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20190326RequestBodyCloudFrontOriginAccessIdentityConfig;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20190326RequestBody;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20190326Request;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20190326Response;

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

            CreateCloudFrontOriginAccessIdentity20190326Request req = new CreateCloudFrontOriginAccessIdentity20190326Request() {{
                headers = new CreateCloudFrontOriginAccessIdentity20190326Headers() {{
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

            CreateCloudFrontOriginAccessIdentity20190326Response res = sdk.createCloudFrontOriginAccessIdentity20190326(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->