import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Rule:
    r"""Rule
    Rule
    """
    
    dollar_collection: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$collection') }})
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    array: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('array') }})
    default: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('list') }})
    required: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
