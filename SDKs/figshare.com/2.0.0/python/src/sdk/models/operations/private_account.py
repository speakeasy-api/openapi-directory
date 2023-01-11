import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import account as shared_account
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateAccountSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateAccountRequest:
    security: PrivateAccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account: Optional[shared_account.Account] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
