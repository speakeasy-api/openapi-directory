import dataclasses
from typing import Optional
from ..shared import authenticationprofile as shared_authenticationprofile


@dataclasses.dataclass
class DescribeAuthenticationProfilesResult:
    authentication_profiles: Optional[list[shared_authenticationprofile.AuthenticationProfile]] = dataclasses.field(default=None)
    
