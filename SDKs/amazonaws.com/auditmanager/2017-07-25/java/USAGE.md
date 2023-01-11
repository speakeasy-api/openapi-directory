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
                    assessmentId = "cum";
                }};
                headers = new AssociateAssessmentReportEvidenceFolderHeaders() {{
                    xAmzAlgorithm = "hic";
                    xAmzContentSha256 = "qui";
                    xAmzCredential = "cum";
                    xAmzDate = "facilis";
                    xAmzSecurityToken = "consequatur";
                    xAmzSignature = "molestiae";
                    xAmzSignedHeaders = "laudantium";
                }};
                request = new AssociateAssessmentReportEvidenceFolderRequestBody() {{
                    evidenceFolderId = "tempore";
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