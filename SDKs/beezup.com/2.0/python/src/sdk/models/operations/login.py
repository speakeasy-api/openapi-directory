import dataclasses
from typing import Optional
from ..shared import loginrequest as shared_loginrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import apicredentials as shared_apicredentials


@dataclasses.dataclass
class LoginRequest:
    request: shared_loginrequest.LoginRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class LoginResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    api_credentials: Optional[shared_apicredentials.APICredentials] = dataclasses.field(default=None)
    
