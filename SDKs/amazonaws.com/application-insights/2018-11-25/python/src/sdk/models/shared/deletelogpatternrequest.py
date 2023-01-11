import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteLogPatternRequest:
    pattern_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatternName') }})
    pattern_set_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatternSetName') }})
    resource_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    
