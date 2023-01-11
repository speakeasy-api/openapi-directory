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

            AssociateMemberAccountRequest req = new AssociateMemberAccountRequest() {{
                headers = new AssociateMemberAccountHeaders() {{
                    xAmzAlgorithm = "qui";
                    xAmzContentSha256 = "harum";
                    xAmzCredential = "fuga";
                    xAmzDate = "facilis";
                    xAmzSecurityToken = "blanditiis";
                    xAmzSignature = "dicta";
                    xAmzSignedHeaders = "ea";
                    xAmzTarget = "MacieService.AssociateMemberAccount";
                }};
                request = new AssociateMemberAccountRequest() {{
                    memberAccountId = "non";
                }};
            }};

            AssociateMemberAccountResponse res = sdk.associateMemberAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->