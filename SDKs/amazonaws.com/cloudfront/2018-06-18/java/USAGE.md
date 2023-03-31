<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20180618Headers;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20180618RequestBodyCloudFrontOriginAccessIdentityConfig;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20180618RequestBody;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20180618Request;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20180618Response;

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

            CreateCloudFrontOriginAccessIdentity20180618Request req = new CreateCloudFrontOriginAccessIdentity20180618Request() {{
                headers = new CreateCloudFrontOriginAccessIdentity20180618Headers() {{
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

            CreateCloudFrontOriginAccessIdentity20180618Response res = sdk.createCloudFrontOriginAccessIdentity20180618(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->