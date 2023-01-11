import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WeightedTarget:
    r"""WeightedTarget
    An object representing a target and its relative weight. Traffic is distributed across
             targets according to their relative weight. For example, a weighted target with a relative
             weight of 50 receives five times as much traffic as one with a relative weight of
             10.
    """
    
    virtual_node: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNode') }})
    weight: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
