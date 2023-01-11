import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RewritingRuleSerializer:
    ignore_case: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignore_case') }})
    regex: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    replace: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replace') }})
    
