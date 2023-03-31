<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteReportDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.operations.DeleteReportDefinitionHeaders;
import org.openapis.openapi.models.operations.DeleteReportDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteReportDefinitionResponse;
import org.openapis.openapi.models.shared.DeleteReportDefinitionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            DeleteReportDefinitionRequest req = new DeleteReportDefinitionRequest() {{
                headers = new DeleteReportDefinitionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSOrigamiServiceGatewayService.DeleteReportDefinition";
                }};
                request = new DeleteReportDefinitionRequest() {{
                    reportName = "illum";
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