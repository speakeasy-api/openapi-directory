<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20190326RequestBodyCloudFrontOriginAccessIdentityConfig;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20190326RequestBody;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20190326Request;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20190326Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCloudFrontOriginAccessIdentity20190326Request req = new CreateCloudFrontOriginAccessIdentity20190326Request() {{
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
            }}            

            CreateCloudFrontOriginAccessIdentity20190326Response res = sdk.createCloudFrontOriginAccessIdentity20190326(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->