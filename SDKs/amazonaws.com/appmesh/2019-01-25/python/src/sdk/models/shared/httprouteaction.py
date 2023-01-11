import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import weightedtarget as shared_weightedtarget


@dataclass_json
@dataclasses.dataclass
class HTTPRouteAction:
    r"""HTTPRouteAction
    An object that represents the action to take if a match is determined.
    """
    
    weighted_targets: list[shared_weightedtarget.WeightedTarget] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightedTargets') }})
    
