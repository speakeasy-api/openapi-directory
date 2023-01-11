import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateUserResponse:
    server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
