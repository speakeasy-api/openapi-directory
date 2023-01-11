import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CommitActivity:
    r"""CommitActivity
    Commit Activity
    """
    
    days: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('days') }})
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    week: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
