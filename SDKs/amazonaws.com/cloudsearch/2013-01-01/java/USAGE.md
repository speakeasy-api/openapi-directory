<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETBuildSuggestersActionEnum;
import org.openapis.openapi.models.operations.GETBuildSuggestersRequest;
import org.openapis.openapi.models.operations.GETBuildSuggestersResponse;
import org.openapis.openapi.models.operations.GETBuildSuggestersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETBuildSuggestersRequest req = new GETBuildSuggestersRequest(GETBuildSuggestersActionEnum.BUILD_SUGGESTERS, "provident", GETBuildSuggestersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0101) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            GETBuildSuggestersResponse res = sdk.getBuildSuggesters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->