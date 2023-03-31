<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateAssessmentReportEvidenceFolderPathParams;
import org.openapis.openapi.models.operations.AssociateAssessmentReportEvidenceFolderHeaders;
import org.openapis.openapi.models.operations.AssociateAssessmentReportEvidenceFolderRequestBody;
import org.openapis.openapi.models.operations.AssociateAssessmentReportEvidenceFolderRequest;
import org.openapis.openapi.models.operations.AssociateAssessmentReportEvidenceFolderResponse;

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

            AssociateAssessmentReportEvidenceFolderRequest req = new AssociateAssessmentReportEvidenceFolderRequest() {{
                pathParams = new AssociateAssessmentReportEvidenceFolderPathParams() {{
                    assessmentId = "corrupti";
                }};
                headers = new AssociateAssessmentReportEvidenceFolderHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new AssociateAssessmentReportEvidenceFolderRequestBody() {{
                    evidenceFolderId = "vel";
                }};
            }};            

            AssociateAssessmentReportEvidenceFolderResponse res = sdk.associateAssessmentReportEvidenceFolder(req);

            if (res.associateAssessmentReportEvidenceFolderResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->