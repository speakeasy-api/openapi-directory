<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateTeamMemberRequest(
    associate_team_member_request=shared.AssociateTeamMemberRequest(
        client_request_token="corrupti",
        project_id="provident",
        project_role="distinctio",
        remote_access_allowed=False,
        user_arn="quibusdam",
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amz_target="CodeStar_20170419.AssociateTeamMember",
)
    
res = s.associate_team_member(req)

if res.associate_team_member_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->