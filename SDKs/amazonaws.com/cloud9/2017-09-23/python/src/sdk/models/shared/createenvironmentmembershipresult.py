import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentmember as shared_environmentmember


@dataclass_json
@dataclasses.dataclass
class CreateEnvironmentMembershipResult:
    membership: shared_environmentmember.EnvironmentMember = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('membership') }})
    
