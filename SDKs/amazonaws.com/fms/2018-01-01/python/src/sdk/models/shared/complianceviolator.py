import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import violationreason_enum as shared_violationreason_enum


@dataclass_json
@dataclasses.dataclass
class ComplianceViolator:
    r"""ComplianceViolator
    Details of the resource that is not protected by the policy.
    """
    
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    violation_reason: Optional[shared_violationreason_enum.ViolationReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationReason') }})
    
