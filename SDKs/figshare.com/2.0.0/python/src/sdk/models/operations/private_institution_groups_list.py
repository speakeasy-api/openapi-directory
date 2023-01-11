import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import group as shared_group


@dataclasses.dataclass
class PrivateInstitutionGroupsListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionGroupsListRequest:
    security: PrivateInstitutionGroupsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionGroupsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    groups: Optional[list[shared_group.Group]] = dataclasses.field(default=None)
    
