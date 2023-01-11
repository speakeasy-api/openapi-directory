import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invalidtoken as shared_invalidtoken
from ..shared import loginresponse as shared_loginresponse

class PostLoginSampleSourceEnum(str, Enum):
    I_OS = "iOS"
    ANDROID = "android"
    WEB = "web"


@dataclass_json
@dataclasses.dataclass
class PostLoginSample:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    source: Optional[PostLoginSampleSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclasses.dataclass
class PostLoginRequest:
    request: PostLoginSample = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostLoginResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    login_response: Optional[shared_loginresponse.LoginResponse] = dataclasses.field(default=None)
    
