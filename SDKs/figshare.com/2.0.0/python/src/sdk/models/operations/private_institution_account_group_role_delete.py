import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateInstitutionAccountGroupRoleDeletePathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    role_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'role_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountGroupRoleDeleteSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountGroupRoleDeleteRequest:
    path_params: PrivateInstitutionAccountGroupRoleDeletePathParams = dataclasses.field()
    security: PrivateInstitutionAccountGroupRoleDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionAccountGroupRoleDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
