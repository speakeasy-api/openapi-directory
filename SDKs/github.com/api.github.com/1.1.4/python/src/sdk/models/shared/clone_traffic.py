import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import traffic as shared_traffic


@dataclass_json
@dataclasses.dataclass
class CloneTraffic:
    r"""CloneTraffic
    Clone Traffic
    """
    
    clones: list[shared_traffic.Traffic] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clones') }})
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    uniques: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniques') }})
    
