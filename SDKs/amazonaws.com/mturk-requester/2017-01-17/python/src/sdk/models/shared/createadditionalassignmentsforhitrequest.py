import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateAdditionalAssignmentsForHitRequest:
    hit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITId') }})
    number_of_additional_assignments: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfAdditionalAssignments') }})
    unique_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueRequestToken') }})
    
