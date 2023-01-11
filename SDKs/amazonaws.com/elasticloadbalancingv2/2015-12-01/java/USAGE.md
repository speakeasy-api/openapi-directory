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

            GetDeleteListenerRequest req = new GetDeleteListenerRequest() {{
                queryParams = new GetDeleteListenerQueryParams() {{
                    action = "DeleteListener";
                    listenerArn = "voluptate";
                    version = "2015-12-01";
                }};
                headers = new GetDeleteListenerHeaders() {{
                    xAmzAlgorithm = "autem";
                    xAmzContentSha256 = "sed";
                    xAmzCredential = "voluptas";
                    xAmzDate = "adipisci";
                    xAmzSecurityToken = "exercitationem";
                    xAmzSignature = "deserunt";
                    xAmzSignedHeaders = "ex";
                }};
            }};

            GetDeleteListenerResponse res = sdk.getDeleteListener(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->