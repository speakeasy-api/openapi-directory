import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancestatus_enum as shared_compliancestatus_enum
from ..shared import statusreason as shared_statusreason


@dataclass_json
@dataclasses.dataclass
class Compliance:
    r"""Compliance
    Contains finding details that are specific to control-based findings. Only returned for findings generated from controls.
    """
    
    related_requirements: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedRequirements') }})
    status: Optional[shared_compliancestatus_enum.ComplianceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_reasons: Optional[list[shared_statusreason.StatusReason]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusReasons') }})
    
