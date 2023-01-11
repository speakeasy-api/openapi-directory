import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import profilinggroupdescription as shared_profilinggroupdescription


@dataclass_json
@dataclasses.dataclass
class CreateProfilingGroupResponse:
    r"""CreateProfilingGroupResponse
    The structure representing the createProfilingGroupResponse.
    """
    
    profiling_group: shared_profilinggroupdescription.ProfilingGroupDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingGroup') }})
    
