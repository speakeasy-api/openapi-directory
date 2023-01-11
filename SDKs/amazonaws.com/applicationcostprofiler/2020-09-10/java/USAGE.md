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

            DeleteReportDefinitionRequest req = new DeleteReportDefinitionRequest() {{
                pathParams = new DeleteReportDefinitionPathParams() {{
                    reportId = "sit";
                }};
                headers = new DeleteReportDefinitionHeaders() {{
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "culpa";
                    xAmzCredential = "expedita";
                    xAmzDate = "consequuntur";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "expedita";
                    xAmzSignedHeaders = "voluptas";
                }};
            }};

            DeleteReportDefinitionResponse res = sdk.deleteReportDefinition(req);

            if (res.deleteReportDefinitionResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->