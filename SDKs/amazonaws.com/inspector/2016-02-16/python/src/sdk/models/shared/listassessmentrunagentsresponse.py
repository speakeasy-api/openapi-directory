import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentrunagent as shared_assessmentrunagent


@dataclass_json
@dataclasses.dataclass
class ListAssessmentRunAgentsResponse:
    assessment_run_agents: list[shared_assessmentrunagent.AssessmentRunAgent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRunAgents') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
