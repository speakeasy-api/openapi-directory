<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20171030RequestBodyCloudFrontOriginAccessIdentityConfig;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20171030RequestBody;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20171030Request;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20171030Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCloudFrontOriginAccessIdentity20171030Request req = new CreateCloudFrontOriginAccessIdentity20171030Request() {{
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
            }}            

            CreateCloudFrontOriginAccessIdentity20171030Response res = sdk.createCloudFrontOriginAccessIdentity20171030(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->