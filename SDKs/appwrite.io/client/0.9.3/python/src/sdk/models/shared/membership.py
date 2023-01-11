import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Membership:
    r"""Membership
    Membership
    """
    
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    confirm: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirm') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    invited: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invited') }})
    joined: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('joined') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    team_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamId') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
