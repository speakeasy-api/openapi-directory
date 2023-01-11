import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteAuthenticationProfileResult:
    authentication_profile_name: Optional[str] = dataclasses.field(default=None)
    
