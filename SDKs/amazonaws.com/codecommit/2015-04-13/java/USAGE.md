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

            AssociateApprovalRuleTemplateWithRepositoryRequest req = new AssociateApprovalRuleTemplateWithRepositoryRequest() {{
                headers = new AssociateApprovalRuleTemplateWithRepositoryHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository";
                }};
                request = new AssociateApprovalRuleTemplateWithRepositoryInput() {{
                    approvalRuleTemplateName = "fugit";
                    repositoryName = "et";
                }};
            }};

            AssociateApprovalRuleTemplateWithRepositoryResponse res = sdk.associateApprovalRuleTemplateWithRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->