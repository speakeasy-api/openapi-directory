<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateAssetsRequestBody;
import org.openapis.openapi.models.operations.AssociateAssetsRequest;
import org.openapis.openapi.models.operations.AssociateAssetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAssetsRequest req = new AssociateAssetsRequest() {{
                requestBody = new AssociateAssetsRequestBody() {{
                    childAssetId = "corrupti";
                    clientToken = "provident";
                    hierarchyId = "distinctio";
                }};
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
                assetId = "deserunt";
            }}            

            AssociateAssetsResponse res = sdk.associateAssets(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->