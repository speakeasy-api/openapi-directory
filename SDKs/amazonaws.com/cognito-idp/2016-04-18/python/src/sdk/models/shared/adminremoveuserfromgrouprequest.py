import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdminRemoveUserFromGroupRequest:
    group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
