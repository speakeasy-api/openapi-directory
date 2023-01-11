import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SectionTaskInsertRequest:
    task: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    insert_after: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insert_after') }})
    insert_before: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insert_before') }})
    
