import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import profilinggroupdescription as shared_profilinggroupdescription


@dataclass_json
@dataclasses.dataclass
class ListProfilingGroupsResponse:
    r"""ListProfilingGroupsResponse
    The structure representing the listProfilingGroupsResponse.
    """
    
    profiling_group_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingGroupNames') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    profiling_groups: Optional[list[shared_profilinggroupdescription.ProfilingGroupDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingGroups') }})
    
