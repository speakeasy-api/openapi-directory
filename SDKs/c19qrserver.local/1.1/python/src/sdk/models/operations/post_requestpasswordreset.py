import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invalidtoken as shared_invalidtoken
from ..shared import requestpasswordresetresponse as shared_requestpasswordresetresponse


@dataclass_json
@dataclasses.dataclass
class PostRequestPasswordResetSample:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclasses.dataclass
class PostRequestPasswordResetRequest:
    request: PostRequestPasswordResetSample = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRequestPasswordResetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    request_password_reset_response: Optional[shared_requestpasswordresetresponse.RequestPasswordResetResponse] = dataclasses.field(default=None)
    
