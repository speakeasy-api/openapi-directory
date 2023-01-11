import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import qualificationrequirement as shared_qualificationrequirement


@dataclass_json
@dataclasses.dataclass
class CreateHitTypeRequest:
    assignment_duration_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentDurationInSeconds') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    reward: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reward') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    auto_approval_delay_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoApprovalDelayInSeconds') }})
    keywords: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keywords') }})
    qualification_requirements: Optional[list[shared_qualificationrequirement.QualificationRequirement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationRequirements') }})
    
