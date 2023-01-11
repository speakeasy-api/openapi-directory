import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalabletarget as shared_scalabletarget


@dataclass_json
@dataclasses.dataclass
class DescribeScalableTargetsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    scalable_targets: Optional[list[shared_scalabletarget.ScalableTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableTargets') }})
    
