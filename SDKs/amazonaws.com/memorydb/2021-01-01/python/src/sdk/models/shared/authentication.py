import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationtype_enum as shared_authenticationtype_enum


@dataclass_json
@dataclasses.dataclass
class Authentication:
    r"""Authentication
    Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
    """
    
    password_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordCount') }})
    type: Optional[shared_authenticationtype_enum.AuthenticationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
