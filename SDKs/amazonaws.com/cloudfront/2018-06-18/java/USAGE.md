<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20180618RequestBodyCloudFrontOriginAccessIdentityConfig;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20180618RequestBody;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20180618Request;
import org.openapis.openapi.models.operations.CreateCloudFrontOriginAccessIdentity20180618Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCloudFrontOriginAccessIdentity20180618Request req = new CreateCloudFrontOriginAccessIdentity20180618Request() {{
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
            }}            

            CreateCloudFrontOriginAccessIdentity20180618Response res = sdk.createCloudFrontOriginAccessIdentity20180618(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->