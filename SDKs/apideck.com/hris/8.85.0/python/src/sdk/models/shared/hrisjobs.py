import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import employee as shared_employee
from ..shared import hrisjob as shared_hrisjob


@dataclass_json
@dataclasses.dataclass
class HrisJobs:
    employee: Optional[shared_employee.Employee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    jobs: Optional[list[shared_hrisjob.HrisJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    
