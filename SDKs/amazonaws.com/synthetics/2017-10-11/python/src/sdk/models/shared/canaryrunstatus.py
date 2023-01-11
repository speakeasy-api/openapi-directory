import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canaryrunstate_enum as shared_canaryrunstate_enum
from ..shared import canaryrunstatereasoncode_enum as shared_canaryrunstatereasoncode_enum


@dataclass_json
@dataclasses.dataclass
class CanaryRunStatus:
    r"""CanaryRunStatus
    This structure contains the status information about a canary run.
    """
    
    state: Optional[shared_canaryrunstate_enum.CanaryRunStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateReason') }})
    state_reason_code: Optional[shared_canaryrunstatereasoncode_enum.CanaryRunStateReasonCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateReasonCode') }})
    
