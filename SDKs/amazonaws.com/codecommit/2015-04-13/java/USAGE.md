<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateApprovalRuleTemplateWithRepositoryRequest;
import org.openapis.openapi.models.operations.AssociateApprovalRuleTemplateWithRepositoryResponse;
import org.openapis.openapi.models.shared.AssociateApprovalRuleTemplateWithRepositoryInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateApprovalRuleTemplateWithRepositoryRequest req = new AssociateApprovalRuleTemplateWithRepositoryRequest() {{
                associateApprovalRuleTemplateWithRepositoryInput = new AssociateApprovalRuleTemplateWithRepositoryInput() {{
                    approvalRuleTemplateName = "corrupti";
                    repositoryName = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                xAmzTarget = "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository";
            }}            

            AssociateApprovalRuleTemplateWithRepositoryResponse res = sdk.associateApprovalRuleTemplateWithRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->