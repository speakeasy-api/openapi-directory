import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controlcomment as shared_controlcomment
from ..shared import controlresponse_enum as shared_controlresponse_enum
from ..shared import controlstatus_enum as shared_controlstatus_enum


@dataclass_json
@dataclasses.dataclass
class AssessmentControl:
    r"""AssessmentControl
     The control entity that represents a standard or custom control used in an Audit Manager assessment. 
    """
    
    assessment_report_evidence_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentReportEvidenceCount') }})
    comments: Optional[list[shared_controlcomment.ControlComment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    evidence_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceCount') }})
    evidence_sources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceSources') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    response: Optional[shared_controlresponse_enum.ControlResponseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: Optional[shared_controlstatus_enum.ControlStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
