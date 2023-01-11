import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import describeduser as shared_describeduser


@dataclass_json
@dataclasses.dataclass
class DescribeUserResponse:
    server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    user: shared_describeduser.DescribedUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    
