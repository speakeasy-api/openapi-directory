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
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "rem";
                    xAmzCredential = "quas";
                    xAmzDate = "animi";
                    xAmzSecurityToken = "saepe";
                    xAmzSignature = "harum";
                    xAmzSignedHeaders = "animi";
                    xAmzTarget = "OpsWorksCM_V2016_11_01.AssociateNode";
                }};
                request = new AssociateNodeRequest() {{
                    engineAttributes = new openapisdk.models.shared.EngineAttribute[]() {{
                        add(new EngineAttribute() {{
                            name = "optio";
                            value = "amet";
                        }}),
                        add(new EngineAttribute() {{
                            name = "eaque";
                            value = "qui";
                        }}),
                    }};
                    nodeName = "et";
                    serverName = "ex";
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