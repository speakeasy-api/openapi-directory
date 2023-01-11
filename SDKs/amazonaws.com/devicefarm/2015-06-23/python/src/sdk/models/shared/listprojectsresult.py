import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import project as shared_project


@dataclass_json
@dataclasses.dataclass
class ListProjectsResult:
    r"""ListProjectsResult
    Represents the result of a list projects request.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    projects: Optional[list[shared_project.Project]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    
