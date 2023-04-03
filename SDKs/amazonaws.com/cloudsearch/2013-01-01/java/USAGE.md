<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETBuildSuggestersActionEnum;
import org.openapis.openapi.models.operations.GETBuildSuggestersVersionEnum;
import org.openapis.openapi.models.operations.GETBuildSuggestersRequest;
import org.openapis.openapi.models.operations.GETBuildSuggestersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETBuildSuggestersRequest req = new GETBuildSuggestersRequest() {{
                action = "BuildSuggesters";
                domainName = "corrupti";
                version = "2013-01-01";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
            }}            

            GETBuildSuggestersResponse res = sdk.getBuildSuggesters(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->