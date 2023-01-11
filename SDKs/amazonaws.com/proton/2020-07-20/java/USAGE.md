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

            AcceptEnvironmentAccountConnectionRequest req = new AcceptEnvironmentAccountConnectionRequest() {{
                headers = new AcceptEnvironmentAccountConnectionHeaders() {{
                    xAmzAlgorithm = "possimus";
                    xAmzContentSha256 = "ullam";
                    xAmzCredential = "eveniet";
                    xAmzDate = "alias";
                    xAmzSecurityToken = "tenetur";
                    xAmzSignature = "dolorem";
                    xAmzSignedHeaders = "porro";
                    xAmzTarget = "AwsProton20200720.AcceptEnvironmentAccountConnection";
                }};
                request = new AcceptEnvironmentAccountConnectionInput() {{
                    id = "sed";
                }};
            }};

            AcceptEnvironmentAccountConnectionResponse res = sdk.acceptEnvironmentAccountConnection(req);

            if (res.acceptEnvironmentAccountConnectionOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->