import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BasicModelStats:
    average: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    median: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('median') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    p_variance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pVariance') }})
    std_dev: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stdDev') }})
    
