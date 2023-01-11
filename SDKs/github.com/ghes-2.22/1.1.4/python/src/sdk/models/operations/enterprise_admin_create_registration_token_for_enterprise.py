import dataclasses
from typing import Optional
from ..shared import authentication_token as shared_authentication_token


@dataclasses.dataclass
class EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest:
    path_params: EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authentication_token: Optional[shared_authentication_token.AuthenticationToken] = dataclasses.field(default=None)
    
