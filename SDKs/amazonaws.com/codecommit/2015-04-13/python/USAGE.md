<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateApprovalRuleTemplateWithRepositoryRequest(
    associate_approval_rule_template_with_repository_input=shared.AssociateApprovalRuleTemplateWithRepositoryInput(
        approval_rule_template_name="corrupti",
        repository_name="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    x_amz_target="CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
)
    
res = s.associate_approval_rule_template_with_repository(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->