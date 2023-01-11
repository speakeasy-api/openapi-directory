<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AssociateAssetsRequest req = new AssociateAssetsRequest() {{
                pathParams = new AssociateAssetsPathParams() {{
                    assetId = "labore";
                }};
                headers = new AssociateAssetsHeaders() {{
                    xAmzAlgorithm = "cupiditate";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "cupiditate";
                    xAmzDate = "odio";
                    xAmzSecurityToken = "rerum";
                    xAmzSignature = "placeat";
                    xAmzSignedHeaders = "nostrum";
                }};
                request = new AssociateAssetsRequestBody() {{
                    childAssetId = "repellat";
                    clientToken = "earum";
                    hierarchyId = "eum";
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