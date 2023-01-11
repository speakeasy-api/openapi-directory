import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResetPasswordRequest:
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    
