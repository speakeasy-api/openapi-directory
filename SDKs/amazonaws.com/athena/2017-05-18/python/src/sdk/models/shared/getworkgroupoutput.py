import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workgroup as shared_workgroup


@dataclass_json
@dataclasses.dataclass
class GetWorkGroupOutput:
    work_group: Optional[shared_workgroup.WorkGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    
