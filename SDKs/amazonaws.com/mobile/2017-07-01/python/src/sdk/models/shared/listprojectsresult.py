import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectsummary as shared_projectsummary


@dataclass_json
@dataclasses.dataclass
class ListProjectsResult:
    r"""ListProjectsResult
     Result structure used for requests to list projects in AWS Mobile Hub. 
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    projects: Optional[list[shared_projectsummary.ProjectSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    
