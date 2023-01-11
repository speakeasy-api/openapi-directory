import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectsummary as shared_projectsummary


@dataclass_json
@dataclasses.dataclass
class ListProjectsResult:
    projects: list[shared_projectsummary.ProjectSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
