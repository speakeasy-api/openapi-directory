import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invalidtoken as shared_invalidtoken


@dataclass_json
@dataclasses.dataclass
class PostVerifyPasswordChangeSample:
    guid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guid') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclasses.dataclass
class PostVerifyPasswordChangeRequest:
    request: PostVerifyPasswordChangeSample = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostVerifyPasswordChangeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    
