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

            DeleteLexiconRequest req = new DeleteLexiconRequest() {{
                pathParams = new DeleteLexiconPathParams() {{
                    lexiconName = "nemo";
                }};
                headers = new DeleteLexiconHeaders() {{
                    xAmzAlgorithm = "quia";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "sint";
                    xAmzDate = "distinctio";
                    xAmzSecurityToken = "maiores";
                    xAmzSignature = "exercitationem";
                    xAmzSignedHeaders = "sunt";
                }};
            }};

            DeleteLexiconResponse res = sdk.deleteLexicon(req);

            if (res.deleteLexiconOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->