import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputauthenticationtype_enum as shared_inputauthenticationtype_enum


@dataclass_json
@dataclasses.dataclass
class AuthenticationMode:
    r"""AuthenticationMode
    Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
    """
    
    passwords: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Passwords') }})
    type: Optional[shared_inputauthenticationtype_enum.InputAuthenticationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
