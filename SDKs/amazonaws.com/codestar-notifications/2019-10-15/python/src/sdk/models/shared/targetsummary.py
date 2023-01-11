import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetstatus_enum as shared_targetstatus_enum


@dataclass_json
@dataclasses.dataclass
class TargetSummary:
    r"""TargetSummary
    Information about the targets specified for a notification rule.
    """
    
    target_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetAddress') }})
    target_status: Optional[shared_targetstatus_enum.TargetStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetStatus') }})
    target_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    
