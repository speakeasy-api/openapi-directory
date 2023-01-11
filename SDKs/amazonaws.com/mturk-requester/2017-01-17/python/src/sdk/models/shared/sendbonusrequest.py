import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendBonusRequest:
    assignment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentId') }})
    bonus_amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BonusAmount') }})
    reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    worker_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerId') }})
    unique_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueRequestToken') }})
    
