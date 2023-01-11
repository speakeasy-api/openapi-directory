import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FilterActivity:
    r"""FilterActivity
    An activity that filters a message based on its attributes.
    """
    
    filter: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
