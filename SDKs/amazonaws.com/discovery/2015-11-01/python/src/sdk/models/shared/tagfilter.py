import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TagFilter:
    r"""TagFilter
    The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
