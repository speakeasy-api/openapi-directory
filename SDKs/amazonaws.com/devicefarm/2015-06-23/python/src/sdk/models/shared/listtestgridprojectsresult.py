import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testgridproject as shared_testgridproject


@dataclass_json
@dataclasses.dataclass
class ListTestGridProjectsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    test_grid_projects: Optional[list[shared_testgridproject.TestGridProject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testGridProjects') }})
    
