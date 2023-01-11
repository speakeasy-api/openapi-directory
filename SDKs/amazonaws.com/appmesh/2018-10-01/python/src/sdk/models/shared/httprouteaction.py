import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import weightedtarget as shared_weightedtarget


@dataclass_json
@dataclasses.dataclass
class HTTPRouteAction:
    r"""HTTPRouteAction
    An object representing the traffic distribution requirements for matched HTTP
             requests.
    """
    
    weighted_targets: Optional[list[shared_weightedtarget.WeightedTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightedTargets') }})
    
