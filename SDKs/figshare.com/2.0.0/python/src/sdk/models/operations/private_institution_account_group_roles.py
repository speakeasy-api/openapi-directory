import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateInstitutionAccountGroupRolesPathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountGroupRolesSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountGroupRolesRequest:
    path_params: PrivateInstitutionAccountGroupRolesPathParams = dataclasses.field()
    security: PrivateInstitutionAccountGroupRolesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionAccountGroupRolesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_group_roles: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
