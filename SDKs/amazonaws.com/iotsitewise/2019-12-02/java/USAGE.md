<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateAssetsPathParams;
import org.openapis.openapi.models.operations.AssociateAssetsHeaders;
import org.openapis.openapi.models.operations.AssociateAssetsRequestBody;
import org.openapis.openapi.models.operations.AssociateAssetsRequest;
import org.openapis.openapi.models.operations.AssociateAssetsResponse;

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

            AssociateAssetsRequest req = new AssociateAssetsRequest() {{
                pathParams = new AssociateAssetsPathParams() {{
                    assetId = "corrupti";
                }};
                headers = new AssociateAssetsHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new AssociateAssetsRequestBody() {{
                    childAssetId = "vel";
                    clientToken = "error";
                    hierarchyId = "deserunt";
                }};
            }};            

            AssociateAssetsResponse res = sdk.associateAssets(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->