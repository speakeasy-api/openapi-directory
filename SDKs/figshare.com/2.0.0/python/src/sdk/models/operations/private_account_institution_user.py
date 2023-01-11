import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import user as shared_user


@dataclasses.dataclass
class PrivateAccountInstitutionUserPathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateAccountInstitutionUserSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateAccountInstitutionUserRequest:
    path_params: PrivateAccountInstitutionUserPathParams = dataclasses.field()
    security: PrivateAccountInstitutionUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateAccountInstitutionUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
