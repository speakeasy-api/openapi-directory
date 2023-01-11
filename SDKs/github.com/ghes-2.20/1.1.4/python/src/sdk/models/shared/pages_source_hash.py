import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PagesSourceHash:
    branch: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
