import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentcontrolset as shared_assessmentcontrolset
from ..shared import frameworkmetadata as shared_frameworkmetadata


@dataclass_json
@dataclasses.dataclass
class AssessmentFramework:
    r"""AssessmentFramework
     The file used to structure and automate Audit Manager assessments for a given compliance standard. 
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    control_sets: Optional[list[shared_assessmentcontrolset.AssessmentControlSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlSets') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[shared_frameworkmetadata.FrameworkMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
