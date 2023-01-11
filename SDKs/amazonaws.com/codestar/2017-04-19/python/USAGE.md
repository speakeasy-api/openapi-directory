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
    
req = operations.AssociateTeamMemberRequest(
    headers=operations.AssociateTeamMemberHeaders(
        x_amz_algorithm="quod",
        x_amz_content_sha256="ut",
        x_amz_credential="ut",
        x_amz_date="sed",
        x_amz_security_token="quibusdam",
        x_amz_signature="harum",
        x_amz_signed_headers="repudiandae",
        x_amz_target="CodeStar_20170419.AssociateTeamMember",
    ),
    request=shared.AssociateTeamMemberRequest(
        client_request_token="molestiae",
        project_id="rerum",
        project_role="occaecati",
        remote_access_allowed=True,
        user_arn="rerum",
    ),
)
    
res = s.associate_team_member(req)

if res.associate_team_member_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->