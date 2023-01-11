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

            AssociateNodeRequest req = new AssociateNodeRequest() {{
                headers = new AssociateNodeHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "OpsWorksCM_V2016_11_01.AssociateNode";
                }};
                request = new AssociateNodeRequest() {{
                    engineAttributes = new openapisdk.models.shared.EngineAttribute[]() {{
                        add(new EngineAttribute() {{
                            name = "et";
                            value = "nihil";
                        }}),
                    }};
                    nodeName = "rerum";
                    serverName = "dicta";
                }};
            }};

            AssociateNodeResponse res = sdk.associateNode(req);

            if (res.associateNodeResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->