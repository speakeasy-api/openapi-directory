import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProjectSectionInsertRequest:
    project: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    section: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    after_section: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('after_section') }})
    before_section: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('before_section') }})
    
