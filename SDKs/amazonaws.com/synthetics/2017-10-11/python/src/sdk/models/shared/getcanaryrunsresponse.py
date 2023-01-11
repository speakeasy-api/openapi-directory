import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canaryrun as shared_canaryrun


@dataclass_json
@dataclasses.dataclass
class GetCanaryRunsResponse:
    canary_runs: Optional[list[shared_canaryrun.CanaryRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanaryRuns') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
