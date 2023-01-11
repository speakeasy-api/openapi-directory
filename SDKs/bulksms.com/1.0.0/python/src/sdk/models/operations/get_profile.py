import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import profile as shared_profile


@dataclasses.dataclass
class GetProfileSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetProfileRequest:
    security: GetProfileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    profile: Optional[shared_profile.Profile] = dataclasses.field(default=None)
    
