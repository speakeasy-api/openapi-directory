import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessment as shared_assessment
from ..shared import role as shared_role


@dataclass_json
@dataclasses.dataclass
class GetAssessmentResponse:
    assessment: Optional[shared_assessment.Assessment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessment') }})
    user_role: Optional[shared_role.Role] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRole') }})
    
