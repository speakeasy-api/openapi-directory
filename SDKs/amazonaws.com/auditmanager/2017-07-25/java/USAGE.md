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

            AssociateAssessmentReportEvidenceFolderRequest req = new AssociateAssessmentReportEvidenceFolderRequest() {{
                pathParams = new AssociateAssessmentReportEvidenceFolderPathParams() {{
                    assessmentId = "sit";
                }};
                headers = new AssociateAssessmentReportEvidenceFolderHeaders() {{
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "culpa";
                    xAmzCredential = "expedita";
                    xAmzDate = "consequuntur";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "expedita";
                    xAmzSignedHeaders = "voluptas";
                }};
                request = new AssociateAssessmentReportEvidenceFolderRequestBody() {{
                    evidenceFolderId = "fugit";
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