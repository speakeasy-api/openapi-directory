import dataclasses
from typing import Optional
from ..shared import registerrequest as shared_registerrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class RegisterRequest:
    request: shared_registerrequest.RegisterRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
