import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class User:
    r"""User
    User
    """
    
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_verification: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailVerification') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password_update: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordUpdate') }})
    prefs: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefs') }})
    registration: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration') }})
    status: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
