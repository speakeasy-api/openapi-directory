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

            AcceptMatchRequest req = new AcceptMatchRequest() {{
                headers = new AcceptMatchHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "ea";
                    xAmzCredential = "quia";
                    xAmzDate = "sed";
                    xAmzSecurityToken = "dolorem";
                    xAmzSignature = "accusamus";
                    xAmzSignedHeaders = "ut";
                    xAmzTarget = "GameLift.AcceptMatch";
                }};
                request = new AcceptMatchInput() {{
                    acceptanceType = "REJECT";
                    playerIds = new String[]() {{
                        add("accusamus"),
                    }};
                    ticketId = "quisquam";
                }};
            }};

            AcceptMatchResponse res = sdk.acceptMatch(req);

            if (res.acceptMatchOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->