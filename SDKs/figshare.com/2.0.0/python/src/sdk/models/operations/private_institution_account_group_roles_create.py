import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateInstitutionAccountGroupRolesCreatePathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountGroupRolesCreateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountGroupRolesCreateRequest:
    path_params: PrivateInstitutionAccountGroupRolesCreatePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateInstitutionAccountGroupRolesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionAccountGroupRolesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
