import dataclasses
from typing import Optional
from ..shared import assumedroleuser as shared_assumedroleuser
from ..shared import credentials as shared_credentials


@dataclasses.dataclass
class AssumeRoleWithWebIdentityResponse:
    r"""AssumeRoleWithWebIdentityResponse
    Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
    """
    
    assumed_role_user: Optional[shared_assumedroleuser.AssumedRoleUser] = dataclasses.field(default=None)
    audience: Optional[str] = dataclasses.field(default=None)
    credentials: Optional[shared_credentials.Credentials] = dataclasses.field(default=None)
    packed_policy_size: Optional[int] = dataclasses.field(default=None)
    provider: Optional[str] = dataclasses.field(default=None)
    source_identity: Optional[str] = dataclasses.field(default=None)
    subject_from_web_identity_token: Optional[str] = dataclasses.field(default=None)
    
