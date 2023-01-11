import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import project as shared_project


@dataclass_json
@dataclasses.dataclass
class CreateProjectOutput:
    project: Optional[shared_project.Project] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    
