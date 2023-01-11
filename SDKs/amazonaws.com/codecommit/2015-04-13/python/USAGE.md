<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AssociateApprovalRuleTemplateWithRepositoryRequest(
    headers=operations.AssociateApprovalRuleTemplateWithRepositoryHeaders(
        x_amz_algorithm="omnis",
        x_amz_content_sha256="ut",
        x_amz_credential="libero",
        x_amz_date="consequatur",
        x_amz_security_token="qui",
        x_amz_signature="sit",
        x_amz_signed_headers="quasi",
        x_amz_target="CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
    ),
    request=shared.AssociateApprovalRuleTemplateWithRepositoryInput(
        approval_rule_template_name="voluptate",
        repository_name="ut",
    ),
)
    
res = s.associate_approval_rule_template_with_repository(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->