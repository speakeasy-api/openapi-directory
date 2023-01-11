import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import projectcreate as shared_projectcreate
from ..shared import errormessage as shared_errormessage
from ..shared import location as shared_location


@dataclasses.dataclass
class PrivateProjectCreateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectCreateRequest:
    request: shared_projectcreate.ProjectCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateProjectCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    location: Optional[shared_location.Location] = dataclasses.field(default=None)
    
