import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationmode as shared_authenticationmode
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateUserRequest:
    access_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessString') }})
    authentication_mode: shared_authenticationmode.AuthenticationMode = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationMode') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
