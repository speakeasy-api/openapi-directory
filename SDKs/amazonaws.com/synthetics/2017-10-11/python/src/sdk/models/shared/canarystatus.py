import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canarystate_enum as shared_canarystate_enum
from ..shared import canarystatereasoncode_enum as shared_canarystatereasoncode_enum


@dataclass_json
@dataclasses.dataclass
class CanaryStatus:
    r"""CanaryStatus
    A structure that contains the current state of the canary.
    """
    
    state: Optional[shared_canarystate_enum.CanaryStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateReason') }})
    state_reason_code: Optional[shared_canarystatereasoncode_enum.CanaryStateReasonCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateReasonCode') }})
    
