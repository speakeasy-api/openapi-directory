import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createuserresponse as shared_createuserresponse
from ..shared import invalidtoken as shared_invalidtoken


@dataclass_json
@dataclasses.dataclass
class PostUserSample:
    admin: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    read_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    

@dataclasses.dataclass
class PostUserRequest:
    request: PostUserSample = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_user_response: Optional[shared_createuserresponse.CreateUserResponse] = dataclasses.field(default=None)
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    
