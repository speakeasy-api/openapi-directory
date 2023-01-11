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
                    reportId = "voluptatem";
                }};
                headers = new DeleteReportDefinitionHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "maiores";
                    xAmzCredential = "est";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "qui";
                    xAmzSignature = "ex";
                    xAmzSignedHeaders = "quo";
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