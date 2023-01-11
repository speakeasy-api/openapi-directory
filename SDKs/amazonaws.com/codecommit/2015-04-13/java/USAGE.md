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
                    xAmzAlgorithm = "omnis";
                    xAmzContentSha256 = "ut";
                    xAmzCredential = "libero";
                    xAmzDate = "consequatur";
                    xAmzSecurityToken = "qui";
                    xAmzSignature = "sit";
                    xAmzSignedHeaders = "quasi";
                    xAmzTarget = "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository";
                }};
                request = new AssociateApprovalRuleTemplateWithRepositoryInput() {{
                    approvalRuleTemplateName = "voluptate";
                    repositoryName = "ut";
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