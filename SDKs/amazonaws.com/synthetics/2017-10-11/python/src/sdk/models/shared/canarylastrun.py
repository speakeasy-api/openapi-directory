import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canaryrun as shared_canaryrun


@dataclass_json
@dataclasses.dataclass
class CanaryLastRun:
    r"""CanaryLastRun
    This structure contains information about the most recent run of a single canary.
    """
    
    canary_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanaryName') }})
    last_run: Optional[shared_canaryrun.CanaryRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastRun') }})
    
