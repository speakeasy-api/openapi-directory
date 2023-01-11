import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canarylastrun as shared_canarylastrun


@dataclass_json
@dataclasses.dataclass
class DescribeCanariesLastRunResponse:
    canaries_last_run: Optional[list[shared_canarylastrun.CanaryLastRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanariesLastRun') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
