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

            ChangeServerLifeCycleStateRequest req = new ChangeServerLifeCycleStateRequest() {{
                headers = new ChangeServerLifeCycleStateHeaders() {{
                    xAmzAlgorithm = "natus";
                    xAmzContentSha256 = "corrupti";
                    xAmzCredential = "quis";
                    xAmzDate = "consequatur";
                    xAmzSecurityToken = "tenetur";
                    xAmzSignature = "alias";
                    xAmzSignedHeaders = "similique";
                }};
                request = new ChangeServerLifeCycleStateRequestBody() {{
                    lifeCycle = new ChangeServerLifeCycleStateRequestBodyLifeCycle() {{
                        state = "READY_FOR_TEST";
                    }};
                    sourceServerID = "fugit";
                }};
            }};

            ChangeServerLifeCycleStateResponse res = sdk.changeServerLifeCycleState(req);

            if (res.sourceServer.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->