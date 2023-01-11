import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentcontrol as shared_assessmentcontrol
from ..shared import delegation as shared_delegation
from ..shared import role as shared_role
from ..shared import controlsetstatus_enum as shared_controlsetstatus_enum


@dataclass_json
@dataclasses.dataclass
class AssessmentControlSet:
    r"""AssessmentControlSet
     Represents a set of controls in an Audit Manager assessment. 
    """
    
    controls: Optional[list[shared_assessmentcontrol.AssessmentControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controls') }})
    delegations: Optional[list[shared_delegation.Delegation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegations') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    manual_evidence_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualEvidenceCount') }})
    roles: Optional[list[shared_role.Role]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    status: Optional[shared_controlsetstatus_enum.ControlSetStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    system_evidence_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemEvidenceCount') }})
    
