import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationmode as shared_authenticationmode


@dataclass_json
@dataclasses.dataclass
class UpdateUserRequest:
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    access_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessString') }})
    authentication_mode: Optional[shared_authenticationmode.AuthenticationMode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationMode') }})
    
