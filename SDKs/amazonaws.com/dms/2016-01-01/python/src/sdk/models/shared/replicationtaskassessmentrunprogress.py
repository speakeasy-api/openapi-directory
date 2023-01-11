import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReplicationTaskAssessmentRunProgress:
    r"""ReplicationTaskAssessmentRunProgress
    The progress values reported by the <code>AssessmentProgress</code> response element.
    """
    
    individual_assessment_completed_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndividualAssessmentCompletedCount') }})
    individual_assessment_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndividualAssessmentCount') }})
    
