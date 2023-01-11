import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testgridproject as shared_testgridproject


@dataclass_json
@dataclasses.dataclass
class CreateTestGridProjectResult:
    test_grid_project: Optional[shared_testgridproject.TestGridProject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testGridProject') }})
    
