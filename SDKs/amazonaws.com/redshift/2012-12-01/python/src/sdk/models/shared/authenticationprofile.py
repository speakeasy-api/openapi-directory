import dataclasses
from typing import Optional


@dataclasses.dataclass
class AuthenticationProfile:
    r"""AuthenticationProfile
    Describes an authentication profile.
    """
    
    authentication_profile_content: Optional[str] = dataclasses.field(default=None)
    authentication_profile_name: Optional[str] = dataclasses.field(default=None)
    
