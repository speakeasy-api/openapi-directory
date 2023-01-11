import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import profilinggroupdescription as shared_profilinggroupdescription


@dataclass_json
@dataclasses.dataclass
class DescribeProfilingGroupResponse:
    r"""DescribeProfilingGroupResponse
    The structure representing the describeProfilingGroupResponse.
    """
    
    profiling_group: shared_profilinggroupdescription.ProfilingGroupDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingGroup') }})
    
