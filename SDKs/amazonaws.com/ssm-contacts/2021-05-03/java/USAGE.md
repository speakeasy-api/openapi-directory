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

            AcceptPageRequest req = new AcceptPageRequest() {{
                headers = new AcceptPageHeaders() {{
                    xAmzAlgorithm = "vitae";
                    xAmzContentSha256 = "quasi";
                    xAmzCredential = "ipsum";
                    xAmzDate = "incidunt";
                    xAmzSecurityToken = "vitae";
                    xAmzSignature = "animi";
                    xAmzSignedHeaders = "eos";
                    xAmzTarget = "SSMContacts.AcceptPage";
                }};
                request = new AcceptPageRequest() {{
                    acceptCode = "aperiam";
                    acceptCodeValidation = "ENFORCE";
                    acceptType = "DELIVERED";
                    contactChannelId = "in";
                    note = "eum";
                    pageId = "quibusdam";
                }};
            }};

            AcceptPageResponse res = sdk.acceptPage(req);

            if (res.acceptPageResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->