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
                headers = new DeleteReportDefinitionHeaders() {{
                    xAmzAlgorithm = "quo";
                    xAmzContentSha256 = "et";
                    xAmzCredential = "eligendi";
                    xAmzDate = "soluta";
                    xAmzSecurityToken = "enim";
                    xAmzSignature = "commodi";
                    xAmzSignedHeaders = "quia";
                    xAmzTarget = "AWSOrigamiServiceGatewayService.DeleteReportDefinition";
                }};
                request = new DeleteReportDefinitionRequest() {{
                    reportName = "placeat";
                }};
            }};

            DeleteReportDefinitionResponse res = sdk.deleteReportDefinition(req);

            if (res.deleteReportDefinitionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->