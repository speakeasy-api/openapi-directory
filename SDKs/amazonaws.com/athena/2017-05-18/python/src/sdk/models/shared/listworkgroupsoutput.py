import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workgroupsummary as shared_workgroupsummary


@dataclass_json
@dataclasses.dataclass
class ListWorkGroupsOutput:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    work_groups: Optional[list[shared_workgroupsummary.WorkGroupSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroups') }})
    
