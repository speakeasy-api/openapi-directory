import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import accountcreate as shared_accountcreate
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateInstitutionAccountsCreateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionAccountsCreateRequest:
    request: shared_accountcreate.AccountCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateInstitutionAccountsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionAccountsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
