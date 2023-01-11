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

            CancelChangeSetRequest req = new CancelChangeSetRequest() {{
                queryParams = new CancelChangeSetQueryParams() {{
                    catalog = "error";
                    changeSetId = "voluptatem";
                }};
                headers = new CancelChangeSetHeaders() {{
                    xAmzAlgorithm = "quia";
                    xAmzContentSha256 = "enim";
                    xAmzCredential = "aut";
                    xAmzDate = "impedit";
                    xAmzSecurityToken = "ratione";
                    xAmzSignature = "adipisci";
                    xAmzSignedHeaders = "eius";
                }};
            }};

            CancelChangeSetResponse res = sdk.cancelChangeSet(req);

            if (res.cancelChangeSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->