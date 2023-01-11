import dataclasses
from typing import Optional


@dataclasses.dataclass
class ModifyAuthenticationProfileResult:
    authentication_profile_content: Optional[str] = dataclasses.field(default=None)
    authentication_profile_name: Optional[str] = dataclasses.field(default=None)
    
