import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetComplianceDetailRequest:
    member_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberAccount') }})
    policy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    
