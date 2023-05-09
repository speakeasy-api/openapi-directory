<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateApprovalRuleTemplateWithRepositoryRequest;
import org.openapis.openapi.models.operations.AssociateApprovalRuleTemplateWithRepositoryResponse;
import org.openapis.openapi.models.operations.AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateApprovalRuleTemplateWithRepositoryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateApprovalRuleTemplateWithRepositoryRequest req = new AssociateApprovalRuleTemplateWithRepositoryRequest(                new AssociateApprovalRuleTemplateWithRepositoryInput("provident", "distinctio");, AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum.CODE_COMMIT20150413_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORY) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateApprovalRuleTemplateWithRepositoryResponse res = sdk.associateApprovalRuleTemplateWithRepository(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->