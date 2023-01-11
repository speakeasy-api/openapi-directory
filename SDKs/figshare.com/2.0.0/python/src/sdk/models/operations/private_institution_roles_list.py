import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import role as shared_role


@dataclasses.dataclass
class PrivateInstitutionRolesListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionRolesListRequest:
    security: PrivateInstitutionRolesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionRolesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    roles: Optional[list[shared_role.Role]] = dataclasses.field(default=None)
    
